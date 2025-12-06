---
id: 13-virtual-file-system
title: VFS：Virtual File System（虚拟文件系统）
sidebar_label: 13. VFS
sidebar_position: 13
---
```
class VFS {
  + mount(path: string, priority: number): void
  + unmount(path: string): void

  + exists(virtualPath: string): boolean
  + resolve(virtualPath: string): string
  + readFile(virtualPath: string): ArrayBuffer | string
}
```
- Relations
  - VFS → AssetLoader（路径解析）
  - 资源覆盖层级：Engine < Extensions < Seed < Skin
