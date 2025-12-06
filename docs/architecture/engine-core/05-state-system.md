---
id: 05-state-system
title: State System（属性系统）
sidebar_label: 05. State System
sidebar_position: 5
---
```
class DynamicFields {
  + get(key: string): any
  + set(key: string, value: any): void
  + has(key: string): boolean

  + addModifier(key: string, modifier: AttributeModifier): void
  + removeModifier(id: string): void

  + getComputed(key: string): any
}

class AttributeModifier {
  + id: string
  + type: string
  + value: any
}
```
- Relations
  - ActorBase → DynamicFields（属性容器）
  - DynamicFields 使用 TypeRegistry 做属性验证（可选）
