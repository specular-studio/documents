---
id: 08-save-load
title: Save / Load（存档）
sidebar_label: 08. Save / Load
sidebar_position: 8
---
```
class SaveSystem {
  + save(): SerializedWorld
  + load(data: SerializedWorld): void
}
```
- Relations
  - SaveSystem → Serializer（序列化工具）
  - SaveSystem ← ActorBase / Systems（各自提供状态）
