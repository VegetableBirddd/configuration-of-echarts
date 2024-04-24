import React, { useCallback, useState } from 'react';
import { CollapseProps, theme ,Collapse, Input, Typography, InputNumber, Switch, Select, ColorPicker  } from 'antd';
import { MyTreeDataNode, treeData } from './data';
import { useImmer } from 'use-immer';
import { CaretRightOutlined,PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';
import './index.css'
import { debounce,cloneDeep } from 'lodash' //引入防抖函数

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

function getItems(data,panelStyle,options={},pos=[] as any[]){ //根据data渲染样式
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
      if(v.title!==undefined) pos.push(v.title); //回溯分别设置位置值
      items.push({
        key:v.key,
        label:v.title,
        children: showItem(v.children,options,v,pos),
        style:panelStyle,
        extra:<PlusCircleOutlined
          onClick={(event) => {
            //阻止默认事件
            event.stopPropagation();
          }}
        />
      })
      if(v.title!==undefined) pos.pop();
    }
    
  }

  return items;
}

const handleChange = debounce((key,value)=>{ //统一表单改变事件，调用改变options函数
  console.log(key,value);
},300)

function typeItem(node,options,pos=[] as any[]){//通过不同类型渲染不同值
  if(node.type){
    pos = pos.filter(item=>item!=undefined); //这里要重新clone一下值，不然会一直修改一个pos,导致出错***
    pos.push(node.title);
    // console.log(pos)
    switch (node.type) {
      case 'string':
        return <Input placeholder={node.title} data-pos={pos.join('-')} defaultValue={findByPos(options,pos.join('-'))} onChange={(e)=>{
          handleChange(pos.join('-'),e.target.value)
        }}/>;
      case 'number':
        return <InputNumber placeholder={node.title} data-pos={pos.join('-')} defaultValue={findByPos(options,pos.join('-'))} onChange={(value)=>{
          handleChange(pos.join('-'),value)
        }}/>;
      case 'array':
        return <Input placeholder={node.title} data-pos={pos.join('-')} defaultValue={findByPos(options,pos.join('-'))} onChange={(value)=>{
          handleChange(pos.join('-'),value)
        }}/>;
      case 'stringArray':
        return <Input placeholder={node.title} data-pos={pos.join('-')} defaultValue={findByPos(options,pos.join('-'))} onChange={(value)=>{
          handleChange(pos.join('-'),value)
        }}/>;
      case 'select':
        return <Select
          data-pos={pos.join('-')}
          defaultValue={findByPos(options,pos.join('-'))}
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
            handleChange(pos.join('-'),value)
          }}
        />;
      case 'color':
        return <ColorPicker data-pos={pos.join('-')}  defaultValue={findByPos(options,pos.join('-'))} showText onChange={(value)=>{
          handleChange(pos.join('-'),value.toRgbString())
        }}/>;
      case 'function':
        return <Input.TextArea data-pos={pos.join('-')} defaultValue={findByPos(options,pos.join('-'))} placeholder={node.title} onChange={(value)=>{
          handleChange(pos.join('-'),value)
        }}/>;
      case 'boolean':
        return <Switch data-pos={pos.join('-')} defaultValue={findByPos(options,pos.join('-'))} checkedChildren="开启" unCheckedChildren="关闭" onChange={(value)=>{
          handleChange(pos.join('-'),value)
        }}/>;

    }
  } 
  return null;
}

function showItem(nodes:any[],options,nodeparent,pos=[] as any[]){
  let noChildArray:any[] = [];
  let childArray:any[] = [];
  
  if(nodeparent.type==='objectArray'){
    pos.pop();
    let findObj = findByPos(options,nodeparent.key);
    if(findObj instanceof Array){ //判断是否为数组
      for(let i=0;i<findObj.length;i++){
        let cloneObj = cloneDeep(nodeparent);
        cloneObj.title += '-'+i;
        cloneObj.type = 'none';
        cloneObj.key += '-'+i;
        childArray.push(cloneObj)
      }
    }else {
      let cloneObj = cloneDeep(nodeparent);
      cloneObj.type = 'none'
      // cloneObj.title += '-0';
      childArray.push(cloneObj);
    }
    return <Collapse 
    className='tree-editor'
    bordered={false}
    accordion 
    items={getItems(childArray,{
      marginBottom: 6,
      background: '#00000008',
      borderRadius: 8,
    },options)}
    style={{ background: '#00000008' }}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
  />
    
  }else{

    for(let i=0;i<nodes.length;i++){
      let node = nodes[i];
      if(node.title!==undefined) pos.push(node.tltle)
      if(!node.children){ //没有children
        noChildArray.push(
          <div style={{marginBottom:5}}>
            <Typography.Title level={5}>{node.title}</Typography.Title>
            {typeItem(node,options,pos)}
          </div>
        )
      }else{
        childArray.push(node)
      }
      pos.pop();
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
            },options,pos)}
            style={{ background: '#00000008' }}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          />
      }
    </>

  }
  
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
  const fn = useCallback(()=>{

  },[])
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