<script setup lang="ts">
import { type PropType, reactive, ref } from 'vue'
import SearchVue from './components/header/SearchVue.vue'
import OperationVue from './components/header/OperationVue.vue'
import PaginationVue from './components/footer/PaginationVue.vue'

/**
 * 定义数据接口
 */
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
    style?: any
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
    type?: '' | 'default' | 'success' | 'warning' | 'info' | 'text' | 'primary' | 'danger'
    link?: boolean
    dark?: boolean
    disabled?: boolean
    text?: boolean
    round?: boolean
    circle?: boolean
    nativeType?: 'button' | 'reset' | 'submit'
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
      style?: import('vue').CSSProperties
      className?: string
      border?: boolean
      tableLayout?: 'auto' | 'fixed'
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
      sortOrders?: ('ascending' | 'descending' | null)[]
      sortable?: string | boolean
      resizable?: boolean
      reserveSelection?: boolean
      filterMultiple?: boolean
    }
  }
}
/**
 * 定义组件参数
 */
const props = defineProps({
  tableData: {
    type: Array<any>,
    required: true,
  },
  columnOptions: {
    type: Array<Columns>,
    required: false,
  },
  tableOptions: {
    type: Object as PropType<TableOptions>,
    required: false,
  },
})
/**
 * 定义组件触发事件传递
 */
const emit = defineEmits(['onSearch', 'onExport', 'onPageChange'])
/**
 * 处理表格字段
 */
const columns = reactive<Columns[]>([]);
(function () {
  if (props.tableData.length) {
    const hiddens = props.tableOptions?.column?.hiddens ?? []
    const columnName: string[] = Object.keys(props.tableData[0]).filter(item => !hiddens.includes(item))
    columnName.forEach((item) => {
      const obj: Columns = { prop: item }
      obj.label = obj.label ?? obj.prop
      obj.description = obj.description ?? ''
      obj.dataType = 'string'
      obj.typeList = []
      obj.value = ''
      obj.render = obj.render ?? undefined
      columns.push(obj)
    })
  }
  props.columnOptions?.forEach((item) => {
    columns.forEach((target, index) => {
      if (item.prop === target.prop)
        columns[index] = { ...target, ...item }
    })
  })
})()
/**
 * 处理单元格空值
 */
function cellFormatter(_raw: any, _collumn: any, cellValue: any) {
  if (cellValue === null || cellValue === undefined)
    return '——'
  else if (typeof cellValue === 'object')
    return cellValue.toString()

  else
    return cellValue
}
/**
 * 处理多选框事件
 */
const selection = ref<Array<object> | null>(null)
function onSelectionChange(selection: any) {
  selection.value = selection
}
/**
 * 处理搜索函数
 */
function handleSearch(value: Array<Columns>) {
  emit('onSearch', value)
}
/**
 * 处理分页器变化事件
 */
function onPageChange(page: number, size: number) {
  emit('onPageChange', page, size)
}
/**
 * 处理顶部工具栏事件
 */
function onAddOne() {
  console.log('Add One Line')
}
function onDeleteAll() {
  // selection
  console.log('Delete All Checked', selection.value)
}
function onExport() {
  emit('onExport')
}
</script>

<template>
  <section v-if="props.tableOptions?.search?.visible || props.tableOptions?.topTools?.visible">
    <SearchVue v-if="props.tableOptions?.search?.visible ?? false" :tags="props.tableOptions?.search?.tags"
      :columns="columns" :filters="props.tableOptions?.search?.filters" @on-search="handleSearch" />
    <br v-if="props.tableOptions?.search?.visible && props.tableOptions?.topTools?.visible">
    <OperationVue v-if="props.tableOptions?.topTools?.visible ?? false" :tools="props.tableOptions.topTools?.tools"
      :button-group="props.tableOptions?.topTools?.buttonGroup" @on-add-one="onAddOne" @on-delete-all="onDeleteAll"
      @on-export="onExport" />
    <el-divider />
  </section>
  <section>
    <el-table :data="props.tableData" height="585px" v-bind="props.tableOptions?.table?.attrs"
      @selection-change="onSelectionChange">
      <el-table-column v-if="props.tableOptions?.table?.checkBox ?? false" type="selection" width="55" />
      <el-table-column v-for="(item, index) in columns" :key="index" align="left" :formatter="cellFormatter"
        :prop="item.prop" v-bind="item.attrs ?? props.tableOptions?.column?.attrs">
        <template #header>
          {{ item.label }}
          <el-tooltip v-if="item.description !== ''" effect="dark" :content="item.description" placement="bottom">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </template>
        <template v-if="item.render?.componentName" #default="scope">
          <component :is="item.render?.componentName" v-bind="item.render?.componentAttrs">
            {{ item.render?.formatter ? item.render?.formatter((scope.row[item.prop])) : (scope.row[item.prop]) }}
          </component>
        </template>
        <template v-else-if="item.render?.formatter" #default="scope">
          {{ item.render?.formatter((scope.row[item.prop])) }}
        </template>
        <template v-else #default="scope">
          {{ typeof scope.row[item.prop] === 'object' ? scope.row[item.prop].toString() : scope.row[item.prop] }}
        </template>
      </el-table-column>
      <el-table-column v-if="props.tableOptions?.column?.buttonGroup" label="操作" align="center" min-width="max-content"
        :width="props.tableOptions.column.buttonWidth">
        <template #default="scope">
          <el-button v-for="(button, index) in props.tableOptions?.column?.buttonGroup" :key="index" v-bind="button.attrs"
            @click="button.onClick && button.onClick(scope.row as Columns)">
            {{ button.text ?? 'Click Me' }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider />
    <PaginationVue v-if="props.tableOptions?.pagination?.visible ?? false" :total="props.tableData.length"
      :attrs="props.tableOptions?.pagination?.attrs" @on-page-change="onPageChange" />
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: fit-content;
  padding: 0 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
</style>
