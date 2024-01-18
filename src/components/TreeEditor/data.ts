import type { TreeDataNode } from 'antd';

interface MyTreeDataNode extends TreeDataNode {
  parentNode: null | string;
  children?: MyTreeDataNode[]; //覆盖以前的children
}

export const treeData:MyTreeDataNode[] = [
  {
    title: 'title',
    key: 'title',
    parentNode:null,
    checkable:false,
    children: [
      {
        title: 'id',
        key: 'title-id',
        parentNode:'title',
      },
      {
        title: 'show',
        key: 'title-show',
        parentNode:'title',
      },
      {
        title: 'text',
        key: 'title-text',
        parentNode:'title',
      },
      {
        title: 'link',
        key: 'title-link',
        parentNode:'title',
      },
      {
        title: 'target',
        key: 'title-target',
        parentNode:'title',
      },
      {
        title: 'textStyle',
        key: 'title-textStyle',
        parentNode:'title',
        children:[
            {
                title: 'color',
                key: 'title-textStyle-color',
                parentNode:'title-textStyle',
            },
            {
                title: 'fontStyle',
                key: 'title-textStyle-fontStyle',
                parentNode:'title-textStyle',
            },
            {
                title: 'fontWeight',
                key: 'title-textStyle-fontWeight',
                parentNode:'title-textStyle',
            },
            {
                title: 'fontFamily',
                key: 'title-textStyle-fontFamily',
                parentNode:'title-textStyle',
            },
            {
                title: 'fontSize',
                key: 'title-textStyle-fontSize',
                parentNode:'title-textStyle',
            },
            {
                title: 'lineHeight',
                key: 'title-textStyle-lineHeight',
                parentNode:'title-textStyle',
            },
            {
                title: 'width',
                key: 'title-textStyle-width',
                parentNode:'title-textStyle',
            },
            {
                title: 'height',
                key: 'title-textStyle-height',
                parentNode:'title-textStyle',
            },
            {
                title: 'textBorderColor',
                key: 'title-textStyle-textBorderColor',
                parentNode:'title-textStyle',
            },
            {
                title: 'textBorderWidth',
                key: 'title-textStyle-textBorderWidth',
                parentNode:'title-textStyle',
            },
            {
                title: 'textBorderType',
                key: 'title-textStyle-textBorderType',
                parentNode:'title-textStyle',
            },
            {
                title: 'textBorderDashOffset',
                key: 'title-textStyle-textBorderDashOffset',
                parentNode:'title-textStyle',
            },
            {
                title: 'textShadowColor',
                key: 'title-textStyle-textShadowColor',
                parentNode:'title-textStyle',
            },
            {
                title: 'textShadowBlur',
                key: 'title-textStyle-textShadowBlur',
                parentNode:'title-textStyle',
            },
            {
                title: 'textShadowOffsetX',
                key: 'title-textStyle-textShadowOffsetX',
                parentNode:'title-textStyle',
            },
            {
                title: 'textShadowOffsetY',
                key: 'title-textStyle-textShadowOffsetY',
                parentNode:'title-textStyle',
            },
            {
                title: 'overflow',
                key: 'title-textStyle-overflow',
                parentNode:'title-textStyle',
            },
            {
                title: 'ellipsis',
                key: 'title-textStyle-ellipsis',
                parentNode:'title-textStyle',
            },
            {
                title: 'rich',
                key: 'title-textStyle-rich',
                parentNode:'title-textStyle',
            },
        ]
      },
      {
        title: 'subtext',
        key: 'title-subtext',
        parentNode:'title',
      },
      {
        title: 'sublink',
        key: 'title-sublink',
        parentNode:'title',
      },
      {
        title: 'subtarget',
        key: 'title-subtarget',
        parentNode:'title',
      },
      {
        title: 'subtextStyle',
        key: 'title-subtextStyle',
        parentNode:'title',
        children:[
            {
                title: 'color',
                key: 'title-subtextStyle-color',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'fontStyle',
                key: 'title-subtextStyle-fontStyle',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'fontWeight',
                key: 'title-subtextStyle-fontWeight',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'fontFamily',
                key: 'title-subtextStyle-fontFamily',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'fontSize',
                key: 'title-subtextStyle-fontSize',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'align',
                key: 'title-subtextStyle-align',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'verticalAlign',
                key: 'title-subtextStyle-verticalAlign',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'lineHeight',
                key: 'title-subtextStyle-lineHeight',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'width',
                key: 'title-subtextStyle-width',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'height',
                key: 'title-subtextStyle-height',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textBorderColor',
                key: 'title-subtextStyle-textBorderColor',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textBorderWidth',
                key: 'title-subtextStyle-textBorderWidth',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textBorderType',
                key: 'title-subtextStyle-textBorderType',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textBorderDashOffset',
                key: 'title-subtextStyle-textBorderDashOffset',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textShadowColor',
                key: 'title-subtextStyle-textShadowColor',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textShadowBlur',
                key: 'title-subtextStyle-textShadowBlur',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textShadowOffsetX',
                key: 'title-subtextStyle-textShadowOffsetX',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'textShadowOffsetY',
                key: 'title-subtextStyle-textShadowOffsetY',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'overflow',
                key: 'title-subtextStyle-overflow',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'ellipsis',
                key: 'title-subtextStyle-ellipsis',
                parentNode:'title-subtextStyle',
            },
            {
                title: 'rich',
                key: 'title-subtextStyle-rich',
                parentNode:'title-subtextStyle',
            },
        ]
      },
      {
        title: 'textAlign',
        key: 'title-textAlign',
        parentNode:'title',
      },
      {
        title: 'textVerticalAlign',
        key: 'title-textVerticalAlign',
        parentNode:'title',
      },
      {
        title: 'triggerEvent',
        key: 'title-triggerEvent',
        parentNode:'title',
      },
      {
        title: 'padding',
        key: 'title-padding',
        parentNode:'title',
      },
      {
        title: 'itemGap',
        key: 'title-itemGap',
        parentNode:'title',
      },
      {
        title: 'zlevel',
        key: 'title-zlevel',
        parentNode:'title',
      },
      {
        title: 'z',
        key: 'title-z',
        parentNode:'title',
      },
      {
        title: 'left',
        key: 'title-left',
        parentNode:'title',
      },
      {
        title: 'top',
        key: 'title-top',
        parentNode:'title',
      },
      {
        title: 'right',
        key: 'title-right',
        parentNode:'title',
      },
      {
        title: 'bottom',
        key: 'title-bottom',
        parentNode:'title',
      },
      {
        title: 'backgroundColor',
        key: 'title-backgroundColor',
        parentNode:'title',
      },
      {
        title: 'borderColor',
        key: 'title-borderColor',
        parentNode:'title',
      },
      {
        title: 'borderWidth',
        key: 'title-borderWidth',
        parentNode:'title',
      },
      {
        title: 'borderRadius',
        key: 'title-borderRadius',
        parentNode:'title',
      },
      {
        title: 'shadowBlur',
        key: 'title-shadowBlur',
        parentNode:'title',
      },
      {
        title: 'shadowColor',
        key: 'title-shadowColor',
        parentNode:'title',
      },
      {
        title: 'shadowOffsetX',
        key: 'title-shadowOffsetX',
        parentNode:'title',
      },
      {
        title: 'shadowOffsetY',
        key: 'title-shadowOffsetY',
        parentNode:'title',
      },
    ],
  },
  {
    title: 'legend',
    key: 'legend',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'grid',
    key: 'grid',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'xAxis',
    key: 'xAxis',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'yAxis',
    key: 'yAxis',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'tooltip',
    key: 'tooltip',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'toolbox',
    key: 'toolbox',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'dataset',
    key: 'dataset',
    parentNode:null,
    checkable:false,
    children:[]
  },
  {
    title: 'series',
    key: 'series',
    parentNode:null,
    checkable:false,
    children:[]
  },
];