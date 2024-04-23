import React, { useState } from 'react';
import { CollapseProps, theme ,Collapse, Input, Typography, InputNumber, Switch, Select, ColorPicker  } from 'antd';
import { MyTreeDataNode, treeData } from './data';
import { useImmer } from 'use-immer';
import { CaretRightOutlined } from '@ant-design/icons';
import './index.css'
import { debounce } from 'lodash' //引入防抖函数

interface ITreeEditor {
  onChange:(newValue: any) => void;
  options:object;
}
function findByPos(data,pos:string){ //通过传入的配置值Options和当前位置，来获取值
  let arr = pos.split('-');// [title,id]
  let index = 0;
  let res = data[arr[index++]];
  for(;index<arr.length;index++){
    if(res!==undefined){
      res = res[arr[index]]
    }
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
    if(v.children){
      items.push({
        key:v.key,
        label:v.title,
        children: showItem(v.children,options),
        style:panelStyle
      })
    }
    
  }

  return items;
}

const handleChange = debounce((key,value)=>{ //统一表单改变事件，调用改变options函数
  console.log(key,value);
},500)

function typeItem(node,options){//通过不同类型渲染不同值
  if(node.type){
    switch (node.type) {
      case 'string':
        return <Input placeholder={node.title} defaultValue={findByPos(options,node.key)} onChange={(e)=>{
          handleChange(node.key,e.target.value)
        }}/>;
      case 'number':
        return <InputNumber placeholder={node.title} onChange={(value)=>{
          handleChange(node.key,value)
        }}/>;
      case 'array':
        return <Input placeholder={node.title} onChange={(value)=>{
          handleChange(node.key,value)
        }}/>;
      case 'stringArray':
        return <Input placeholder={node.title} onChange={(value)=>{
          handleChange(node.key,value)
        }}/>;
      case 'select':
        return <Select
          allowClear
          placeholder={node.title}
          style={{ width: '100%' }}
          options={node.selectOptions.map(item=>{
            return {
              value:item,
              label:item
            }
          })}
          onChange={(value)=>{
            handleChange(node.key,value)
          }}
        />;
      case 'color':
        return <ColorPicker defaultValue="#1677ff" showText onChange={(value)=>{
          handleChange(node.key,value.toRgbString())
        }}/>;
      case 'function':
        return <Input.TextArea placeholder={node.title} onChange={(value)=>{
          handleChange(node.key,value)
        }}/>;
      case 'boolean':
        return <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={(value)=>{
          handleChange(node.key,value)
        }}/>;

    }
  } 
  return null;
}

function showItem(nodes:any[],options){
  let noChildArray:any[] = [];
  let childArray:any[] = [];
  for(let i=0;i<nodes.length;i++){
    let node = nodes[i];
    if(!node.children){ //没有children
      noChildArray.push(
        <div style={{marginBottom:5}}>
          <Typography.Title level={5}>{node.title}</Typography.Title>
          {typeItem(node,options)}
        </div>
      )
    }else{
      childArray.push(node)
    }
  }
  return <>
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',
      gap:'10px'
    }} >
      {noChildArray}
    </div>
    {
        <Collapse 
          className='tree-editor'
          bordered={false}
          accordion 
          items={getItems(childArray,{
            marginBottom: 6,
            background: '#00000008',
            borderRadius: 8,
          })}
          style={{ background: '#00000008' }}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        />
    }
  </>
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