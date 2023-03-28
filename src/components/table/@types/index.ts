interface Columns {
  // 字段名
  prop: string
  // 字段标签
  label?: string
  // 字段描述，会在表头后加一个疑问icon展示描述
  description?: string
  // 数据类型，影响到搜索框的类型，后续还会补充
  dataType?: "string" | "options" | "boolean" | "time" | "date" | "radio"
  // 特殊数据类型的值表，例如 options 的数组
  typeList?: any[]
  // 搜索字段对应的值
  value?: any
  // 渲染方法
  render?: {
    // 组件名
    componentName?: string
    // 组件属性
    componentAttrs?: any
    // 组件值处理函数
    formatter?: Function
  }
  // table-column 组件的 attributes
  attrs?: {
    type?: string
    width?: string | number
    minWidth?: string | number
    sortOrders?: ("ascending" | "descending" | null)[]
    sortable?: string | boolean
    resizable?: boolean
    reserveSelection?: boolean
    filterMultiple?: boolean
  }
  // 搜索输入框attrs
  inputAttrs?: {
    type?: string
    label?: string
    id?: string
    disabled?: boolean
    clearable?: boolean
    autocomplete?: string
    readonly?: boolean
    showPassword?: boolean
    showWordLimit?: boolean
    containerRole?: string
    style?: any
  }
}

interface CustomButton {
  // 按钮文字
  text?: string
  // 按钮点击触发事件
  onClick?: Function
  // button 组件的 attributes
  attrs?: {
    icon?: string
    type?:
      | ""
      | "default"
      | "success"
      | "warning"
      | "info"
      | "text"
      | "primary"
      | "danger"
    link?: boolean
    dark?: boolean
    disabled?: boolean
    text?: boolean
    round?: boolean
    circle?: boolean
    nativeType?: "button" | "reset" | "submit"
    loading?: boolean
    plain?: boolean
    bg?: boolean
    autofocus?: boolean
  }
}

interface Tools {
  // 新增数据
  add?: boolean
  // 批量删除
  delete?: boolean
  // 导出数据
  export?: boolean
}

interface TableOptions {
  // 顶部搜索栏
  search?: {
    // 是否需要
    visible?: boolean
    // 主页展示字段
    filters?: string[]
    // 是否需要标签
    tags?: boolean
  }
  // 顶部工具栏
  topTools?: {
    // 是否需要
    visible?: boolean
    // 默认按钮
    tools?: Tools
    // 扩展按钮组
    buttonGroup?: CustomButton[]
  }
  // 底部分页器
  pagination?: {
    // 是否需要
    visible?: boolean
    // pagination 组件的 attributes
    attrs?: {
      small?: boolean
      popperClass?: string
      disabled?: boolean
      layout?: string
      background?: boolean
      pagerCount?: number
      pageSizes?: number[]
      prevText?: string
      nextText?: string
      hideOnSinglePage?: boolean
    }
  }
  // 表格主体
  table?: {
    // 是否展示左侧多选框
    checkBox?: boolean
    // table 组件的 attributes
    attrs?: {
      style?: import("vue").CSSProperties
      className?: string
      border?: boolean
      tableLayout?: "auto" | "fixed"
      data?: any[]
      fit?: boolean
      lazy?: boolean
      scrollbarAlwaysOn?: boolean
      stripe?: boolean
      treeProps?:
        | {
            hasChildren?: string | undefined
            children?: string | undefined
          }
        | undefined
      showHeader?: boolean
      showSummary?: boolean
      highlightCurrentRow?: boolean
      defaultExpandAll?: boolean
      selectOnIndeterminate?: boolean
      indent?: number
      flexible?: boolean
      height?: string | number
    }
  }
  // 字段主体
  column?: {
    // 隐藏字段
    hiddens?: string[]
    // 操作栏按钮组
    buttonGroup?: CustomButton[]
    // 操作栏宽度
    buttonWidth?: string | number
    // table-column 组件的 attributes
    attrs?: {
      type?: string
      width?: string | number
      minWidth?: string | number
      sortOrders?: ("ascending" | "descending" | null)[]
      sortable?: string | boolean
      resizable?: boolean
      reserveSelection?: boolean
      filterMultiple?: boolean
    }
  }
}

export type { Columns, CustomButton, Tools, TableOptions }
