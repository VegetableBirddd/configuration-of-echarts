import React, { useEffect, useRef, useState } from "react";
import * as echarts from 'echarts/lib/echarts'
import {GridComponent} from 'echarts/components'
import { EChartsOption, EChartsType } from "echarts";
import { TooltipComponent } from 'echarts/components';

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
    useEffect(()=>{ //初始化
        if(chartRef.current){
            echarts.use([GridComponent]);
            echarts.use([TooltipComponent]); 
            setChart(echarts.init(chartRef.current));
        }
        
        return ()=>{ //销毁处理函数
            if(chart) chart.dispose();
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