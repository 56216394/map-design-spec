"use client";

import { useState } from "react";

// CSS 变量文本
const cssVariables = `/* 地图项目 Design System Variables */

:root {
  /* Colors - Text */
  --color-text-primary: #222423;
  --color-text-secondary: #858c88;
  --color-text-tertiary: #6f6d73;
  --color-primary: #232224;

  /* Colors - Background */
  --color-bg-gray: #f7f7f7;
  --color-bg-light-gray: #f1f0f2;
  --color-white-90: rgba(255, 255, 255, 0.9);

  /* Colors - Accent */
  --color-accent-purple-1: #555cd6;
  --color-accent-purple-2: #8149f2;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 6px;
  --spacing-md: 8px;
  --spacing-lg: 12px;
  --spacing-xl: 14px;
  --spacing-2xl: 16px;
  --spacing-3xl: 20px;
  --spacing-4xl: 24px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-full: 100px;

  /* Shadows */
  --shadow-sm: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
  --shadow-lg: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);

  /* Effects */
  --blur-backdrop: 8px;

  /* Typography */
  --font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, sans-serif;
}`;

// 颜色数据
const textColors = [
  { name: "Text Primary", value: "#222423" },
  { name: "Text Secondary", value: "#858c88" },
  { name: "Text Tertiary", value: "#6f6d73" },
  { name: "Primary", value: "#232224" },
];

const bgColors = [
  { name: "Background Gray", value: "#f7f7f7" },
  { name: "Background Light Gray", value: "#f1f0f2" },
  { name: "White 90%", value: "rgba(255,255,255,0.9)" },
];

const accentColors = [
  { name: "Accent Gradient", value: "#555cd6 → #8149f2", gradient: true },
  { name: "Accent Purple 1", value: "#555cd6" },
  { name: "Accent Purple 2", value: "#8149f2" },
];

const typography = [
  { size: "26px / 26px", weight: "Regular, Medium", text: "区域位置 景区 价格星级 筛选", fontSize: 26, lineHeight: 26 },
  { size: "24px / 24px", weight: "Medium", text: "回列表 希尔顿酒店示例", fontSize: 24, lineHeight: 24 },
  { size: "22px / 22px", weight: "Medium, Semibold", text: "北京 北京市", fontSize: 22, lineHeight: 22 },
  { size: "20px / 28px", weight: "Regular", text: "30万家酒店", fontSize: 20, lineHeight: 28 },
  { size: "20px / 20px", weight: "Regular, Medium", text: "住 04-12 离 04-13", fontSize: 20, lineHeight: 20 },
  { size: "18px / 18px", weight: "Regular", text: "反馈", fontSize: 18, lineHeight: 18 },
  { size: "16px / 16px", weight: "Medium", text: "5公里 10公里", fontSize: 16, lineHeight: 16 },
];

const spacings = [
  { name: "XS", value: "4px", width: 4 },
  { name: "SM", value: "6px", width: 6 },
  { name: "MD", value: "8px", width: 8 },
  { name: "LG", value: "12px", width: 12 },
  { name: "XL", value: "14px", width: 14 },
  { name: "2XL", value: "16px", width: 16 },
  { name: "3XL", value: "20px", width: 20 },
  { name: "4XL", value: "24px", width: 24 },
];

const spacingUsage = [
  { scene: "筛选项间距", value: "14px" },
  { scene: "按钮内间距 (水平)", value: "24px / 20px" },
  { scene: "按钮内间距 (垂直)", value: "16px" },
  { scene: "搜索栏内间距", value: "12px (垂直) / 16px (水平)" },
  { scene: "图标与文字间距", value: "6px" },
  { scene: "日期行间距", value: "4px" },
];

const radiuses = [
  { name: "Small (SM)", value: "8px", usage: "城市气泡" },
  { name: "Medium (MD)", value: "12px", usage: "按钮、卡片、搜索栏" },
  { name: "Full", value: "100px", usage: "Home Indicator" },
];

const shadows = [
  { name: "Shadow SM", value: "0px 2px 12px 0px rgba(0,0,0,0.16)", usage: "城市气泡" },
  { name: "Shadow LG", value: "0px 4px 24px 0px rgba(0,0,0,0.08)", usage: "浮动按钮" },
];

