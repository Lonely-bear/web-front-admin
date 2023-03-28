<script setup lang="ts">
defineProps({
    formList: Array<any>,
    inputStyle: String
})
</script>

<template>
    <template v-for="item in formList" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop" :style="inputStyle">
            <!-- 输入框 -->
            <el-input v-if="item.dataType === 'string'" v-model="item.value" :placeholder="`请输入${item.label}`" />
            <!-- 开关 -->
            <el-switch v-else-if="item.dataType === 'boolean'" v-model="item.value" inline-prompt active-icon="check"
                inactive-icon="close" />
            <!-- 单选框 -->
            <el-radio-group v-else-if="item.dataType === 'radio'" v-model="item.value">
                <el-radio v-for="(label, index) in item.typeList" :label="label" :key="index">{{ label }}</el-radio>
            </el-radio-group>
            <!-- 选择框 -->
            <el-select v-else-if="item.dataType === 'options'" v-model="item.value" clearable
                :placeholder="`请选择${item.label}`">
                <el-option v-for="(option, index) in item.typeList" :key="index" :label="option" :value="option" />
            </el-select>
            <!-- 时间选择 -->
            <el-time-picker v-else-if="item.dataType === 'time'" v-model="item.value" arrow-control
                :placeholder="`请选择${item.label}`" />
            <!-- 日期选择 -->
            <el-date-picker v-else-if="item.dataType === 'date'" v-model="item.value" type="date"
                :placeholder="`请选择${item.label}`" />
        </el-form-item>
    </template>
</template>