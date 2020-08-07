<template>
  <div class="article__menu">
    <div class="article__menu__content">
      <div v-for="topic in topics" :key="topic.link" :class="topic.class">
        <div @click="$smoothScroll(topic.link)">
          {{ topic.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
import marked from 'marked'

interface Topic {
  class: string
  text: string
  link: string
}

@Component
export default class CommonArticleContent extends Vue {
  @articleModule.State article

  public get topics(): Array<Topic> {
    const topics: Array<Topic> = []
    if (!this.article) return topics

    const markdown = document.createElement('div')
    markdown.innerHTML = marked(this.article.content || '')
    const nodeList: any = markdown.childNodes
    nodeList.forEach(node => {
      const tagName: string = `${node.tagName}`.toLowerCase()
      if (tagName === 'h1' || tagName === 'h2') {
        const topic: Topic = {
          class: `article__menu__content__${tagName}`,
          text: node.innerText,
          link: node.id
        }
        topics.push(topic)
      }
    })
    return topics
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .article__menu {
    display: none;
  }
}
.article__menu {
  position: relative;
  width: 250px;

  &__content {
    position: fixed;
    margin-top: 50px;

    &__h1 {
      max-width: 250px;
      padding: 10px;
      color: #9e8787;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    &__h2 {
      max-width: 250px;
      margin: 10px 10px 10px 20px;
      color: #9e8787;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.markdown {
  padding: $space;
}
</style>
