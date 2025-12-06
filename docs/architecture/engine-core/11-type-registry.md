---
id: 11-type-registry
title: Type Registry（类型注册系统）
sidebar_label: 11. Type Registry
sidebar_position: 11
---
```
class TypeRegistry {
  + register(typeName: string, definition: any): void
  + get(typeName: string): any
}
```
- Relations
  - Extensions 注册：属性类型 / 行为类型 / 模块类型
  - DynamicFields/ActionEngine/... 都依赖它做类型识别

