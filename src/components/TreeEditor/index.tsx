import React, { useState } from 'react';
import { CollapseProps, theme ,Collapse  } from 'antd';
import { MyTreeDataNode, treeData } from './data';
import { useImmer } from 'use-immer';
import { CaretRightOutlined } from '@ant-design/icons';
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


function getItems(data,panelStyle){
  const text = '属性'
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
      style: panelStyle,
    },
  ];

  return items;
}

const TreeEditor: React.FC = () => {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 6,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    // border: 'none',
  };
  return (
    <>
      <div>

      </div>
      <Collapse 
        bordered={false}
        accordion 
        items={getItems(undefined,panelStyle)}
        style={{ background: token.colorBgContainer }}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      />
    </>
    
  );
};

export default TreeEditor;