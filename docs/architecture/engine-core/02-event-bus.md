---
id: 02-event-bus
title: Event Bus（事件总线）
sidebar_label: 02. Event Bus
sidebar_position: 2
---
```
class EventBus {
  + emit(event: EngineEvent): void
  + on(type: string, handler: Function): void
  + off(type: string, handler: Function): void
}

class EngineEvent {
  + timestamp: number
  + type: string
  + payload: any
}
```
- 所有系统、Actor、Actions 都使用 EventBus 通信
