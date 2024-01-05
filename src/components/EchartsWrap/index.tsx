import React, { useEffect, useRef, useState } from "react";
import * as echarts from 'echarts/lib/echarts'
import {GridComponent} from 'echarts/components'
import { EChartsOption, EChartsType } from "echarts";
import { TooltipComponent } from 'echarts/components';
import { debounce } from 'lodash' //引入防抖函数

interface Props {
    id?:string,
    style?:React.CSSProperties,
    options:EChartsOption,
    className?:string
}
const EchartWrap:React.FC<Props> = (
    {
        id='chart',
        style={
            width:'100%',
            height:'100%'
        },
        options,
        className
    }
)=>{
    const [chart,setChart] = useState<EChartsType | null>(null);
    const chartRef = useRef<any>(null);
    function onResize(chart:EChartsType){
        let fn = debounce(
            () => {
                if(chart){
                    chart.resize({animation: {duration:500}});
                }
            },
            200
        )
        window.addEventListener( //自适应屏幕
            "resize",
            fn
            ,
            false
        )
        return fn;//用于销毁监听器
    }
    useEffect(()=>{ //初始化
        let fn =null;
        if(chartRef.current){
            echarts.use([GridComponent]);
            echarts.use([TooltipComponent]); 
            let chartEntity = echarts.init(chartRef.current);
            setChart(()=>{
                fn = onResize(chartEntity);
                return chartEntity;
            });
        }
        
        return ()=>{ //销毁处理函数
            if(chart) chart.dispose();
            if(fn){
                window.removeEventListener('resize',fn,false);
            }
            setChart(null);
        }
    },[])
    useEffect(()=>{
        if(chart) chart.setOption(options,true);
    },[chart,options])
    return (
        <div ref={chartRef} className={className} id={id} style={style}/>
    )
}

export default EchartWrap;