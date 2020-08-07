interface errorMessage {
  date: string,
  url: string,
  message: string
}

const formatMessage = (message: string): string => {
  const date = new Date()
  const data: errorMessage = {
    date: `${ date.getFullYear() }-${ date.getMonth }-${ date.getDate() } ${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }`,
    url: location.href,
    message: message
  }
  return JSON.stringify(data)
}

export default {
  log: (message: string) => {
    try {
      console.log(formatMessage(message))
    } catch(e) {
      console.log(e)
      console.log('エラーレポートの送信に失敗しました。')
    }
  }
}
