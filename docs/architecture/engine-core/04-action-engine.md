---
id: 04-action-engine
title: Action Engine（行为系统）
sidebar_label: 04. Action Engine
sidebar_position: 4
---
```
class Action {
  + id: string
  + name: string
  + canExecute(actor: ActorBase, context: UpdateContext): boolean
  + execute(actor: ActorBase, context: UpdateContext): ActionResult
}

class ActionRegistry {
  + register(action: Action): void
  + get(id: string): Action
}
```

- Relations
  - ActionEngine ← ActorModule（模块提供行为）
  - ActionEngine → EventBus（行为触发事件）
