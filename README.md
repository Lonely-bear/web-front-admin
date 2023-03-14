# funds-management-system-admin
Node Version: 16.18.0

npm Version: 8.19.2

### test my bat 0.1.01

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 后台框架配置文件

#### src/system.config.ts
```ts
import { defineConfig } from "./utils";

export default defineConfig({
  SYSTEM_NAME: "高校经费运行管理系统",
  RUNNING_ENVIRONMENT: "development",
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
      icon_name: "School",
      link: "",
    },
  ],
  MENU_LIST: [
    {
      _id: "wk_1",
      name: "首页",
      meta: {
        icon: "House",
      },
      route: "/",
      order: 1,
      children: [],
      childrenGroup: [
        {
          group_name: "",
          group_icon: "",
          children: [],
        },
      ],
    },
  ],
});

```
