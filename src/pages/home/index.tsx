import React, { useEffect, useRef, useState } from "react";
import EchartWrap from "@/components/EchartsWrap";
import { useImmer } from "use-immer";
import { EChartsOption } from "echarts";
import { graphic } from "echarts";
import axios from "axios";
const slideL = 15;//拉条宽度
const defaultDistance = 300;//默认长度
const minRightLength = 200;//右边最小长度
const minLeftLength = 550;//左边最小长度
const Home:React.FC = ()=>{
    const [options,updateOptions] = useImmer<EChartsOption>({
        // darkMode:true,
        // backgroundColor:'red',
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
          formatter: function (params) {
            // 添加单位
            var result = params[0].name + "<br>";
            params.forEach(function (item) {
              if (item.value) {
                result +=
                    item.marker +
                    " " +
                    item.seriesName +
                    " : " +
                    item.value +
                    "</br>";
              } else {
                result += item.marker + " " + item.seriesName + " :  - </br>";
              }
            });
            return result;
          },
        },
        legend: {
          data: ["今年", "去年"],
          textStyle: {
            color: "#B4B4B4",
          },
          top: "0",
        },
        xAxis: {
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          axisLine: {
            lineStyle: {
              color: "#B4B4B4",
            },
          },
          axisTick: {
            show: false,
          },
          offset:6
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
              },
            },
            alignTicks: true,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "今年",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              borderRadius: [5,5,0,0],
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" },
              ]),
            },
            data: [213, 123, 234, 12, 5, 912, 220, 13, 12, 152,663,23],
          },
          {
            name: "去年",
            type: "bar",
            // barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              borderRadius: [5,5,0,0],
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" },
              ]),
            },
            z: -12,
            data: [202, 112, 242, 7, 2, 592, 320, 6, 12, 151,263,620],
          }
        ],
      });
    const initialMouseX = useRef(0);
    const wrapParent = useRef<HTMLDivElement>(null);
    const [_,setSigal] = useState<boolean>(false);
    const [distance,setDistance] = useState<number>(defaultDistance);//调整布局
    const [isDragging, setIsDragging] = useState(false); //判断是否拖动
    const leftDistance = window.innerWidth - distance;
    function onResizeupdate(){//监听浏览器用于更新
      window.addEventListener(
        'resize',
        ()=>{
          setSigal(pre=>!pre);
        },
        false
      )
    }
    // 可拉动扩展条
    // 鼠标点击事件，触发鼠标滚动事件
    function onMouseDown(event: React.MouseEvent<HTMLDivElement>){
      initialMouseX.current = event.clientX;
      event.preventDefault();
      setIsDragging(true);
    }
    useEffect(()=>{
      const handleMouseMove = (event: MouseEvent)=>{
        if(isDragging){
          let l = distance - event.clientX + initialMouseX?.current;
          if(l<(minRightLength+slideL))l=minRightLength+slideL;//边界处理
          if(window.innerWidth-l<minLeftLength){//有点问题待修改
            l=minLeftLength;
          }
          
          setDistance(l);
        }
      }
      const handleMouseUp = () => {
        setIsDragging(false);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        // 记得清除监听事件
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    },[isDragging])
    useEffect(()=>{
        async function init(){
            let {data} = await axios.get('test/data');
        }
        init();
        onResizeupdate();
    },[]);
    return (
        <div className='flex flex-nowrap h-screen w-screen overflow-hidden relative'>
            <div ref={wrapParent} className=" h-full border-2" style={{
              maxWidth:'calc( 100% - 100px )',
              width:leftDistance
            }}>
              <EchartWrap options={options} wrap={wrapParent.current}/>
            </div>
            <div className=" h-full absolute top-0 bg-black cursor-col-resize" style={{
              left:leftDistance,
              width:slideL,
              background:'#f3f4fa'
            }}
              onMouseDown={onMouseDown}
            />
            <div className=" h-full" style={{
              width:distance-slideL,
              zIndex:999,
              marginLeft:slideL,
              minWidth:minRightLength
            }}>
              属性配置项
            </div>
        </div>
    )
}
export default Home;