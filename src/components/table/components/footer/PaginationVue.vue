<script setup lang="ts">
import { reactive } from 'vue'

/**
 * 定义组件参数
 */
const props = defineProps({
    total: Number,
    attrs: Object,
    currentPage: Number,
    pageSize: Number
})
/**
 * 定义组件事件回调
 */
const emit = defineEmits(['onPageChange'])
/**
 * 定义分页器数据
 */
const page = reactive({
    currentPage: props.currentPage ?? 1,
    pageSize: props.pageSize ?? 20,
    handleChange: () => {
        emit('onPageChange', page.currentPage, page.pageSize)
    }
})
</script>

<template>
    <el-pagination v-model:current-page="page.currentPage" v-model:page-size="page.pageSize" :default-current-page="1"
        :page-sizes="[20, 50, 100, 200]" layout="total, sizes, prev, pager, next, jumper" :total="props.total"
        v-bind="props.attrs" @size-change="page.handleChange" @current-change="page.handleChange" />
</template>