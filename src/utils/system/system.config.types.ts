/**
 * @description 工具项配置
 */
interface TOOL {
  // 工具名称
  name: string;
  // 工具图标，如不填，默认不显示
  icon?: any;
  // 跳转链接
  link: string;
}

/**
 * @description 菜单项配置
 */
export interface MENU {
  // _id
  _id: string | number;
  // 菜单名称
  name: string;
  // 菜单图标
  icon?: any;
  // 菜单路径
  route?: string;
  // 菜单顺序名次
  order: number;
  // 子菜单
  children?: MENU[];
}

/**
 * @description 系统配置
 */
export interface SYSTEM_CONFIG_TYPE {
  // 系统名称
  SYSTEM_NAME: string;
  // 运行环境
  RUNNING_ENVIRONMENT: "dev" | "test" | "prod";
  // 基础工具箱
  TOOLS_BOX: {
    // 系统设置
    system_setting: {
      // 系统主题
      theme: "light" | "dark" | string;
    };
    // 清除缓存
    clean_cache: boolean;
    // 开启全屏
    full_screen: boolean;
  };
  // 扩展工具箱
  OTHER_TOOLS_BOX: TOOL[];
  // 菜单列表
  MENU_LIST: MENU[];
}
