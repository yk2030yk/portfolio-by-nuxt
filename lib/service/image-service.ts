import firebase from '~/plugins/firebase'
import { COLLECTION_NAME_IMAGES } from '~/config/collections'

const db = firebase.firestore()
const imageCollection = db.collection(COLLECTION_NAME_IMAGES)
const storage = firebase.storage()
const STORAGE_BASE_PATH = 'images'

const getFilePath = fileName => {
  return `${STORAGE_BASE_PATH}/${fileName}`
}

const getDownloadURL = async (path: string) => {
  return new Promise<string>((resolve, reject) => {
    storage
      .ref()
      .child(path)
      .getDownloadURL()
      .then(url => {
        resolve(url)
      })
      .catch(() => {
        reject(`画像をダウンロードURLに変換できませんでした。\npath: ${ path }`)
      })
  })
}

const register = async (fileName: string) => {
  return new Promise((resolve, reject) => {
    imageCollection
      .add({
        path: getFilePath(fileName),
        timestamp: Date.now()
      })
      .then(() => {
        resolve()
      })
      .catch(() => {
        reject(`画像のアップロードに失敗しました。\fileName: ${ fileName }`)
      })
  })
}

const upload = async (file: File, fileName: string) => {
  const path: string = getFilePath(fileName)
  const ref = storage.ref().child(path)
  await ref.put(file)
  return await getDownloadURL(path)
}

const resize = async (file, maxWidth = 400) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return reject()

    const reader = new FileReader()
    reader.onload = function() {
      if (typeof reader.result !== 'string') {
        return reject()
      }
      const image: HTMLImageElement = new Image()
      image.src = reader.result
      image.onload = () => {
        const scale = maxWidth / image.width
        const width = maxWidth
        const height = image.height * scale
        console.log(maxWidth)
        canvas.width = width
        canvas.height = height
        ctx.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          0,
          0,
          width,
          height
        )
        canvas.toBlob(blob => {
          if (blob) {
            resolve(blob)
          } else {
            reject()
          }
        })
      }
    }
    reader.readAsDataURL(file)
  })
}

export interface ImageServiceFetchOption {
  limit?: number
}

const fetchImages = async (option: ImageServiceFetchOption = {}) => {
  return new Promise<Array<string>>((resolve, reject) => {
    let ref: any = imageCollection

    if (option.limit && Number.isInteger(option.limit)) {
      ref = ref.limit(option.limit)
    }

    const result: Array<string> = []
    ref
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data()
          result.push(data.path)
        })
        resolve(result)
      })
      .catch(() => {
        reject()
      })
  })
}

class ImageService {
  async upload(file: File, fileName: string) {
    const url: string = await upload(file, fileName)
    await register(fileName)
    return url
  }

  async resize(file: File) {
    return await resize(file)
  }

  async fetchImages(option: ImageServiceFetchOption) {
    const images: Array<string> = await fetchImages(option)
    const result: Array<string> = []
    for (let image of images) {
      try {
        const url: string = await getDownloadURL(image)
        result.push(url)
      } catch(e) {
        console.log(e)
      }
    }
    return result
  }
}

export default new ImageService()