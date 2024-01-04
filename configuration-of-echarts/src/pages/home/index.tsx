import React, { useEffect, useState } from "react";
import EchartWrap from "@/components/EchartsWrap";
import { useImmer } from "use-immer";
import { EChartsOption } from "echarts";
import { graphic } from "echarts";
import axios from "axios";

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
                if (item.seriesName == "同比"||item.seriesName == "环比") {
                  result +=
                    item.marker +
                    " " +
                    item.seriesName +
                    " : " +
                    item.value +
                    "%</br>";
                } else {
                  result +=
                    item.marker +
                    " " +
                    item.seriesName +
                    " : " +
                    item.value +
                    "人</br>";
                }
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
        grid: {
          left: "50px",
          right: "80px",
          bottom: "30px",
          top: "20px",
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
    useEffect(()=>{
        async function init(){
            let {data} = await axios.get('test/data');
            console.log(data)
        }
        init();
    },[]);
    return (
        <div>
            <EchartWrap options={options}  style={{
                width:500,
                height:500
            }}/>
        </div>
    )
}
export default Home;