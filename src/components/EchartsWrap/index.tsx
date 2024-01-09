import React, { useCallback, useEffect, useRef, useState } from "react";
import * as echarts from 'echarts/lib/echarts'
import {GridComponent} from 'echarts/components'
import { EChartsOption, EChartsType } from "echarts";
import { TooltipComponent } from 'echarts/components';
import { debounce } from 'lodash' //引入防抖函数
import { useSize } from "ahooks";

interface Props {
    id?:string,
    style?:React.CSSProperties,
    options:EChartsOption,
    className?:string,
    wrap?:HTMLElement|null
}
const EchartWrap:React.FC<Props> = (
    {
        id='chart',
        style={
            width:'100%',
            height:'100%'
        },
        options,
        className,
        wrap
    }
)=>{
    const [chart,setChart] = useState<EChartsType | null>(null);
    const chartRef = useRef<any>(null);
    const size = useSize(wrap);
    let fn = useCallback(debounce(
        () => {
            if(chart){
                chart.resize();
            }
        },
        0
    ),[chart])
    useEffect(()=>{ //监听容器大小
        fn();
    },[size])
    useEffect(()=>{ //自适应屏幕
        window.addEventListener("resize",fn,false)
    },[chart])
    useEffect(()=>{ //初始化
        if(chartRef.current){
            echarts.use([GridComponent]);
            echarts.use([TooltipComponent]); 
            setChart(echarts.init(chartRef.current));
        }
        
        return ()=>{ //销毁处理函数
            if(chart) chart.dispose();
            window.removeEventListener('resize',fn,false);
            setChart(null);
        }
    },[])
    useEffect(()=>{
        if(chart){
            try {
                chart.setOption(options,true);
            } catch (error) {
                console.log(error)
            }
        } 
    },[chart,options])
    return (
        <div ref={chartRef} className={className} id={id} style={style}/>
    )
}

export default EchartWrap;