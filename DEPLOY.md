# VitePress 部署到 GitHub Pages 指南

## 前置准备

1. 确保你的代码已经推送到 GitHub 仓库
2. 确保仓库是公开的（如果使用免费的 GitHub Pages）

## 部署步骤

### 1. 配置仓库设置

1. 进入你的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 **Source**（源）部分：
   - 选择 **GitHub Actions** 作为部署源
   - 不要选择分支部署方式

### 2. 配置 base 路径

在 `docs/.vitepress/config.ts` 文件中，根据你的仓库名设置 `base` 路径：

- **如果仓库名是 `你的用户名.github.io`**：
  ```typescript
  base: '/',
  ```

- **如果仓库名是其他名字（如 `zhifou-vitepress-doc`）**：
  ```typescript
  base: '/zhifou-vitepress-doc/',
  ```
  注意：路径前后都要有斜杠 `/`

### 3. 推送代码

将代码推送到 GitHub：

```bash
git add .
git commit -m "添加 GitHub Pages 部署配置"
git push origin main
# 或者 git push origin master（取决于你的默认分支名）
```

### 4. 触发部署

推送代码后，GitHub Actions 会自动触发部署：

1. 进入仓库的 **Actions** 标签页
2. 查看工作流运行状态
3. 等待构建和部署完成（通常需要 1-2 分钟）

### 5. 访问网站

部署完成后，你的网站可以通过以下链接访问：

- **如果仓库名是 `你的用户名.github.io`**：
  ```
  https://你的用户名.github.io
  ```

- **如果仓库名是其他名字**：
  ```
  https://你的用户名.github.io/仓库名/
  ```

例如：`https://xiaohe.github.io/zhifou-vitepress-doc/`

## 后续更新

每次你推送代码到 `main` 或 `master` 分支时，GitHub Actions 会自动重新构建和部署你的网站。

## 手动触发部署

如果需要手动触发部署：

1. 进入仓库的 **Actions** 标签页
2. 选择 **Deploy VitePress site to Pages** 工作流
3. 点击 **Run workflow**（运行工作流）按钮

## 常见问题

### 1. 网站显示 404

- 检查 `base` 路径是否正确配置
- 确保 GitHub Pages 设置中选择了 **GitHub Actions** 作为源

### 2. 资源文件（图片、CSS）加载失败

- 确保 `base` 路径配置正确
- 检查资源文件的路径是否使用了绝对路径（以 `/` 开头）

### 3. 部署失败

- 检查 GitHub Actions 日志中的错误信息
- 确保 `package.json` 中的构建脚本正确
- 确保所有依赖都已正确安装

