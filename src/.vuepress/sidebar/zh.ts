import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/about/': [
    {
      text: '返回技术',
      icon: 'sort',
      link: '/technology/',
    },
    {
      text: '关于',
      icon: 'info',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],
  '/project/': [
    {
      text: '返回技术',
      icon: 'sort',
      link: '/technology/',
    },
    {
      text: '音乐',
      icon: 'music',
      prefix: 'music/',
      children: 'structure',
      link: '/project/music/',
    }
  ],
  '/': [
    '',
    {
      text: '技术',
      icon: 'note',
      prefix: 'technology/',
      link: '/technology/',
      children: 'structure',
    },
    {
      text: '项目',
      icon: 'favoritea',
      link: '/project/',
      children: [
        {
          text: '音乐',
          icon: 'music',
          link: '/project/music/',
        },
      ],
    },
    {
      text: '关于',
      icon: 'info',
      prefix: 'about/',
      link: '/about/website.html',
      children: 'structure',
    },
  ],
});
