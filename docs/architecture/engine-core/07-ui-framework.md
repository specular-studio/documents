---
id: 07-ui-framework
title: UI Framework（UI）
sidebar_label: 07. UI Framework
sidebar_position: 7
---
```
class UIFramework {
  + registerSlot(id: string, slot: UISlot): void
  + getSlots(): UISlot[]
  + render(): void
}

class UISlot {
  + id: string
  + components: UIComponent[]
}
```
- Relations
  - UIFramework ← Seed（布局）
  - UIFramework ← Skin（视觉主题）
