import { defineConfig } from "./utils";
import {
  School,
  Operation,
  DataAnalysis,
  Money,
  Wallet,
  Tickets,
  Postcard,
  Switch,
  Connection,
  House,
} from "@element-plus/icons-vue";

export default defineConfig({
  SYSTEM_NAME: "Funds Management System",
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
      meta: {
        icon: House,
      },
      route: "/",
      order: 1,
    },
    {
      _id: "wk_2",
      name: "经费管理",
      meta: {
        icon: Money,
      },
      order: 2,
      childrenGroups: [
        {
          group_name: "学院",
          group_icon: Connection,
          group_color: "#409EFF",
          children: [
            {
              _id: "wk_2_1_1",
              name: "系部管理",
              meta: {
                icon: Postcard,
              },
              route: "/funds/dept",
              order: 1,
            },
            {
              _id: "wk_2_1_2",
              name: "经费分发",
              meta: {
                icon: Switch,
              },
              route: "/funds/dispatch",
              order: 2,
            },
          ],
          childrenGroups: [
            {
              group_name: "大数据",
              group_icon: Connection,
              group_color: "#67C23A",
              children: [
                {
                  _id: "wk_2_1_1_1",
                  name: "系部管理",
                  meta: {
                    icon: Postcard,
                  },
                  route: "/funds/dept",
                  order: 1,
                },
                {
                  _id: "wk_2_1_2_2",
                  name: "经费分发",
                  meta: {
                    icon: Switch,
                  },
                  route: "/funds/dispatch",
                  order: 2,
                },
              ],
            },
            {
              group_name: "软件工程",
              group_icon: Connection,
              group_color: "#67C23A",
              children: [
                {
                  _id: "wk_2_1_1_3",
                  name: "系部管理",
                  meta: {
                    icon: Postcard,
                  },
                  route: "/funds/dept",
                  order: 1,
                },
                {
                  _id: "wk_2_1_2_4",
                  name: "经费分发",
                  meta: {
                    icon: Switch,
                  },
                  route: "/funds/dispatch",
                  order: 2,
                },
              ],
            },
          ],
        },
        {
          group_name: "系部",
          group_icon: Connection,
          group_color: "#409EFF",
          children: [
            {
              _id: "wk_2_2_1",
              name: "申请列表",
              meta: {
                icon: Tickets,
              },
              route: "/funds/apply",
              order: 1,
            },
            {
              _id: "wk_2_2_2",
              name: "流水账单",
              meta: {
                icon: Wallet,
              },
              route: "/funds/ledger",
              order: 2,
            },
          ],
        },
      ],
    },
    {
      _id: "wk_3",
      name: "系统管理",
      meta: {
        icon: Operation,
      },
      order: 3,
      children: [
        {
          _id: "wk_3_1",
          name: "用户管理",
          meta: {
            icon: Postcard,
          },
          route: "/system/admin",
          order: 1,
        },
        {
          _id: "wk_3_2",
          name: "角色管理",
          meta: {
            icon: Switch,
          },
          route: "/system/role",
          order: 2,
        },
        {
          _id: "wk_3_3",
          name: "权限管理",
          meta: {
            icon: Switch,
          },
          route: "/system/permission",
          order: 3,
        },
      ],
    },
    {
      _id: "wk_4",
      name: "报表管理",
      meta: {
        icon: DataAnalysis,
      },
      route: "/chart",
      order: 4,
    },
  ],
});
