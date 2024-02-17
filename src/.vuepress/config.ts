import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  // base: '/xinxin',
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '辰晨沉',
      description: '辰晨沉 - 轻舟已过万重山，长路漫漫亦灿灿。',
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


export interface effectOption {
  //size of the particle, default: 2
  size?: Number
  // shape of the particle('star' | 'circle'), default: 'star'
  shape?: string
  // z-index property of the canvas, default: 999999999
  zIndex?: Number
}

