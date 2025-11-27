import { defineConfig } from "vitepress";
export default defineConfig({
  title: "hs的博客",
  // 部署基础路径
  // 如果仓库名是 username.github.io，设置为 '/'
  // 如果仓库名是其他名字（如 zhifou-vitepress-doc），设置为 '/仓库名/'
  // 根据实际访问地址，设置为 '/hesong.github.io/'
  base: "/hesong.github.io/",
  // 主体配置
  themeConfig: {
    // logo: "../assets/icons/favicon.ico",
    // 左侧菜单栏
    sidebar: {
      "/": [
        // 匹配首页路径
        {
          text: "官方文档", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "vue文档", link: "/vue/introduce/intro" },
            { text: "PC-UI组件", link: "/vue/introduce/deploy" },
            { text: "UNI-APP组件", link: "/vue/write/markdown" },
          ],
        },
        {
          text: "网络工具", // 分组标题
          collapsible: true, // 可折叠
          items: [
            {
              text: "SVG转DataURL",
              link: "https://www.fengjs.com/tools/svg2path.html",
            },
            { text: "图片压缩", link: "https://tinypng.com/" },
            { text: "base64编码解码", link: "https://base64.us/" },
            {
              text: "gif压缩",
              link: "https://tools.kalvinbg.cn/image/gifcompress",
            },
            {
              text: "grid生成器",
              link: "https://cssgrid-generator.netlify.app/",
            },
            { text: "蓝海Vpn", link: "https://lanhaifabu.com/" },
            {
              text: "风鸟-企查查",
              link: "https://riskbird.com/?inviteCode=82AE24F9CDA1C3C8",
            },
          ],
        },
        {
          text: "js & ts & 博客", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "js", link: "/reference/js" },
            { text: "ts", link: "/reference/ts" },
            { text: "vue", link: "/reference/vue" },
            { text: "css", link: "/reference/css" },
            { text: "博客", link: "/reference/bk" },
          ],
        },
        {
          text: "App上架", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "应用宝", link: "https://app.open.qq.com/p/home" },
            { text: "vivo", link: "https://id.vivo.com.cn" },
            {
              text: "oppo",
              link: "https://open.oppomobile.com/public/login/login_page.html",
            },
            {
              text: "华为",
              link: "https://id1.cloud.huawei.com/CAS/portal/loginAuth.html",
            },
            {
              text: "Apple Developer",
              link: "https://idmsa.apple.com/IDMSWebAuth/signin",
            },
            {
              text: "fir.im",
              link: "https://account.betaqr.com.cn/signin",
            },
          ],
        },
      ],
    },
  },
});
