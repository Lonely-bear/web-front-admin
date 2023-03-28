<script setup lang="ts">
import type { PropType } from 'vue'

/**
 * 定义数据接口
 */
interface Tools {
    // 新增数据
    add?: boolean
    // 批量删除
    delete?: boolean
    // 导出数据
    export?: boolean
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
/**
 * 定义组件参数
 */
const props = defineProps({
    tools: {
        type: Object as PropType<Tools>,
        default: {
            add: false,
            delete: false,
            export: false
        }
    },
    buttonGroup: {
        type: Object as PropType<CustomButton[]>,
        default: []
    }
})
/**
 * 定义组件回调函数
 */
const emit = defineEmits(['onAddOne', 'onExport', 'onDeleteAll'])
</script>

<template>
    <el-button icon="Plus" v-if="props.tools.add" @click="emit('onAddOne')">新增数据</el-button>
    <el-button type="danger" icon="Delete" v-if="props.tools.delete" @click="emit('onDeleteAll')">批量删除</el-button>
    <el-button type="primary" icon="Download" v-if="props.tools.export" @click="emit('onExport')">导出数据</el-button>
    <el-button v-for="(button, index) in props.buttonGroup" :key="index" v-bind="button.attrs"
        @click="button.onClick && button.onClick()">
        {{ button.text ?? 'Click Me' }}
    </el-button>
</template>