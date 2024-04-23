import type { TreeDataNode } from 'antd';
//对showType做个说明 'none'：表示父级没有属性设置功能 | 'string'：使用input框展示 | 'number'：使用input.number展示 | 
//      'array'：使用表格展示数组中多个值 | 'stringArray'：使用input框展示，逗号区分隔开 | 'select'：使用下拉框选择属性 |
//      'color'：使用颜色选择器 | 'function'：使用文本框展示 | 'boolean'：使用switch展示
type showType = 'none' | 'string' | 'number' | 'array' | 'stringArray' | 'select' | 'color' | 'function' | 'boolean'

export interface MyTreeDataNode extends TreeDataNode {
  checked?: boolean; //是否打√了
  parentKey: null | string;
  children?: MyTreeDataNode[]; //覆盖以前的children
  type?:showType;
  selectOptions?:string[];
}

export const treeData:MyTreeDataNode[] = [
  {
    title: 'title',
    key: 'title',
    parentKey:null,
    checkable:false,
    type:'none',
    children: [
      {
        title: 'id',
        key: 'title-id',
        parentKey:'title',
        type:'string',
      },
      {
        title: 'show',
        key: 'title-show',
        parentKey:'title',
        type:'boolean'
      },
      {
        title: 'text',
        key: 'title-text',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'link',
        key: 'title-link',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'target',
        key: 'title-target',
        parentKey:'title',
        type:'select',
        selectOptions:['self','blank']
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
                type:'color'
            },
            {
                title: 'fontStyle',
                key: 'title-textStyle-fontStyle',
                parentKey:'title-textStyle',
                type:'select',
                selectOptions:['normal','italic','oblique']
            },
            {
                title: 'fontWeight',
                key: 'title-textStyle-fontWeight',
                parentKey:'title-textStyle',
                type:'select',
                selectOptions:['normal','bold','bolder','lighter','100','200','300','400','500','600']
            },
            {
                title: 'fontFamily',
                key: 'title-textStyle-fontFamily',
                parentKey:'title-textStyle',
                type:'select',
                selectOptions:['sans-serif','serif','monospace','Arial','Courier New','Microsoft YaHei']
            },
            {
                title: 'fontSize',
                key: 'title-textStyle-fontSize',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'lineHeight',
                key: 'title-textStyle-lineHeight',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'width',
                key: 'title-textStyle-width',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'height',
                key: 'title-textStyle-height',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'textBorderColor',
                key: 'title-textStyle-textBorderColor',
                parentKey:'title-textStyle',
                type:'color'
            },
            {
                title: 'textBorderWidth',
                key: 'title-textStyle-textBorderWidth',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'textBorderType',
                key: 'title-textStyle-textBorderType',
                parentKey:'title-textStyle',
                type:'select',
                selectOptions:['solid','dashed','dotted']
            },
            {
                title: 'textBorderDashOffset',
                key: 'title-textStyle-textBorderDashOffset',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'textShadowColor',
                key: 'title-textStyle-textShadowColor',
                parentKey:'title-textStyle',
                type:'color'
            },
            {
                title: 'textShadowBlur',
                key: 'title-textStyle-textShadowBlur',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'textShadowOffsetX',
                key: 'title-textStyle-textShadowOffsetX',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'textShadowOffsetY',
                key: 'title-textStyle-textShadowOffsetY',
                parentKey:'title-textStyle',
                type:'number'
            },
            {
                title: 'overflow',
                key: 'title-textStyle-overflow',
                parentKey:'title-textStyle',
                type:'select',
                selectOptions:['none','truncate','break','breakAll']
            },
            {
                title: 'ellipsis',
                key: 'title-textStyle-ellipsis',
                parentKey:'title-textStyle',
                type:'string'
            },
            {
                title: 'rich-要和fo联动',
                key: 'title-textStyle-rich',
                parentKey:'title-textStyle',
            },
        ]
      },
      {
        title: 'subtext',
        key: 'title-subtext',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'sublink',
        key: 'title-sublink',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'subtarget',
        key: 'title-subtarget',
        parentKey:'title',
        type:'select',
        selectOptions:['self','blank']
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
                type:'color'
            },
            {
                title: 'fontStyle',
                key: 'title-subtextStyle-fontStyle',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['normal','italic','oblique']
            },
            {
                title: 'fontWeight',
                key: 'title-subtextStyle-fontWeight',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['normal','bold','bolder','lighter','100','200','300','400','500','600']
            },
            {
                title: 'fontFamily',
                key: 'title-subtextStyle-fontFamily',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['sans-serif','serif','monospace','Arial','Courier New','Microsoft YaHei']
            },
            {
                title: 'fontSize',
                key: 'title-subtextStyle-fontSize',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'align',
                key: 'title-subtextStyle-align',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['left','center','right']
            },
            {
                title: 'verticalAlign',
                key: 'title-subtextStyle-verticalAlign',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['top','middle','bottom']
            },
            {
                title: 'lineHeight',
                key: 'title-subtextStyle-lineHeight',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'width',
                key: 'title-subtextStyle-width',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'height',
                key: 'title-subtextStyle-height',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'textBorderColor',
                key: 'title-subtextStyle-textBorderColor',
                parentKey:'title-subtextStyle',
                type:'color'
            },
            {
                title: 'textBorderWidth',
                key: 'title-subtextStyle-textBorderWidth',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'textBorderType',
                key: 'title-subtextStyle-textBorderType',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['solid','dashed','dotted']
            },
            {
                title: 'textBorderDashOffset',
                key: 'title-subtextStyle-textBorderDashOffset',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'textShadowColor',
                key: 'title-subtextStyle-textShadowColor',
                parentKey:'title-subtextStyle',
                type:'color'
            },
            {
                title: 'textShadowBlur',
                key: 'title-subtextStyle-textShadowBlur',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'textShadowOffsetX',
                key: 'title-subtextStyle-textShadowOffsetX',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'textShadowOffsetY',
                key: 'title-subtextStyle-textShadowOffsetY',
                parentKey:'title-subtextStyle',
                type:'number'
            },
            {
                title: 'overflow',
                key: 'title-subtextStyle-overflow',
                parentKey:'title-subtextStyle',
                type:'select',
                selectOptions:['none','truncate','break','breakAll']
            },
            {
                title: 'ellipsis',
                key: 'title-subtextStyle-ellipsis',
                parentKey:'title-subtextStyle',
                type:'string'
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
        type:'select',
        selectOptions:['auto','left','right','center']
      },
      {
        title: 'textVerticalAlign',
        key: 'title-textVerticalAlign',
        parentKey:'title',
        type:'select',
        selectOptions:['auto','top','bottom','middle']
      },
      {
        title: 'triggerEvent',
        key: 'title-triggerEvent',
        parentKey:'title',
        type:'boolean'
      },
      {
        title: 'padding',
        key: 'title-padding',
        parentKey:'title',
        type:'stringArray'
      },
      {
        title: 'itemGap',
        key: 'title-itemGap',
        parentKey:'title',
        type:'number'
      },
      {
        title: 'zlevel',
        key: 'title-zlevel',
        parentKey:'title',
        type:'number'
      },
      {
        title: 'z',
        key: 'title-z',
        parentKey:'title',
        type:'number'
      },
      {
        title: 'left',
        key: 'title-left',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'top',
        key: 'title-top',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'right',
        key: 'title-right',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'bottom',
        key: 'title-bottom',
        parentKey:'title',
        type:'string'
      },
      {
        title: 'backgroundColor',
        key: 'title-backgroundColor',
        parentKey:'title',
        type:'color'
      },
      {
        title: 'borderColor',
        key: 'title-borderColor',
        parentKey:'title',
        type:'color'
      },
      {
        title: 'borderWidth',
        key: 'title-borderWidth',
        parentKey:'title',
        type:'number'
      },
      {
        title: 'borderRadius',
        key: 'title-borderRadius',
        parentKey:'title',
        type:'stringArray'
      },
      {
        title: 'shadowBlur',
        key: 'title-shadowBlur',
        parentKey:'title',
        type:'number'
      },
      {
        title: 'shadowColor',
        key: 'title-shadowColor',
        parentKey:'title',
        type:'color'
      },
      {
        title: 'shadowOffsetX',
        key: 'title-shadowOffsetX',
        parentKey:'title',
        type:'number'
      },
      {
        title: 'shadowOffsetY',
        key: 'title-shadowOffsetY',
        parentKey:'title',
        type:'number'
      },
    ],
  },
  {
    title: 'legend',
    key: 'legend',
    parentKey:null,
    checkable:false,
    type:'none',
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
          key: 'legend-shadowBlur',
          parentKey:'legend',
        },
        {
          title: 'shadowColor',
          key: 'legend-shadowColor',
          parentKey:'legend',
        },
        {
          title: 'shadowOffsetX',
          key: 'legend-shadowOffsetX',
          parentKey:'legend',
        },
        {
          title: 'shadowOffsetY',
          key: 'legend-shadowOffsetY',
          parentKey:'legend',
        },
        {
          title: 'scrollDataIndex',
          key: 'legend-scrollDataIndex',
          parentKey:'legend',
        },
        {
          title: 'pageButtonItemGap',
          key: 'legend-pageButtonItemGap',
          parentKey:'legend',
        },
        {
          title: 'pageButtonGap',
          key: 'legend-pageButtonGap',
          parentKey:'legend',
        },
        {
          title: 'pageButtonPosition',
          key: 'legend-pageButtonPosition',
          parentKey:'legend',
        },
        {
          title: 'pageFormatter',
          key: 'legend-pageFormatter',
          parentKey:'legend',
        },
        {
          title: 'pageIcons',
          key: 'legend-pageIcons',
          parentKey:'legend',
        },
        {
          title: 'pageIconColor',
          key: 'legend-pageIconColor',
          parentKey:'legend',
        },
        {
          title: 'pageIconInactiveColor',
          key: 'legend-pageIconInactiveColor',
          parentKey:'legend',
        },
        {
          title: 'pageIconSize',
          key: 'legend-pageIconSize',
          parentKey:'legend',
        },
        {
          title: 'pageTextStyle',
          key: 'legend-pageTextStyle',
          parentKey:'legend',
        },
        {
          title: 'animation',
          key: 'legend-animation',
          parentKey:'legend',
        },
        {
          title: 'animationDurationUpdate',
          key: 'legend-animationDurationUpdate',
          parentKey:'legend',
        },
        {
          title: 'emphasis',
          key: 'legend-emphasis',
          parentKey:'legend',
        },
        {
          title: 'selector',
          key: 'legend-selector',
          parentKey:'legend',
        },
        {
          title: 'selectorLabel',
          key: 'legend-selectorLabel',
          parentKey:'legend',
        },
        {
          title: 'selectorPosition',
          key: 'legend-selectorPosition',
          parentKey:'legend',
        },
        {
          title: 'selectorItemGap',
          key: 'legend-selectorItemGap',
          parentKey:'legend',
        },
        {
          title: 'selectorButtonGap',
          key: 'legend-selectorButtonGap',
          parentKey:'legend',
        }
    ]
  },
  {
    title: 'grid',
    key: 'grid',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[
      {
        title: 'id',
        key: 'grid-id',
        parentKey:'grid',
      },
      {
        title: 'show',
        key: 'grid-show',
        parentKey:'grid',
      },
      {
        title: 'zlevel',
        key: 'grid-zlevel',
        parentKey:'grid',
      },
      {
        title: 'z',
        key: 'grid-z',
        parentKey:'grid',
      },
      {
        title: 'left',
        key: 'grid-left',
        parentKey:'grid',
      },
      {
        title: 'top',
        key: 'grid-top',
        parentKey:'grid',
      },
      {
        title: 'right',
        key: 'grid-right',
        parentKey:'grid',
      },
      {
        title: 'bottom',
        key: 'grid-bottom',
        parentKey:'grid',
      },
      {
        title: 'width',
        key: 'grid-width',
        parentKey:'grid',
      },
      {
        title: 'height',
        key: 'grid-height',
        parentKey:'grid',
      },
      {
        title: 'containLabel',
        key: 'grid-containLabel',
        parentKey:'grid',
      },
      {
        title: 'backgroundColor',
        key: 'grid-backgroundColor',
        parentKey:'grid',
      },
      {
        title: 'borderColor',
        key: 'grid-borderColor',
        parentKey:'grid',
      },
      {
        title: 'borderWidth',
        key: 'grid-borderWidth',
        parentKey:'grid',
      },
      {
        title: 'shadowBlur',
        key: 'grid-shadowBlur',
        parentKey:'grid',
      },
      {
        title: 'shadowColor',
        key: 'grid-shadowColor',
        parentKey:'grid',
      },
      {
        title: 'shadowOffsetX',
        key: 'grid-shadowOffsetX',
        parentKey:'grid',
      },
      {
        title: 'shadowOffsetY',
        key: 'grid-shadowOffsetY',
        parentKey:'grid',
      },
      {
        title: 'tooltip',
        key: 'grid-tooltip',
        parentKey:'grid',
      }
    ]
  },
  {
    title: 'xAxis',
    key: 'xAxis',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[
      {
        title: 'id',
        key: 'xAxis-id',
        parentKey:'xAxis',
      },
      {
        title: 'show',
        key: 'xAxis-show',
        parentKey:'xAxis',
      },
      {
        title: 'gridIndex',
        key: 'xAxis-gridIndex',
        parentKey:'xAxis',
      },
      {
        title: 'alignTicks',
        key: 'xAxis-alignTicks',
        parentKey:'xAxis',
      },
      {
        title: 'pisition',
        key: 'xAxis-pisition',
        parentKey:'xAxis',
      },
      {
        title: 'offset',
        key: 'xAxis-offset',
        parentKey:'xAxis',
      },
      {
        title: 'type',
        key: 'xAxis-type',
        parentKey:'xAxis',
      },
      {
        title: 'name',
        key: 'xAxis-name',
        parentKey:'xAxis',
      },
      {
        title: 'nameLocation',
        key: 'xAxis-nameLocation',
        parentKey:'xAxis',
      },
      {
        title: 'nameTextStyle',
        key: 'xAxis-nameTextStyle',
        parentKey:'xAxis',
      },
      {
        title: 'nameGap',
        key: 'xAxis-nameGap',
        parentKey:'xAxis',
      },
      {
        title: 'nameRotate',
        key: 'xAxis-nameRotate',
        parentKey:'xAxis',
      },
      {
        title: 'nameTruncate',
        key: 'xAxis-nameTruncate',
        parentKey:'xAxis',
      },
      {
        title: 'inverse',
        key: 'xAxis-inverse',
        parentKey:'xAxis',
      },
      {
        title: 'boundaryGap',
        key: 'xAxis-boundaryGap',
        parentKey:'xAxis',
      },
      {
        title: 'min',
        key: 'xAxis-min',
        parentKey:'xAxis',
      },
      {
        title: 'max',
        key: 'xAxis-max',
        parentKey:'xAxis',
      },
      {
        title: 'scale',
        key: 'xAxis-scale',
        parentKey:'xAxis',
      },
    ]
  },
  {
    title: 'yAxis',
    key: 'yAxis',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[]
  },
  {
    title: 'tooltip',
    key: 'tooltip',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[]
  },
  {
    title: 'toolbox',
    key: 'toolbox',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[]
  },
  {
    title: 'dataset',
    key: 'dataset',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[]
  },
  {
    title: 'series',
    key: 'series',
    parentKey:null,
    checkable:false,
    type:'none',
    children:[]
  },
];