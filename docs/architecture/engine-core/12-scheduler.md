---
id: 12-scheduler
title: Scheduler（系统调度器 / 并发）
sidebar_label: 12. Scheduler
sidebar_position: 12
---
```
class Scheduler {
  + add(system: EngineSystem): void
  + update(context: UpdateContext): void
}
```
- Process
```
System (priority=100)
System (priority=90)
...
Actor Updates
...
UI Render
```
- Relations
  - Scheduler → EngineSystem（调度系统）
  - Scheduler → Actor Framework（调用 Actor.update）
