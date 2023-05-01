import { defineConfig } from "./utils";
import {
  School,
  Operation,
  DataAnalysis,
  Money,
  House,
} from "@element-plus/icons-vue";

export default defineConfig({
  // SYSTEM_NAME: "Funds Management System",
  SYSTEM_NAME: "高校本科教学经费运行管理系统",
  RUNNING_ENVIRONMENT: "dev",
  TOOLS_BOX: {
    system_setting: {
      theme: "light",
    },
    clean_cache: true,
    full_screen: true,
  },
  OTHER_TOOLS_BOX: [
    {
      name: "学院信息",
      icon: School,
      link: "",
    },
  ],
  MENU_LIST: [
    {
      _id: "wk_1",
      name: "首页",
      icon: House,
      route: "/",
      order: 1,
    },
    {
      _id: "wk_2",
      name: "经费管理",
      icon: Money,
      children: [
        {
          _id: "wk_2_1",
          name: "申请管理",
          route: "/funds/apply",
          order: 1
        },{
          _id: "wk_2_2",
          name: "系部管理",
          route: "/funds/dept",
          order: 1
        },{
          _id: "wk_2_3",
          name: "经费分配",
          route: "/funds/dispatch",
          order: 1
        },{
          _id: "wk_2_4",
          name: "流水账单",
          route: "/funds/ledger",
          order: 1
        },
      ],
      order: 2
    },
    {
      _id: "wk_3",
      name: "系统管理",
      icon: Operation,
      order: 3,
      children: [
        {
          _id: "wk_3_1",
          name: "用户管理",
          route: "/system/admin",
          order: 1,
        },
        {
          _id: "wk_3_2",
          name: "角色管理",
          route: "/system/role",
          order: 2,
        },
        {
          _id: "wk_3_3",
          name: "权限管理",
          route: "/system/permission",
          order: 3,
        },
      ],
    },
    {
      _id: "wk_4",
      name: "报表管理",
      icon: DataAnalysis,
      route: "/chart",
      order: 4,
    },
  ],
});
