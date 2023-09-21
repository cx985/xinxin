import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/xinxin',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '辰心编码',
      description: '辰心编码 - 简单快乐，理应如此。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mo7',
      description: 'Mo7 - Simple and happy, as it should be.',
    },
  },

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: '分类：$content',
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: '标签：$content',
        },
      ],
    }),
  ],

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
