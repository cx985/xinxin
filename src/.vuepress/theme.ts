import { hopeTheme } from 'vuepress-theme-hope';
import packageData from '../../package.json' assert { type: 'json' };
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';

const year = new Date().getFullYear()
const devDependencies = packageData.devDependencies
const ThemeVersion =
  'v' + devDependencies['vuepress-theme-hope'].replace('^', '')

import { AuthorName, HostName } from './utils/constant.ts';


export default hopeTheme({
  hostname: HostName,
  author: {
    name: AuthorName,
  },
  // iconAssets: '//at.alicdn.com/t/c/font_3855310_p3z6ugbxr7a.css',
  iconAssets: '//at.alicdn.com/t/c/font_4285559_wygf6ym51pr.css',
  logo: '/pwa/144.png',
  docsDir: 'src',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],
  blog: {
    avatar: '//file.mo7.cc/static/lxh_gif/lxh_71.gif',
    roundAvatar: true,
    medias: {
      Email: 'mailto:1690273757@qq.com',
      GitHub: 'https://github.com/cx985',
      Lark: 'https://www.feishu.cn',
      Zhihu: 'https://www.zhihu.com',
    },
  },

  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: '辰心编码',
        description: '轻舟已过万重山，长路漫漫亦灿灿。',
        intro: '/about/me.html',
        timeline: '美好的事情即将发生',
      },
    },
  },

  encrypt: {
    config: {
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: 'Waline',
      // serverURL: 'https://talk.mo7.cc',
      serverURL: 'https://comment.cx985.top',
      copyright: false,
      reaction: true,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.png',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/pwa/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: '辰心编码',
            short_name: '辰心编码',
            url: '/',
            icons: [
              {
                src: '/pwa/192.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
  //自定义页脚
  footer: `
    <div>
      <div class="footer-about">
        <span>本博客已运行</span>
        <span id="blog-duration"></span>
      </div>
    </div>
  `
},
// 主题行为选项：https://theme-hope.vuejs.press/zh/config/theme/behavior.html
{
  custom: true
}
);
