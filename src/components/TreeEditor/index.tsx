import React, { useState } from 'react';
import { CollapseProps, Tree,Collapse  } from 'antd';
import { MyTreeDataNode, treeData } from './data';
import { useImmer } from 'use-immer';
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
const text = '属性'
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const TreeEditor: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(["title-id"]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [storeData,updateData] = useImmer<any>(treeData);
  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue,info:any) => {
    let { checked,node:{ pos } } = info;
    setCheckedKeys(checkedKeysValue);
    updateData(draft=>{
      let dd = findByPos(draft,pos);
      dd.checked = checked;
    })
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <>
      <div>
        
      </div>
      <Collapse accordion items={items} />
      {/* <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={storeData}
        titleRender={(nodeData:any)=>{
          return <div style={{height:nodeData.checked?50:20}}>
            {nodeData.title}
          </div>
        }}
      /> */}
    </>
    
  );
};

export default TreeEditor;