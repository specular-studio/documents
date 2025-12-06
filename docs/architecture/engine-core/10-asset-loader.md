---
id: 10-asset-loader
title: Asset Loader（资源加载器）
sidebar_label: 10. Asset Loader
sidebar_position: 10
---
```
class AssetLoader {
  + loadJSON(path: string): any
  + loadText(path: string): string
  + loadBinary(path: string): ArrayBuffer
}
```
- Relations
  - AssetLoader → VFS（解析路径）
  - Extensions / Seed / Skin 都使用它加载资源
