<template>
  <transition name="fade">
    <div v-if="visible" class="bulletin-wrapper" :style="{ width }">
      <h4 class="bulletin-title">
        <reco-icon icon="reco-tongzhi" />
        <span>{{ title || bulletinLocales.title }}</span>
        <i class="btn-close" @click="closeNote">
          <svg t="1573745677073" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4448" width="22" height="22"><path d="M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0" p-id="4449"></path></svg>
        </i>
      </h4>
      <div class="bulletin-content" v-html="bodyNodes"></div>
      <hr>
      <div class="bulletin-footer" v-html="footerNodes"></div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Bulletin',
  data () {
    return {
      visible: false,
      /* eslint-disable no-undef */
      title: '消息公告',
      width: '200',
      body: {
        type: 'title',
        content: '欢迎加入QQ交流群 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      footer: ''
    }
  },
  computed: {
    bodyNodes () {
      return this.handleNode(this.body).join('')
    },
    footerNodes () {
      return this.handleNode(this.footer).join('')
    }
  },
  mounted () {
    const closeNote = sessionStorage.getItem('closeNote')
    this.visible = closeNote !== 'true'
  },
  methods: {
    closeNote () {
      this.visible = false
      sessionStorage.setItem('closeNote', 'true')
    },
    handleNode (nodes) {
      if (!Array.isArray(nodes)) {
        let type = nodes.type
        type = type.slice(0, 1).toUpperCase() + type.slice(1)
        return this[`handle${type}`](nodes)
      } else {
        return nodes.map(node => this.handleNode(node))
      }
    },
    handleImage (node) {
      return `<img style=\"${node.style || ''}\" src=\"${node.src}\" />`
    },
    handleText (node) {
      return `<p style=\"${node.style || ''}\">${node.content}</p>`
    },
    handleTitle (node) {
      return `<h5 style=\"${node.style || ''}\">${node.content}</h5>`
    },
    handleButton (node) {
      return `<a style=\"${node.style || ''}\" class=\"btn\" href=\"${node.link}\">${node.text}</a>`
    }
  }
}
</script>

<style lang="stylus" scoped></style>