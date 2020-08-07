export default interface Article {
  id: string,
  title: string,
  content: string,
  headingImage: string,
  createdAt: number,
  updatedAt: number
}

export interface ArticleProperties {
  id?: boolean,
  title?: boolean,
  content?: boolean,
  headingImage?: boolean,
  createdAt?: boolean,
  updatedAt?: boolean
}

export class ArticleObject {
  private _id: string
  private _title: string
  private _content: string
  private _headingImage: string
  private _createdAt: number
  private _updatedAt: number

  constructor(obj: Article) {
    this._id = obj.id
    this._title = obj.title
    this._content = obj.content
    this._headingImage = obj.headingImage
    this._createdAt = obj.createdAt
    this._updatedAt = obj.updatedAt
  }

  public get id() {
    return this._id
  }

  public set id(id: string) {
    this._id = id
  }

  public get title() {
    return this._title
  }

  public set title(title: string) {
    this._title = title
  }

  public get content() {
    return this._content
  }

  public set content(content: string) {
    this._content = content
  }

  public get headingImage() {
    return this._headingImage
  }

  public set headingImage(headingImage: string) {
    this._headingImage = headingImage
  }

  public get createdAt() {
    return this._createdAt
  }

  public set createdAt(createdAt: number) {
    this._createdAt = createdAt
  }

  public get updatedAt() {
    return this._createdAt
  }

  public set updatedAt(updatedAt: number) {
    this._updatedAt = updatedAt
  }

  public get formatCreatedAt(): string {
    return this.formatDate(this._createdAt)
  }

  public get formatUpdatedAt(): string {
    return this.formatDate(this._updatedAt)
  }

  private formatDate(timestamp: number): string {
    if (!timestamp) return ''
    const date: Date = new Date(timestamp)
    return `${ date.getFullYear() }/${ date.getMonth() + 1 }/${ date.getDate() }`;
  }
}