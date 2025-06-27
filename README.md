# NJR Blog

一个使用 Next.js 15 构建的现代化个人博客系统。

## ✨ 特性

- 🚀 **Next.js 15** - 最新的 App Router 和性能优化
- 📝 **Markdown 支持** - 使用 Gray Matter 解析 frontmatter
- 🏷️ **分类和标签** - 灵活的内容组织方式
- 📱 **响应式设计** - 在所有设备上都有优秀体验
- ⚡ **静态生成** - 快速的加载速度和优秀的 SEO
- 🎨 **现代化 UI** - 使用 Tailwind CSS 构建
- 🔍 **SEO 优化** - 完整的元数据和 Open Graph 支持

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **内容**: Markdown + Gray Matter
- **组件**: Radix UI
- **图标**: Lucide React
- **部署**: Vercel

## 📁 项目结构

```
src/
├── app/                    # App Router 页面
│   ├── page.tsx           # 首页
│   ├── about/             # 关于页面
│   ├── blog/              # 博客列表
│   ├── blog/[...slug]/    # 博客文章详情
│   ├── category/[category]/ # 分类页面
│   └── tag/[tag]/         # 标签页面
├── components/            # React 组件
├── lib/                  # 工具函数和类型定义
└── content/              # Markdown 内容
    └── posts/            # 博客文章
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 [http://localhost:5000](http://localhost:5000) 查看效果。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 📝 添加文章

在 `content/posts/` 目录下创建 Markdown 文件：

```markdown
---
title: "文章标题"
date: 2024-01-15
summary: "文章摘要"
category: "tech"
tags: ["nextjs", "react", "typescript"]
draft: false
featured: true
---

文章内容...
```

### Frontmatter 字段说明

- `title`: 文章标题
- `date`: 发布日期
- `summary`: 文章摘要
- `category`: 分类（可选，默认使用文件夹路径）
- `tags`: 标签数组
- `draft`: 是否为草稿（生产环境不显示）
- `featured`: 是否为精选文章

## 🎨 自定义

### 修改样式

编辑 `src/app/globals.css` 文件来自定义样式。

### 修改配置

- 网站信息：修改 `src/app/layout.tsx` 中的 metadata
- 导航菜单：修改 `src/app/layout.tsx` 中的导航组件
- 文章解析：修改 `src/lib/posts.ts` 中的解析逻辑

## 📊 功能特性

### 内容管理
- ✅ 基于文件系统的内容管理
- ✅ 支持嵌套文件夹分类
- ✅ Frontmatter 元数据解析
- ✅ 草稿文章支持
- ✅ 精选文章标记

### 用户体验
- ✅ 响应式设计
- ✅ 快速加载
- ✅ 优雅的过渡动画
- ✅ 阅读时间估算
- ✅ 相关文章推荐

### SEO 优化
- ✅ 静态生成
- ✅ 完整的元数据
- ✅ Open Graph 支持
- ✅ 结构化数据
- ✅ 自动 sitemap

## 🔧 开发

### 添加新页面

1. 在 `src/app/` 下创建新的目录和 `page.tsx` 文件
2. 使用 App Router 的约定式路由

### 添加新组件

1. 在 `src/components/` 下创建组件文件
2. 使用 TypeScript 和 Tailwind CSS

### 修改文章解析

编辑 `src/lib/posts.ts` 文件来自定义文章解析逻辑。

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持 Node.js 的平台：

- Netlify
- Railway
- DigitalOcean App Platform
- 自托管服务器

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- Email: contact@njr.me
- GitHub: [@njr](https://github.com/njr)

---

Made with ❤️ by NJR
