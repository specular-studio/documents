---
sidebar_position: 4
id: weekly-micro-roadmap
title: 📆 Weekly Micro Roadmap v2.0（核心扩展优先版）
sidebar_label: 📆 Weekly Micro Roadmap v2.0
---

# 📆 Weekly Micro Roadmap v2.0（核心扩展优先版）

---

# 🌈 **结构说明**

全年分 4 大阶段（对应 4 个季度）：

1. **Q1：Engine 核心 + Debug UI + Seed 框架 v0.1**
2. **Q2：核心扩展包（ActionPack / Relation / LifeEvents / AI）**
3. **Q3：系统扩展 + 默认 Seed（东京社畜 / 修仙）+ Skin 完整化**
4. **Q4：优化、文档、发布准备（Demo → EA）**

每周预估投入：

* 20 小时开发
* 10 小时测试 / 文档

---

# 🟥 **Q1 · Week 1~13｜Engine 核心 + Debug UI + Seed 基础**

## 🟥 Week 1：项目初始化

* 创建仓库
* 文件结构：engine / extensions / seed / skins / tools
* 构建脚本
* README（项目概览）

---

## 🟥 Week 2：Time Engine v0.1

* Tick
* Pause / Resume
* Step（调试步进模式）

---

## 🟥 Week 3：Event Bus v0.1

* register
* emit
* subscribe
* 事件示例（time_tick）

---

## 🟥 Week 4：State System Prototype

* 动态属性字典
* set/get/modify
* 绑定到 Actor

---

## 🟥 Week 5：ActorBase v0.1

* attributes
* inventory
* tags
* update(context) 空
* ActorManager

---

## 🟥 Week 6：Action Engine v0.1

* register_action
* validate
* execute
* 默认行为：wait / rest

---

## 🟥 Week 7：Save / Load v0.1

* JSON 快照
* Actor 状态恢复
* 多次运行一致性

---

## 🟥 Week 8：Deterministic Random v0.1

* Hash-based RNG
* seed + tick → 可复现随机

---

## 🟥 Week 9：**Debug UI v0.1（不是 Skin Framework）**

面板：

* TimePanel
* ActorPanel
* LogPanel
* WorldPanel

仅用于测试 Engine，不涉及主题/风格。

---

## 🟥 Week 10：Seed 规范 v0.1

* world.json
* actors.json
* rules.json
* 最小世界结构定义

---

## 🟥 Week 11：Seed Loader v0.1

* 加载世界规则
* 初始化角色
* 运行基础循环

---

## 🟥 Week 12：最小世界 Demo（社畜早晨）

* 上班 → 下班
* Tick 推进
* Debug UI 输出
* 最小可运行 Demo

---

## 🟥 Week 13：Q1 复盘 + 重构

* 清理坏代码
* 整理文档
* 为扩展包结构做准备

👉 **Q1 完成：Engine Core 能跑，用 Debug UI 可测试。**

---

# 🟧 **Q2 · Week 14~26｜核心扩展包（优先逻辑，再做工具）**

⚠ **重大优化点：比 v1 更合理的地方是在 Q2 不做世界内容，而做系统扩展。**

你需要一个“核心逻辑层（Extensions）”，否则 Seed 没有玩法基础。

---

## 🟧 Week 14：Extension Manager v0.1

* manifest.json
* load/enable/disable
* 扩展命名空间

---

## 🟧 Week 15：扩展包依赖 & 冲突检测

* requires
* conflicts
* 依赖排序解析

---

## 🟧 Week 16：Extension Hooks v0.1

* onLoad()
* onInitWorld()
* onTick()
* register_action()
* register_attribute()

---

# 🔥 **核心扩展包开始**

## 🟧 Week 17：**ActionPack Extension v0.1（基础行为包）**

必须最先做，因为所有扩展包都依赖基础动作。

包含：

* eat
* sleep
* talk（generic）
* work（generic）
* move
* socialize

---

## 🟧 Week 18：**Relation Extension v0.1**

核心设计：

* 好感度
* 信任 / 尊敬
* 人物 → 人物关系矩阵
* relation_changed 事件

---

## 🟧 Week 19：**LifeEvents Extension v0.1**

* 随机事件引擎
* 条件触发器（always / random）
* 属性变化事件
* 事件日志

---

## 🟧 Week 20：**AI Agent Framework v0.1**

* update(context)
* choose_action()
* 行为选择策略

AI 需要 Relation 和 ActionPack 提供数据，所以必须放在这。

---

## 🟧 Week 21：UI Slot Framework v0.1（正式 UI 框架）

区别于 Debug UI，它属于 Skin 层前置基础：

* TopBar
* Sidebar
* MainPanel
* UISchema 合并机制（Engine+Extension+Seed）

---

## 🟧 Week 22：Seed Editor v0.1（基础）

* 读取 seed/
* world.json 编辑
* 自动保存

---

## 🟧 Week 23：Seed Editor v0.2 - Actor 编辑器

* 添加/删除 Actor
* 编辑属性
* Actor 预览

---

## 🟧 Week 24：Seed Editor v0.3 - 事件编辑器

* 添加事件
* 简单前置条件
* 执行效果
* 预览运行

