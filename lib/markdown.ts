class Markdown {
  img(url: string): string {
    return `![img](${url})`
  }
}

export default new Markdown()