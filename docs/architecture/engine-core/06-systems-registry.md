---
id: 06-systems-registry
title: System Registry（系统注册器）
sidebar_label: 06. System Registry
sidebar_position: 6
---
```
class EngineSystem {
  + id: string
  + priority: number
  + update(context: UpdateContext): void
}

class SystemRegistry {
  + register(system: EngineSystem): void
  + list(): EngineSystem[]
}
```
- Relations
  - SystemRegistry → Scheduler（调度系统）
  - Extensions 注册自定义系统
