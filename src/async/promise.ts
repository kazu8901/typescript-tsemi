export default function promise() {
  const url = "https://api.github.com/users/kazu8901"

  type Pro = {
    login: string
    id: number
  }

  type FetchPro = () => Promise<Pro | null>

  const fetchPro: FetchPro = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res.json()
          .then((json) => {
            console.log("calback Pro 1:", json)
            resolve(json)
          })
          .catch((error) => {
            console.error(error)
            reject(null)
          })
      })
      .catch((error) => {
        console.error(error)
        reject(null)
      })
    })

  }

  fetchPro()
    .then((profile: Pro | null) => {
      if (profile) {
        console.log("calback Pro 2:", profile)
      }
    })
} 