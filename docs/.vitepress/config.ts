import { defineConfig } from "vitepress";
export default defineConfig({
  title: "知否技术",
  // 部署基础路径
  // 如果仓库名是 username.github.io，设置为 '/'
  // 如果仓库名是其他名字（如 zhifou-vitepress-doc），设置为 '/仓库名/'
  // 根据实际访问地址，设置为 '/hesong.github.io/'
  base: '/hesong.github.io/',
  // 主体配置
  themeConfig: {
    logo: "../assets/icons/favicon.ico",
    // 左侧菜单栏
    sidebar: {
      "/": [
        // 匹配首页路径
        {
          text: "指南", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "什么是 VitePress？", link: "/guide/introduce/intro" },
            { text: "快速开始", link: "/guide/introduce/deploy" },
            { text: "markdown 扩展", link: "/guide/write/markdown" },
            { text: "源处理", link: "/guide/write/asset-handling" },
          ],
        },
        {
          text: "参考", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "主题", link: "/reference/theme" },
            { text: "导航栏", link: "/reference/nav" },
          ],
        },
      ],
      "/guide/": [
        // 匹配/guide/路径
        {
          text: "简介", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "什么是 VitePress？", link: "/guide/introduce/intro" },
            { text: "快速开始", link: "/guide/introduce/deploy" },
          ],
        },
        {
          text: "写作", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "markdown 扩展", link: "/guide/write/markdown" },
            { text: "源处理", link: "/guide/write/asset-handling" },
          ],
        },
      ],
      "/reference/": [
        // 匹配/reference/路径
        {
          text: "参考", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "主题", link: "/reference/theme" },
            { text: "导航栏", link: "/reference/nav" },
          ],
        },
      ],
    },
    // 顶部菜单栏
    nav: [
      { text: "指南", link: "/guide/introduce/intro", activeMatch: "/guide/" },
      { text: "参考", link: "/reference/theme", activeMatch: "/reference/" },
      { text: "百度", link: "https://www.baidu.com/" },
    ],
  },
});
