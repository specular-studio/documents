---
id: 03-actor-framework
title: Actor Framework（角色基类 / 更新循环）
sidebar_label: 03. Actor Framework
sidebar_position: 3
---
```
class ActorBase {
  + id: string
  + type: string
  + attributes: DynamicFields
  + inventory: Item[]
  + tags: Set<string>
  + modules: Map<string, ActorModule>

  + update(context: UpdateContext): void
  + availableActions(context: UpdateContext): Action[]
}

class ActorModule {
  + id: string
  + onAttach(actor: ActorBase): void
  + onDetach(actor: ActorBase): void
  + onUpdate(actor: ActorBase, context: UpdateContext): void
  + getActions(actor: ActorBase, context: UpdateContext): Action[]
}
```
- Relations
  - ActorBase → Action Engine（获取行为）
  - ActorBase → State System（属性管理）
  - ActorBase → EventBus（抛事件）