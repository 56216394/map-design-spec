# 地图项目设计规范

## 概述

本文档定义了地图项目的设计系统，包括颜色、字体、间距、圆角、阴影等核心设计 Token。

---

## 颜色 (Colors)

### 文本颜色

| Token 名称 | 十六进制值 | 用途 |
|-----------|-----------|------|
| `--color-text-primary` | `#222423` | 主要文本 |
| `--color-text-secondary` | `#858c88` | 次要文本 |
| `--color-text-tertiary` | `#6f6d73` | 三级文本 |
| `--color-primary` | `#232224` | 主色调 |

### 背景颜色

| Token 名称 | 值 | 用途 |
|-----------|-----|------|
| `--color-bg-gray` | `#f7f7f7` | 筛选框灰底 |
| `--color-bg-light-gray` | `#f1f0f2` | 浅色背景 |
| `--color-white-90` | `rgba(255, 255, 255, 0.9)` | 半透明白色 |

### 强调色

| Token 名称 | 十六进制值 | 用途 |
|-----------|-----------|------|
| `--color-accent-purple-1` | `#555cd6` | 强调色起始 |
| `--color-accent-purple-2` | `#8149f2` | 强调色结束 |
| 渐变 | `linear-gradient(135deg, #555cd6, #8149f2)` | 城市名高亮 |

---

## 字体 (Typography)

### 字体家族

```
font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 字号规范

| Token 名称 | 字号 | 行高 | 字重 | 用途 |
|-----------|------|------|------|------|
| `--font-size-2xl` | 26px | 26px | Regular/Medium | 标题、筛选 |
| `--font-size-xl` | 24px | 24px | Medium | 列表标题 |
| `--font-size-lg` | 22px | 22px | Medium/Semibold | 城市名 |
| `--font-size-md` | 20px | 28px | Regular | 副标题 |
| `--font-size-md` | 20px | 20px | Regular/Medium | 日期 |
| `--font-size-sm` | 18px | 18px | Regular | 按钮文字 |
| `--font-size-xs` | 16px | 16px | Medium | 小标签 |

---

## 间距 (Spacing)

| Token 名称 | 值 | 用途 |
|-----------|-----|------|
| `--spacing-xs` | 4px | 最小间距 |
| `--spacing-sm` | 6px | 图标与文字间距 |
| `--spacing-md` | 8px | 基础间距 |
| `--spacing-lg` | 12px | 搜索栏内间距（垂直） |
| `--spacing-xl` | 14px | 筛选项间距 |
| `--spacing-2xl` | 16px | 按钮内间距（垂直） |
| `--spacing-3xl` | 20px | 较大间距 |
| `--spacing-4xl` | 24px | 按钮内间距（水平） |

### 常用间距场景

| 场景 | 间距值 |
|------|--------|
| 筛选项间距 | 14px |
| 按钮内间距（水平） | 24px / 20px |
| 按钮内间距（垂直） | 16px |
| 搜索栏内间距 | 12px（垂直）/ 16px（水平） |
| 图标与文字间距 | 6px |
| 日期行间距 | 4px |

---

## 圆角 (Border Radius)

| Token 名称 | 值 | 用途 |
|-----------|-----|------|
| `--radius-sm` | 8px | 城市气泡 |
| `--radius-md` | 12px | 按钮、卡片、搜索栏 |
| `--radius-full` | 100px | Home Indicator |

---

## 阴影 (Shadows)

| Token 名称 | 值 | 用途 |
|-----------|-----|------|
| `--shadow-sm` | `0px 2px 12px 0px rgba(0, 0, 0, 0.16)` | 城市气泡 |
| `--shadow-lg` | `0px 4px 24px 0px rgba(0, 0, 0, 0.08)` | 浮动按钮 |

---

## 特效 (Effects)

| Token 名称 | 值 | 用途 |
|-----------|-----|------|
| `--blur-backdrop` | 8px | 磨砂玻璃效果 |

### 磨砂玻璃实现

```css
backdrop-filter: blur(8px);
background: rgba(255, 255, 255, 0.9);
```

---

## CSS 变量完整代码

```css
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

  /* Font Sizes */
  --font-size-xs: 16px;
  --font-size-sm: 18px;
  --font-size-md: 20px;
  --font-size-lg: 22px;
  --font-size-xl: 24px;
  --font-size-2xl: 26px;
}
```

---

## 设计原则

1. **简洁优先** - 大量留白，减少视觉干扰
2. **一致性** - 统一使用设计 Token，保持视觉一致
3. **层次分明** - 通过字号、颜色深浅区分信息层级
4. **响应式** - 间距和字号适配不同屏幕尺寸
