export default function call() {
  const url = "https://api.github.com/users/kazu8901"

  // コールバックで呼び出す非同期処理
  const fetchPro = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res.json()
          .then((json) => {
            console.log("calback 1:", json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchPro()
  console.log("calback 2:", profile)
}