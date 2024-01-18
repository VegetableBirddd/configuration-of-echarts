import React, { useState } from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';

interface MyTreeDataNode extends TreeDataNode {
  parentNode: null | string;
  children?: MyTreeDataNode[]; //覆盖以前的children
}

const treeData:MyTreeDataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    parentNode:null,
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        parentNode:'0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0',parentNode:'0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1',parentNode:'0-0-0' },
          { title: '0-0-0-2', key: '0-0-0-2',parentNode:'0-0-0' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        parentNode:'0-0',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0',parentNode:'0-0-1' },
          { title: '0-0-1-1', key: '0-0-1-1',parentNode:'0-0-1' },
          { title: '0-0-1-2', key: '0-0-1-2',parentNode:'0-0-1' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
        parentNode:'0-0',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    parentNode:null,
    children: [
      { title: '0-1-0', key: '0-1-0',parentNode:'0-1' },
      { title: '0-1-1', key: '0-1-1',parentNode:'0-1' },
      { title: '0-1-2', key: '0-1-2',parentNode:'0-1' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
    parentNode:null
  },
];

const TreeEditor: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    // console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue,info:any) => {
    console.log('onCheck', checkedKeysValue);
    console.log('e:',info)
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    // console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default TreeEditor;