import type { TreeDataNode } from 'antd';

export interface MyTreeDataNode extends TreeDataNode {
  checked?: boolean; //是否打√了
  parentKey: null | string;
  children?: MyTreeDataNode[]; //覆盖以前的children
}

export const treeData:MyTreeDataNode[] = [
  {
    title: 'title',
    key: 'title',
    parentKey:null,
    checkable:false,
    children: [
      {
        title: 'id',
        key: 'title-id',
        parentKey:'title',
      },
      {
        title: 'show',
        key: 'title-show',
        parentKey:'title',
      },
      {
        title: 'text',
        key: 'title-text',
        parentKey:'title',
      },
      {
        title: 'link',
        key: 'title-link',
        parentKey:'title',
      },
      {
        title: 'target',
        key: 'title-target',
        parentKey:'title',
      },
      {
        title: 'textStyle',
        key: 'title-textStyle',
        parentKey:'title',
        children:[
            {
                title: 'color',
                key: 'title-textStyle-color',
                parentKey:'title-textStyle',
            },
            {
                title: 'fontStyle',
                key: 'title-textStyle-fontStyle',
                parentKey:'title-textStyle',
            },
            {
                title: 'fontWeight',
                key: 'title-textStyle-fontWeight',
                parentKey:'title-textStyle',
            },
            {
                title: 'fontFamily',
                key: 'title-textStyle-fontFamily',
                parentKey:'title-textStyle',
            },
            {
                title: 'fontSize',
                key: 'title-textStyle-fontSize',
                parentKey:'title-textStyle',
            },
            {
                title: 'lineHeight',
                key: 'title-textStyle-lineHeight',
                parentKey:'title-textStyle',
            },
            {
                title: 'width',
                key: 'title-textStyle-width',
                parentKey:'title-textStyle',
            },
            {
                title: 'height',
                key: 'title-textStyle-height',
                parentKey:'title-textStyle',
            },
            {
                title: 'textBorderColor',
                key: 'title-textStyle-textBorderColor',
                parentKey:'title-textStyle',
            },
            {
                title: 'textBorderWidth',
                key: 'title-textStyle-textBorderWidth',
                parentKey:'title-textStyle',
            },
            {
                title: 'textBorderType',
                key: 'title-textStyle-textBorderType',
                parentKey:'title-textStyle',
            },
            {
                title: 'textBorderDashOffset',
                key: 'title-textStyle-textBorderDashOffset',
                parentKey:'title-textStyle',
            },
            {
                title: 'textShadowColor',
                key: 'title-textStyle-textShadowColor',
                parentKey:'title-textStyle',
            },
            {
                title: 'textShadowBlur',
                key: 'title-textStyle-textShadowBlur',
                parentKey:'title-textStyle',
            },
            {
                title: 'textShadowOffsetX',
                key: 'title-textStyle-textShadowOffsetX',
                parentKey:'title-textStyle',
            },
            {
                title: 'textShadowOffsetY',
                key: 'title-textStyle-textShadowOffsetY',
                parentKey:'title-textStyle',
            },
            {
                title: 'overflow',
                key: 'title-textStyle-overflow',
                parentKey:'title-textStyle',
            },
            {
                title: 'ellipsis',
                key: 'title-textStyle-ellipsis',
                parentKey:'title-textStyle',
            },
            {
                title: 'rich',
                key: 'title-textStyle-rich',
                parentKey:'title-textStyle',
            },
        ]
      },
      {
        title: 'subtext',
        key: 'title-subtext',
        parentKey:'title',
      },
      {
        title: 'sublink',
        key: 'title-sublink',
        parentKey:'title',
      },
      {
        title: 'subtarget',
        key: 'title-subtarget',
        parentKey:'title',
      },
      {
        title: 'subtextStyle',
        key: 'title-subtextStyle',
        parentKey:'title',
        children:[
            {
                title: 'color',
                key: 'title-subtextStyle-color',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'fontStyle',
                key: 'title-subtextStyle-fontStyle',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'fontWeight',
                key: 'title-subtextStyle-fontWeight',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'fontFamily',
                key: 'title-subtextStyle-fontFamily',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'fontSize',
                key: 'title-subtextStyle-fontSize',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'align',
                key: 'title-subtextStyle-align',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'verticalAlign',
                key: 'title-subtextStyle-verticalAlign',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'lineHeight',
                key: 'title-subtextStyle-lineHeight',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'width',
                key: 'title-subtextStyle-width',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'height',
                key: 'title-subtextStyle-height',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textBorderColor',
                key: 'title-subtextStyle-textBorderColor',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textBorderWidth',
                key: 'title-subtextStyle-textBorderWidth',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textBorderType',
                key: 'title-subtextStyle-textBorderType',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textBorderDashOffset',
                key: 'title-subtextStyle-textBorderDashOffset',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textShadowColor',
                key: 'title-subtextStyle-textShadowColor',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textShadowBlur',
                key: 'title-subtextStyle-textShadowBlur',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textShadowOffsetX',
                key: 'title-subtextStyle-textShadowOffsetX',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'textShadowOffsetY',
                key: 'title-subtextStyle-textShadowOffsetY',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'overflow',
                key: 'title-subtextStyle-overflow',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'ellipsis',
                key: 'title-subtextStyle-ellipsis',
                parentKey:'title-subtextStyle',
            },
            {
                title: 'rich',
                key: 'title-subtextStyle-rich',
                parentKey:'title-subtextStyle',
            },
        ]
      },
      {
        title: 'textAlign',
        key: 'title-textAlign',
        parentKey:'title',
      },
      {
        title: 'textVerticalAlign',
        key: 'title-textVerticalAlign',
        parentKey:'title',
      },
      {
        title: 'triggerEvent',
        key: 'title-triggerEvent',
        parentKey:'title',
      },
      {
        title: 'padding',
        key: 'title-padding',
        parentKey:'title',
      },
      {
        title: 'itemGap',
        key: 'title-itemGap',
        parentKey:'title',
      },
      {
        title: 'zlevel',
        key: 'title-zlevel',
        parentKey:'title',
      },
      {
        title: 'z',
        key: 'title-z',
        parentKey:'title',
      },
      {
        title: 'left',
        key: 'title-left',
        parentKey:'title',
      },
      {
        title: 'top',
        key: 'title-top',
        parentKey:'title',
      },
      {
        title: 'right',
        key: 'title-right',
        parentKey:'title',
      },
      {
        title: 'bottom',
        key: 'title-bottom',
        parentKey:'title',
      },
      {
        title: 'backgroundColor',
        key: 'title-backgroundColor',
        parentKey:'title',
      },
      {
        title: 'borderColor',
        key: 'title-borderColor',
        parentKey:'title',
      },
      {
        title: 'borderWidth',
        key: 'title-borderWidth',
        parentKey:'title',
      },
      {
        title: 'borderRadius',
        key: 'title-borderRadius',
        parentKey:'title',
      },
      {
        title: 'shadowBlur',
        key: 'title-shadowBlur',
        parentKey:'title',
      },
      {
        title: 'shadowColor',
        key: 'title-shadowColor',
        parentKey:'title',
      },
      {
        title: 'shadowOffsetX',
        key: 'title-shadowOffsetX',
        parentKey:'title',
      },
      {
        title: 'shadowOffsetY',
        key: 'title-shadowOffsetY',
        parentKey:'title',
      },
    ],
  },
  {
    title: 'legend',
    key: 'legend',
    parentKey:null,
    checkable:false,
    children:[
        {
            title: 'id',
            key: 'legend-id',
            parentKey:'legend',
        },
        {
          title: 'type',
          key: 'legend-type',
          parentKey:'legend',
        },
        {
          title: 'show',
          key: 'legend-show',
          parentKey:'legend',
        },
        {
          title: 'zlevel',
          key: 'legend-zlevel',
          parentKey:'legend',
        },
        {
          title: 'z',
          key: 'legend-z',
          parentKey:'legend',
        },
        {
          title: 'left',
          key: 'legend-left',
          parentKey:'legend',
        },
        {
          title: 'top',
          key: 'legend-top',
          parentKey:'legend',
        },
        {
          title: 'right',
          key: 'legend-right',
          parentKey:'legend',
        },
        {
          title: 'bottom',
          key: 'legend-bottom',
          parentKey:'legend',
        },
        {
          title: 'width',
          key: 'legend-width',
          parentKey:'legend',
        },
        {
          title: 'height',
          key: 'legend-height',
          parentKey:'legend',
        },
        {
          title: 'orient',
          key: 'legend-orient',
          parentKey:'legend',
        },
        {
          title: 'align',
          key: 'legend-align',
          parentKey:'legend',
        },
        {
          title: 'padding',
          key: 'legend-padding',
          parentKey:'legend',
        },
        {
          title: 'itemGap',
          key: 'legend-itemGap',
          parentKey:'legend',
        },
        {
          title: 'itemWidth',
          key: 'legend-itemWidth',
          parentKey:'legend',
        },
        {
          title: 'itemHeight',
          key: 'legend-itemHeight',
          parentKey:'legend',
        },
        {
          title: 'itemStyle',
          key: 'legend-itemStyle',
          parentKey:'legend',
        },
        {
          title: 'lineStyle',
          key: 'legend-lineStyle',
          parentKey:'legend',
        },
        {
          title: 'symbolRotate',
          key: 'legend-symbolRotate',
          parentKey:'legend',
        },
        {
          title: 'formatter',
          key: 'legend-formatter',
          parentKey:'legend',
        },
        {
          title: 'selectedMode',
          key: 'legend-selectedMode',
          parentKey:'legend',
        },
        {
          title: 'inactiveColor',
          key: 'legend-inactiveColor',
          parentKey:'legend',
        },
        {
          title: 'inactiveBorderColor',
          key: 'legend-inactiveBorderColor',
          parentKey:'legend',
        },
        {
          title: 'inactiveBorderWidth',
          key: 'legend-inactiveBorderWidth',
          parentKey:'legend',
        },
        {
          title: 'selected',
          key: 'legend-selected',
          parentKey:'legend',
        },
        {
          title: 'textStyle',
          key: 'legend-textStyle',
          parentKey:'legend',
        },
        {
          title: 'tooltip',
          key: 'legend-tooltip',
          parentKey:'legend',
        },
        {
          title: 'icon',
          key: 'legend-icon',
          parentKey:'legend',
        },
        {
          title: 'data',
          key: 'legend-data',
          parentKey:'legend',
        },
        {
          title: 'backgroundColor',
          key: 'legend-backgroundColor',
          parentKey:'legend',
        },
        {
          title: 'borderColor',
          key: 'legend-borderColor',
          parentKey:'legend',
        },
        {
          title: 'borderWidth',
          key: 'legend-borderWidth',
          parentKey:'legend',
        },
        {
          title: 'borderRadius',
          key: 'legend-borderRadius',
          parentKey:'legend',
        },
        {
          title: 'shadowBlur',
          key: 'legend-borderRadius',
          parentKey:'legend',
        }
    ]
  },
  {
    title: 'grid',
    key: 'grid',
    parentKey:null,
    checkable:false,
    children:[]
  },
  {
    title: 'xAxis',
    key: 'xAxis',
    parentKey:null,
    checkable:false,
    children:[]
  },
  {
    title: 'yAxis',
    key: 'yAxis',
    parentKey:null,
    checkable:false,
    children:[]
  },
  {
    title: 'tooltip',
    key: 'tooltip',
    parentKey:null,
    checkable:false,
    children:[]
  },
  {
    title: 'toolbox',
    key: 'toolbox',
    parentKey:null,
    checkable:false,
    children:[]
  },
  {
    title: 'dataset',
    key: 'dataset',
    parentKey:null,
    checkable:false,
    children:[]
  },
  {
    title: 'series',
    key: 'series',
    parentKey:null,
    checkable:false,
    children:[]
  },
];