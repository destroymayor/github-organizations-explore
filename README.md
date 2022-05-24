# Github Organization Explorer

一個基於 Meta(原 Facebook) 的 Organization Repositories 網站

## [Online Demo](https://github-organizations-explore.vercel.app/)

### Install

```
yarn
```

### Development

```
yarn dev
```

### Architecture

#### 特色

- 使用 SWR 來查詢資料，並且緩存資料以提高效能。
- 使用 Intersection Observer API 檢查使用者是否滑動到最底部，並載入更多資料。
- 元件盡可能只接收狀態，邏輯的部分則封裝進 Custom hooks。
- 篩選器使用 Custom 的 Select，包含 Type、Sort、Direction 三種選項可自由組合條件。
- 列表狀態包含 Loading、Error、Empty 因應不同狀態來顯示。

#### 使用技術

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Deployment: [Vercel](https://vercel.com/)
- Code Quality: [ESLint](https://eslint.org/)、[Prettier](https://prettier.io/)、[Husky](https://github.com/typicode/husky)

### References

- [Github API](https://docs.github.com/en/rest/repos/repos#list-organization-repositories)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
