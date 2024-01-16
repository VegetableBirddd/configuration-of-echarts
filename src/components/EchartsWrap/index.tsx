import React, { useCallback, useEffect, useRef, useState } from "react";

import * as echarts from 'echarts';//引入全部echarts，后期可根据需要引入
import { EChartsOption, EChartsType } from "echarts";
import { debounce } from 'lodash' //引入防抖函数
import { useSize } from "ahooks";

interface Props {
    id?:string,
    style?:React.CSSProperties,
    options:EChartsOption,
    className?:string,
    wrap?:HTMLElement|null,
    errorFn?:any
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
        wrap,
        errorFn
    }
)=>{
    const [chart,setChart] = useState<EChartsType | null>(null);
    const chartRef = useRef<any>(null);
    //用于setOptions防错
    const [testChart,setTestChart] = useState<EChartsType | null>(null);
    const testChartRef = useRef<any>(null);
    
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
            setChart(echarts.init(chartRef.current));
        }
        if(testChartRef.current){
            setTestChart(echarts.init(testChartRef.current));
        }
        
        return ()=>{ //销毁处理函数
            if(chart) chart.dispose();
            if(testChart) testChart.dispose();
            window.removeEventListener('resize',fn,false);
            setChart(null);
            setTestChart(null);
        }
    },[])
    useEffect(()=>{
        if(chart&&testChart){
            let singal = false;//报错信号
            try {
                testChart.setOption(options,true);
            } catch (error) {
                singal = true;
                console.log(error)
            }
            if(!singal){
                errorFn(false)
                chart.setOption(options,true);
            }else {
                //如果不行，只用重新实例化一个
                errorFn(true)
                testChart.dispose();
                setTestChart(echarts.init(testChartRef.current));
            }
        } 
    },[chart,options])
    return (
        <>
            <div ref={chartRef} className={className} id={id} style={style}/>
            <div ref={testChartRef} className={className} id='testChart' style={{
                display:'none' //用于测试属性是否报错
            }}/>
        </>
        
    )
}

export default EchartWrap;