const navItems = [
  { id: "colors", icon: "🎨", label: "颜色系统" },
  { id: "typography", icon: "🔤", label: "字体系统" },
  { id: "spacing", icon: "📐", label: "间距系统" },
  { id: "radius", icon: "⭕", label: "圆角" },
  { id: "shadows", icon: "🌫", label: "阴影" },
  { id: "effects", icon: "✨", label: "特效" },
  { id: "variables", icon: "💻", label: "CSS 变量" },
];

export default function DesignSpec() {
  const [activeNav, setActiveNav] = useState("colors");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssVariables);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#f7f6f3] border-r border-[#ebebea] p-3 fixed h-screen overflow-y-auto">
        <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#efefef] cursor-pointer mb-2">
          <span className="text-lg">🌍</span>
          <span className="text-sm font-medium">地图项目</span>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center px-3 py-1.5 my-0.5 rounded text-sm transition-colors ${
                activeNav === item.id
                  ? "bg-[#efefef] text-[#37352f]"
                  : "text-[#787774] hover:bg-[#efefef]"
              }`}
            >
              <span className="w-5 h-5 mr-2 flex items-center justify-center">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[260px]">
        <div className="max-w-[900px] mx-auto py-20 px-24">
          {/* Page Header */}
          <header className="mb-12">
            <div className="text-[72px] mb-4">🌍</div>
            <h1 className="text-[40px] font-bold leading-tight mb-2">地图项目 · 设计规范</h1>
            <p className="text-base text-[#787774]">Design System Specification</p>
          </header>

          {/* Colors Section */}
          <section id="colors" className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎨</span>
              <h2 className="text-2xl font-semibold">颜色系统</h2>
            </div>
            <div className="ml-7">
              {/* Text Colors */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[#787774] uppercase tracking-wide mb-3">文本颜色</h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
                  {textColors.map((color) => (
                    <div key={color.name} className="flex items-center p-2 rounded hover:bg-[#f7f6f3] transition-colors">
                      <div
                        className="w-12 h-12 rounded mr-3 flex-shrink-0"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{color.name}</div>
                        <div className="text-xs text-[#9b9a97] font-mono">{color.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Colors */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[#787774] uppercase tracking-wide mb-3">背景颜色</h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
                  {bgColors.map((color) => (
                    <div key={color.name} className="flex items-center p-2 rounded hover:bg-[#f7f6f3] transition-colors">
                      <div
                        className="w-12 h-12 rounded mr-3 flex-shrink-0 border border-[#e0e0e0]"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{color.name}</div>
                        <div className="text-xs text-[#9b9a97] font-mono">{color.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent Colors */}
              <div>
                <h3 className="text-sm font-medium text-[#787774] uppercase tracking-wide mb-3">强调色</h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
                  {accentColors.map((color) => (
                    <div key={color.name} className="flex items-center p-2 rounded hover:bg-[#f7f6f3] transition-colors">
                      <div
                        className="w-12 h-12 rounded mr-3 flex-shrink-0"
                        style={{
                          background: color.gradient
                            ? "linear-gradient(135deg, #555cd6 0%, #8149f2 100%)"
                            : color.value,
                        }}
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{color.name}</div>
                        <div className="text-xs text-[#9b9a97] font-mono">{color.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#e9e9e7] my-12" />

          {/* Typography Section */}
          <section id="typography" className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🔤</span>
              <h2 className="text-2xl font-semibold">字体系统</h2>
            </div>
            <div className="ml-7">
              <div className="flex items-center gap-3 p-4 bg-[#f7f6f3] rounded mb-4">
                <span className="text-xl">✏️</span>
                <span className="text-sm text-[#787774]">
                  字体家族：<code className="bg-white px-1 rounded">PingFang SC</code> (苹方)
                </span>
              </div>
              <div className="border border-[#e9e9e7] rounded overflow-hidden">
                {typography.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-5 py-4 border-b border-[#e9e9e7] last:border-b-0"
                  >
                    <div className="w-[140px] flex-shrink-0">
                      <div className="text-xs font-medium text-[#787774] font-mono">{item.size}</div>
                      <div className="text-[11px] text-[#9b9a97]">{item.weight}</div>
                    </div>
                    <div style={{ fontSize: item.fontSize, lineHeight: `${item.lineHeight}px` }}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="h-px bg-[#e9e9e7] my-12" />

          {/* Spacing Section */}
          <section id="spacing" className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📐</span>
              <h2 className="text-2xl font-semibold">间距系统</h2>
            </div>
            <div className="ml-7">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3 mb-6">
                {spacings.map((spacing) => (
                  <div key={spacing.name} className="flex items-center p-3 bg-[#f7f6f3] rounded">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <div
                        className="bg-[#333333] rounded-sm"
                        style={{ width: spacing.width, height: 32 }}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{spacing.name}</div>
                      <div className="text-xs text-[#9b9a97] font-mono">{spacing.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="py-2.5 px-3 text-left font-medium text-[#787774] text-xs uppercase tracking-wide border-b border-[#e9e9e7]">
                      场景
                    </th>
                    <th className="py-2.5 px-3 text-left font-medium text-[#787774] text-xs uppercase tracking-wide border-b border-[#e9e9e7]">
                      间距值
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {spacingUsage.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2.5 px-3 text-[#787774] border-b border-[#e9e9e7]">{item.scene}</td>
                      <td className="py-2.5 px-3 font-mono text-[#787774] border-b border-[#e9e9e7]">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="h-px bg-[#e9e9e7] my-12" />

          {/* Radius Section */}
          <section id="radius" className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⭕</span>
              <h2 className="text-2xl font-semibold">圆角</h2>
            </div>
            <div className="ml-7">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
                {radiuses.map((radius) => (
                  <div key={radius.name} className="text-center p-5 bg-[#f7f6f3] rounded">
                    <div
                      className="w-14 h-14 bg-[#333333] mx-auto mb-3"
                      style={{ borderRadius: radius.value }}
                    />
                    <div className="text-sm font-medium mb-1">{radius.name}</div>
                    <div className="text-xs text-[#9b9a97] font-mono">{radius.value}</div>
                    <div className="text-[11px] text-[#9b9a97] mt-2">{radius.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="h-px bg-[#e9e9e7] my-12" />

          {/* Shadows Section */}
          <section id="shadows" className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌫</span>
              <h2 className="text-2xl font-semibold">阴影</h2>
            </div>
            <div className="ml-7">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
                {shadows.map((shadow) => (
                  <div
                    key={shadow.name}
                    className="p-6 bg-white rounded text-center"
                    style={{ boxShadow: shadow.value }}
                  >
                    <div className="text-sm font-medium mb-1">{shadow.name}</div>
                    <div className="text-[11px] text-[#9b9a97] font-mono">{shadow.value}</div>
                    <div className="text-xs text-[#9b9a97] mt-2">{shadow.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="h-px bg-[#e9e9e7] my-12" />

          {/* Effects Section */}
          <section id="effects" className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">✨</span>
              <h2 className="text-2xl font-semibold">特效</h2>
            </div>
            <div className="ml-7">
              <div
                className="flex items-center p-5 rounded mb-3 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/effect-bg.png')",
                  minHeight: "120px",
                }}
              >
                <div className="px-8 py-4 bg-white/90 backdrop-blur-lg rounded shadow-lg font-medium">
                  磨砂玻璃效果
                </div>
                <div className="ml-5 text-white">
                  <div className="text-sm font-medium mb-1">Backdrop Blur</div>
                  <div className="text-xs opacity-90 font-mono">backdrop-filter: blur(8px)</div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-[#e9e9e7] my-12" />

          {/* CSS Variables Section */}
          <section id="variables" className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">💻</span>
                <h2 className="text-2xl font-semibold">CSS 变量</h2>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-[#37352f] text-white rounded-lg hover:bg-[#555] transition-colors text-sm font-medium"
              >
                {copied ? (
                  <>
                    <span>✓</span>
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>复制 CSS 变量</span>
                  </>
                )}
              </button>
            </div>
            <div className="ml-7">
              <div className="bg-[#f7f6f3] border border-[#e9e9e7] rounded p-4 overflow-x-auto text-[13px]">
                <pre className="font-mono leading-relaxed text-[#37352f]">
                  <code>{cssVariables}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-6 border-t border-[#e9e9e7] text-xs text-[#9b9a97]">
            <p>Design System Specification · 地图项目 · Generated from Figma</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
