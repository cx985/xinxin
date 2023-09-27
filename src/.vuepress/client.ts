import { defineClientConfig } from '@vuepress/client';
import { defineAsyncComponent, onBeforeUnmount, onMounted } from 'vue';
import { setDurationTime } from './utils';

const NavBarBeautify = defineAsyncComponent(() => import('./Components/NavBarBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./Components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./Components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./Components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./Components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./Components/CommentHideBtn.vue'));
const MyLinks = defineAsyncComponent(() => import('./Components/MyLinks.vue'));
const MyIcon = defineAsyncComponent(() => import('./Components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./Components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./Components/BlogBeautify.vue'));
const CursorEffects = defineAsyncComponent(() => import('./Components/CursorEffects.vue'));
const DynamicTitle = defineAsyncComponent(() => import('./Components/DynamicTitle.vue'));


export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyLinks', MyLinks);
    app.component('MyIcon', MyIcon);
  },
  setup() {
    let timerInterval: ReturnType<typeof setInterval> | null
    onMounted(() => {
      setDurationTime()
      timerInterval = setInterval(() => {
        setDurationTime()
      }, 1000)
    })
    onBeforeUnmount(() => {
      if (timerInterval) clearInterval(timerInterval)
      timerInterval = null
    })
  },
  rootComponents: [
    NavBarBeautify,
    HeroBG,
    HeroHitokoto,
    NavMusic,
    PrintVersion,
    CommentHideBtn,
    BlogBg,
    BlogBeautify,
    CursorEffects,
    DynamicTitle,
    // ...
  ],
});
