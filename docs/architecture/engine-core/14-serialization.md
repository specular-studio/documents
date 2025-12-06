---
id: 14-serialization
title: 14. Serialization（序列化）
sidebar_label: 14. Serialization
sidebar_position: 14
---
```
class Serializer {
  + serialize(world: World): SerializedWorld
  + deserialize(data: SerializedWorld): World
}
```
- Relations
  - 底层能力由 SaveSystem 调用
  - 确保动态 Actor / Systems / Attributes 可重构
