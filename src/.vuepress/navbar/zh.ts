import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/technology',
  {
    text: '管理',
    icon: 'jiansuo',
    children: [
      { text: '全部', icon: 'list', link: '/article' },
      { text: '分类', icon: 'category', link: '/category' },
      { text: '标签', icon: 'tag', link: '/tag' },
      { text: '时间轴', icon: 'time', link: '/timeline' },
    ],
  },

  {
    text: '项目',
    icon: 'start',
    link: '/project',
    children: ['/project/music'],
  },
  '/about',
]);
