export const URLs = {
  home: '/pages/home/index',

} as const;  // 使用 `as const` 保证这些 URL 不可修改，类型为字面量类型

// 如果你需要为 URLs 提供更好的类型推导，可以定义具体的类型。
export type URLKeys = keyof typeof URLs;
