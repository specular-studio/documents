---
id: 09-deterministic-randomness
title: Deterministic Randomness（可复现随机数）
sidebar_label: 09. Deterministic Randomness
sidebar_position: 9
---
```
class Random {
  + seed(value: number): void
  + next(): number
  + range(min: number, max: number): number
}
```
- Relations
  - Random 被 Action / Systems / AI 使用
  - 与 TimeEngine、SaveSystem 强相关（保持可复现性）
