<script setup lang="ts">
import { type PropType, reactive, ref } from 'vue'
import SearchVue from './components/header/SearchVue.vue'
import OperationVue from './components/header/OperationVue.vue'
import PaginationVue from './components/footer/PaginationVue.vue'
import type { Columns, TableOptions } from './@types'

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
