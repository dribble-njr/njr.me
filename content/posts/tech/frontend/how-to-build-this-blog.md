---
title: how to build this blog
date: 2024-03-20
summary: step by step, build the blog with next.js, chakra ui, three.js and etc.
---

Let build a next.js blog like this.

---

## tech stack

## markdown render

https://github.com/TroyAlford/react-jsx-parser/issues/234

When I add this package in this project, I found it also occurs another error.It can't render code correctly.So I changed to use `chakra-ui-markdown-renderer`.

## deploy

![20240409234634](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240409234634.png)

## color mode flashing

I used the following color mode config:

```js
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true
}
```

It will want to know the color preference of a user upfront. But I use SSR so then changing color mode or init during hydration, and flashing happens.

So It should [add color mode manager for ssr](https://chakra-ui.com/docs/styled-system/color-mode#add-colormodemanager-optional-for-ssr).

But I deploy it on gh-pages that it can only used for static page. It can't use `getServerSideProps`.

So we have two case to solve this:

1. change deployment way
2. don't set `initialColorMode` with `system`
