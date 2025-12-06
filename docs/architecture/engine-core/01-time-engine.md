---
id: 01-time-engine
title: Time Engine（时间引擎）
sidebar_label: 01. Time Engine
sidebar_position: 1
---

```
class TimeEngine {
  + now(): number
  + delta(): number
  + update(): void
  + schedule(delay: number, callback: Function): void
}
```

- Relations
  - TimeEngine → Scheduler（驱动系统调度）
  - TimeEngine → EventBus（驱动延迟事件）
