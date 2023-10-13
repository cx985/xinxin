import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '技术',
    icon: 'jishufuwu',
    children: [
      { text: 'JAVA', icon: 'java', link: '/technology/java' },
      { text: '前端', icon: 'qianduan', link: '/technology/frontend' },
      { text: '大数据', icon: 'dashuju', link: '/technology/bigdata' },
    ],
  },
  {
    text: '管理',
    icon: 'yunyingguanli',
    children: [
      { text: '全部', icon: 'list', link: '/article' },
      { text: '分类', icon: 'category', link: '/category' },
      { text: '标签', icon: 'tag', link: '/tag' },
      { text: '时间轴', icon: 'time', link: '/timeline' },
      { text: '项目管理', icon: 'category', link: '/manager' },
    ],
  },

  {
    text: '项目',
    icon: 'xiangmu',
    link: '/project',
    children: ['/project/music'],
  },
  '/about',
]);