---

## 🟧 Week 25：UI Skin Framework v0.1

* theme.json
* icons/
* backgrounds/
* layout.json
* schema_adapter

---

## 🟧 Week 26：Q2 复盘 + 稳定化

* 修复扩展包问题
* 整理编辑器结构
* 文档更新

👉 **Q2 完成：你的引擎有了“可玩逻辑层”。Seed 可使用多个扩展组合，世界真正能动起来。**

---

# 🟩 **Q3 · Week 27~39｜系统扩展 + 默认 Seed + Skin 完整化**

现在可以正式做 Seed，因为系统层已经齐全。

---

## 🟩 Week 27：Economy / Finance Extension v0.1

* 收入 / 支出
* 消费模型
* 简易市场价格模型

（用于东京世界）

---

## 🟩 Week 28：Career Extension v0.1

* 职位
* 晋级
* 心情 / 压力

（用于东京世界）

---

## 🟩 Week 29：Cultivation Extension v0.1

* 灵根
* 境界
* 修炼行动
* 灵力循环

（用于修仙世界）

---

## 🟩 Week 30：Seed Inheritance 系统

* extends:
* override
* remove
* 多 Seed 组合

---

## 🟩 Week 31：UI Skin Designer v0.2

* 拖拽布局
* 主题配置
* 字体更换
* 动画预览

---

## 🟩 Week 32：默认 Seed 1：东京社畜 v1

基于：

* ActionPack
* Relation
* LifeEvents
* AI
* Finance
* Career

内容：

* 社畜日常
* 随机事件
* 简单社交
* 简易经济模型

---

## 🟩 Week 33：默认 Seed 2：修仙世界 v1

基于：

* ActionPack
* Relation
* LifeEvents
* AI
* Cultivation

内容：

* 修炼
* 灵根
* 小境界
* 奇遇事件

---

## 🟩 Week 34：Token Identity v0.3

* 成就
* run 总结
* 跨 Seed 记录

---

## 🟩 Week 35：自动化测试体系

* 行为测试
* 事件测试
* 世界一致性测试

---

## 🟩 Week 36：性能优化

* Scheduler 优化
* EventBus 优化
* Actor 更新优化

---

## 🟩 Week 37–39：Q3 全体复盘

* 修复默认 Seed
* 整理扩展包
* 修剪冗余代码
* 文档更新

👉 **Q3 完成：两个默认世界、皮肤系统完整、生态结构成型。**

---

# 🟦 **Q4 · Week 40~52｜优化 + 文档 + Steam 页面 + EA 发布**

## 🟦 Week 40：扩展包安全隔离（Sandbox）

* 权限控制
* 扩展沙箱
* 安全 API 层

---

## 🟦 Week 41：Token Identity v1.0

* 云同步（可选）
* 隐私控制
* run 防重复

---

## 🟦 Week 42：多语言（i18n）

* EN / JP / CN
* Seed 文案
* 系统 UI 文案

---

## 🟦 Week 43：Seed Editor 完整化

* 事件链可视化
* 条件编辑器
* debug 模式

---

## 🟦 Week 44：UI Skin Designer 完整化

* 完整主题编辑
* 全 Slot 编辑
* 动画/图标编辑

---

## 🟦 Week 45：创作者文档 v1.0

* Seed 教程
* Extension 教程
* Skin 教程
* API 文档

---

## 🟦 Week 46：教学示例包（Tutorial Kit）

* 教学 Seed
* 教学 Extension
* 教学 Skin

---

## 🟦 Week 47：Steam Demo 世界

* Demo Seed（轻量）
* 打包 Demo
* 宣传图、视频

---

## 🟦 Week 48：QA 大测试

* 性能
* Seed/Extension 冲突
* Skin 覆盖测试

---

## 🟦 Week 49：发布物准备

* LICENSE
* 使用条款
* 文档 PDF
* 创作者指南 PDF

---

## 🟦 Week 50：营销 & 宣传

* Twitter/X
* 视频预告
* 官方介绍页
* 开始收集 wishlist

---

## 🟦 Week 51：Steam 页面发布

* 页面上线
* 收集 wishlist
* 调整文案

---

## 🟦 Week 52：Early Access 正式发布

* EA 上线
* 收集反馈
* Roadmap v3.0 制定

👉 **Q4 完成：正式 EA，上架 Steam。**

---

# 🎉 最终成果（52 周）

你将拥有：

* **完整模拟引擎 Engine 1.0**
* 核心扩展包：ActionPack / Relation / LifeEvents / AI / Finance / Career / Cultivation
* 默认 Seed：东京社畜 & 修仙世界
* UI Skin 系统 + Designer
* Seed Editor（可视化编辑器）
* Token Identity
* 多语言支持
* 创作者生态文档
* 自动化测试体系
* Steam Demo + EA 发布

---

如果你愿意，我可以继续帮你——

### ✔ 生成 **Roadmap v2.0 的 PDF / Notion 版本**

### ✔ 生成一个 **github 仓库骨架（文件结构 + README + template）**

### ✔ 做一个 **扩展包接口/API 文档 v0.1**

### ✔ 做一个 **默认 Seed 的数据结构模板**

你需要哪一个？

