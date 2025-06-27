import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NJR Blog - 技术博客",
  description: "分享技术见解、生活感悟和项目经验的个人博客",
  keywords: ["技术博客", "编程", "前端开发", "Next.js", "React"],
  authors: [{ name: "NJR" }],
  creator: "NJR",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://njr.me",
    title: "NJR Blog - 技术博客",
    description: "分享技术见解、生活感悟和项目经验的个人博客",
    siteName: "NJR Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "NJR Blog - 技术博客",
    description: "分享技术见解、生活感悟和项目经验的个人博客",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-gray-900">
                  NJR Blog
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  首页
                </a>
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  博客
                </a>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  关于
                </a>
              </div>
              
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">NJR Blog</h3>
                <p className="text-gray-400">
                  分享技术见解、生活感悟和项目经验的个人博客
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">快速链接</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                      博客文章
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                      关于我
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">联系方式</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: contact@njr.me</li>
                  <li>GitHub: @njr</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 NJR Blog. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
