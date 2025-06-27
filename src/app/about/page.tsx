export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我</h1>
          <p className="text-xl text-gray-600">
            了解我的背景、技能和经历
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2>👋 你好，我是 NJR</h2>
            
            <p>
              我是一名热爱技术的全栈开发者，专注于现代 Web 开发技术。
              我喜欢探索新技术，解决复杂问题，并分享我的学习经验。
            </p>

            <h3>🎯 我的专长</h3>
            <ul>
              <li><strong>前端开发</strong>：React, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong>后端开发</strong>：Node.js, Python, 数据库设计</li>
              <li><strong>DevOps</strong>：Docker, CI/CD, 云服务部署</li>
              <li><strong>其他技能</strong>：Git, Linux, 性能优化</li>
            </ul>

            <h3>🚀 我的项目</h3>
            <p>
              我参与过多个开源项目和个人项目，包括：
            </p>
            <ul>
              <li>个人博客系统（当前项目）</li>
              <li>企业级 Web 应用</li>
              <li>移动端应用</li>
              <li>API 服务开发</li>
            </ul>

            <h3>📚 学习理念</h3>
            <p>
              我相信技术学习是一个持续的过程。我通过以下方式保持学习：
            </p>
            <ul>
              <li>阅读技术博客和文档</li>
              <li>参与开源项目</li>
              <li>实践项目开发</li>
              <li>分享学习心得</li>
            </ul>

            <h3>📫 联系我</h3>
            <p>
              如果你对我的工作感兴趣，或者想要交流技术问题，欢迎联系我：
            </p>
            <ul>
              <li>📧 Email: contact@njr.me</li>
              <li>🐙 GitHub: <a href="https://github.com/njr" className="text-blue-600 hover:underline">@njr</a></li>
              <li>💼 LinkedIn: <a href="https://linkedin.com/in/njr" className="text-blue-600 hover:underline">NJR</a></li>
            </ul>

            <h3>🎨 关于这个博客</h3>
            <p>
              这个博客使用 Next.js 15 和 Tailwind CSS 构建，采用现代化的技术栈，
              支持 Markdown 内容管理、分类标签、搜索功能等。
            </p>
            <p>
              我希望通过这个平台分享我的技术见解、项目经验和学习心得，
              与更多志同道合的朋友交流学习。
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
              <p className="text-blue-800">
                <strong>💡 小贴士：</strong>
                如果你对某个技术话题感兴趣，或者想要了解某个项目的实现细节，
                欢迎在博客中留言或直接联系我！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: '关于我 - NJR Blog',
  description: '了解 NJR 的背景、技能和经历',
} 