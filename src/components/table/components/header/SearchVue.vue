<script setup lang="ts">
import { reactive, ref } from 'vue';
import SearchForm from './SearchForm.vue';

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
}
/**
 * 定义组件参数
 */
const props = defineProps({
    columns: {
        type: Array<Columns>,
        required: true,
        default: []
    },
    filters: {
        type: Array<string>,
        default: []
    },
    tags: {
        type: Boolean,
        default: false
    }
})
/**
 * 定义提交表单的回调函数
 */
const emit = defineEmits(['onSearch'])
/**
 * 展示在首页的搜索名单
 */
const filterlist = reactive<Array<Columns>>(props.columns.filter(item => props.filters.includes(item.prop)))
/**
 * 高级筛选
 */
const drawerVisiblity = ref(false);
/**
 * 搜索事件
 * @emits onSearch
 * ----> (value !== "")
 */
function onSearch() {
    drawerVisiblity.value = false
    emit('onSearch', props.columns.filter(item => item.value !== ''))
}
/**
 * 重置表单的 value
 */
function resetValue() {
    props.columns.forEach(item => item.value = '')
}
/**
 * 关闭标签
 */
function handleClose(item: Columns) {
    item.value = ''
}
</script>

<template>
    <!-- 首页的搜索 -->
    <el-form inline>
        <SearchForm :form-list="filterlist" />
        <el-form-item>
            <el-button v-if="filterlist.length" @click="resetValue" icon="Refresh">重 置</el-button>
            <el-button v-if="filterlist.length" type="primary" icon="Search" @click="onSearch">搜 索</el-button>
            <el-button color="#626aef" icon="Filter" @click="drawerVisiblity = true">高级筛选</el-button>
        </el-form-item>
    </el-form>

    <!-- 标签（已选条件） -->
    <section class="tags" v-if="props.tags">
        <span>标签（已选条件）: </span>
        <span v-for="item in props.columns.filter(item => item.value !== '')">
            <el-tag closable @close="handleClose(item)">{{ item.label }}: {{ item.value }}</el-tag>
        </span>
    </section>

    <!-- 高级筛选（抽屉） -->
    <el-drawer v-model="drawerVisiblity" append-to-body title="高级筛选" size="40%">
        <el-form inline label-position="top" style="justify-content: space-between;">
            <SearchForm :form-list="props.columns" :input-style="'width: 42%;'" />
            <el-divider></el-divider>
            <el-form-item>
                <el-button @click="resetValue" icon="Refresh">重 置</el-button>
                <el-button type="primary" icon="Search" @click="onSearch">搜 索</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<style scoped>
.tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>