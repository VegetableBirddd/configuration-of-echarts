import React, { useState } from 'react';
import { CollapseProps, theme ,Collapse, Input, Typography  } from 'antd';
import { MyTreeDataNode, treeData } from './data';
import { useImmer } from 'use-immer';
import { CaretRightOutlined } from '@ant-design/icons';
import './index.css'

interface ITreeEditor {
  onChange:(newValue: any) => void;
  options:object;
}
function findByPos(data:MyTreeDataNode,pos:string){ // 通过位置寻找对象 '0-0-1'表示 data[0].children[0].children[1]
  let arr = pos.split('-');// [0,0,1]
  let index = 1;
  let res = data[arr[index++]];
  while(index<arr.length){
    let num = arr[index++];
    res = res.children[num];
  }
  return res;
}


function getItems(data,panelStyle,options={}){ //根据data渲染样式
  let items: CollapseProps['items'] = [];
  let renderKeys = new Set(Object.keys(options));
  for(let v of data){
    if(renderKeys.has(v.key)){ // 已配置状态
      panelStyle = {
        ...panelStyle,
        backgroundColor:'#0000001a'
      }
    }else{ // 未配置状态
      panelStyle = {
        ...panelStyle,
        backgroundColor:'#00000008'
      }
    }

    items.push({
      key:v.key,
      label:v.title,
      children:<ShowItem />,
      style:panelStyle
    })
  }

  return items;
}

const ShowItem:React.FC = ()=>{
  return <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',
      gap:'10px'
    }} >
      <div>
        <Typography.Title level={5}>Exceed Max</Typography.Title>
        <Input placeholder="Basic usage" />
      </div>
      <div>
        <Typography.Title level={5}>Exceed Max</Typography.Title>
        <Input.TextArea placeholder="Basic usage" />
      </div>
      <div>
        <Typography.Title level={5}>Exceed Max</Typography.Title>
        <Input.TextArea placeholder="Basic usage" />
      </div>
      <div>
        <Typography.Title level={5}>Exceed Max</Typography.Title>
        <Input placeholder="Basic usage" />
      </div>
      <div>
        <Typography.Title level={5}>Exceed Max</Typography.Title>
        <Input placeholder="Basic usage" />
      </div>
      <div>
        <Typography.Title level={5}>Exceed Max</Typography.Title>
        <Input.TextArea placeholder="Basic usage" />
      </div>
  </div>
}

const TreeEditor: React.FC<ITreeEditor> = ({
  onChange,//进行更新
  options,//获取已配置属性信息
}) => {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 6,
    background: '#00000008',
    borderRadius: token.borderRadiusLG,
    // border: 'none',
  };
  return (
    <>
      <Collapse 
        className='tree-editor'
        bordered={false}
        accordion 
        items={getItems(treeData,panelStyle,options)}
        style={{ background: token.colorBgContainer }}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      />
    </>
    
  );
};

export default TreeEditor;