import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/about/': [
    {
      text: '返回技术',
      icon: 'fanhui',
      link: '/technology/',
    },
    {
      text: '关于',
      icon: 'guanyuwo',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],
  '/project/': [
    {
      text: '返回技术',
      icon: 'fanhui',
      link: '/technology/',
    },
    {
      text: '音乐',
      icon: 'yinle',
      prefix: 'music/',
      children: 'structure',
      link: '/project/music/',
    }
  ],
  '/': [
    '',
    {
      text: '技术',
      icon: 'jishufuwu',
      prefix: 'technology/',
      link: '/technology/',
      children: 'structure',
    },
    {
      text: '项目',
      icon: 'xiangmu',
      link: '/project/',
      children: [
        {
          text: '音乐',
          icon: 'yinle',
          link: '/project/music/',
        },
      ],
    },
    {
      text: '关于',
      icon: 'guanyuwo',
      prefix: 'about/',
      link: '/about/website.html',
      children: 'structure',
    },
  ],
});
