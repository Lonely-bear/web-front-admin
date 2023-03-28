# CustomTable(自定义表)
## 结构
* Header
* |__ 搜索栏
    * |__ 首页展示
    * |__ 高级筛选
    * |__ ......
* |__ 操作栏
    * |__ 新增数据
    * |__ 批量删除
    * |__ 文件导出
    * |__ 自定义列
    * |__ ......
* Main
* |__ 表格
   * |__ 属性配置
   * |__ 左侧全选框
* |__ 列
   * |__ 属性配置
   * |__ 操作列按钮组
* Footer
* |__ 分页器
   * |__ 属性配置

## 可配置项
### 顶部搜索栏
#### Props
```ts
interface Columns {
  // 字段名
  prop: string
  // 字段标签
  label?: string
  // 字段描述，会在表头后加一个疑问icon展示描述
  description?: string
  // 数据类型，影响到搜索框的类型，后续还会补充
  dataType?: 'string' | 'options' | 'boolean' | 'time' | 'date' | 'radio'
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
    sortOrders?: ('ascending' | 'descending' | null)[]
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
```

| Prop | Type | Info | Default |
| :--: | ---- | ---- | :-----: |
| columns | Columns | 字段数组(参数，标签，描述，值) | - |
| filters | string[] | 展示在首页的字段名数组，所有字段默认展示在高级筛选中 | - |
| tags | boolean | 是否需要条件生成标签 | false |
#### Emits

| Emit | Param | Info |
| :--: | ---- | ---- |
| onSearch | columns | 搜索的回调函数，参数为值不为空的字段数组 |

### 顶部工具栏
#### Props
```ts
interface Tools {
  // 新增数据
  add: boolean
  // 批量删除
  delete: boolean
  // 导出数据
  export: boolean
}

interface CustomButton {
  // 按钮文字
  text?: string
  // 按钮点击触发事件
  onClick?: Function
  // button 组件的 attributes
  attrs?: {
    icon?: string
    type?: "" | "default" | "success" | "warning" | "info" | "text" | "primary" | "danger"
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
```

| Prop | Type | Info | Default |
| :--: | ---- | ---- | :-----: |
| tools | Tools | 默认按钮组（新增数据，批量删除，数据导出） | {add: false, delete: false, export: false} |
| buttonGroup | CustomButton | 自定义按钮组 | [] |
#### Emits

| Emit | Param | Info |
| :--: | ---- | ---- |
| onAddOne | - | 新增数据 |
| onExport | - | 导出数据 |
| onDeleteAll | - | 批量删除 |

### 表格体
#### Props

```ts
interface Columns {
  // 字段名
  prop: string
  // 字段标签
  label?: string
  // 字段描述，会在表头后加一个疑问icon展示描述
  description?: string
  // 数据类型，影响到搜索框的类型，后续还会补充
  dataType?: 'string' | 'options' | 'boolean' | 'time' | 'date' | 'radio'
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
    sortOrders?: ('ascending' | 'descending' | null)[]
    sortable?: string | boolean
    resizable?: boolean
    reserveSelection?: boolean
    filterMultiple?: boolean
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
    type?: "" | "default" | "success" | "warning" | "info" | "text" | "primary" | "danger"
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
```

| Prop | Type | Info | Default |
| :--: | ---- | ---- | :-----: |
| tableData | any[] | 表格数据 | [] |
| columnOptions | Columns[] | 表格字段配置 | - |
| tableOptions | TableOptions | 表格详细配置 | - |

#### Emits

| Emit | Param | Info |
| :--: | ---- | ---- |
| onSearch | columns | 执行数据搜索，参数为值不为空的字段数组 |
| onExport | 可选(columns) | 导出数据文件 |
| onPageChange | page, size | 分页器变化回调函数 |

### 底部分页器
#### Props

| Prop | Type | Info | Default |
| :--: | ---- | ---- | :-----: |
| total | Number | 数据总条数 | [] |
| attrs | Columns[] | 分页器配置 | - |
| currentPage | Number | 当前页码 | 1 |
| pageSize | Number | 当前页条数 | 20 |
#### Emits

| Emit | Param | Info |
| :--: | ---- | ---- |
| onPageChange | page, size | 分页器变化时回调函数 |