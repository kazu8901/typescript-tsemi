export default async function async() {
  const url = "https://api.github.com/users/kazu8901"

  type Pro = {
    login: string
    id: number
  }

  type FetchPro = () => Promise<Pro | null>

  const fetchPro: FetchPro = async() => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!response) {
      return null
    }

    const json = await response.json()
      .then((json: Pro) => {
        console.log("async 1:", json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })
    
      if(!json) {
        return null
      }

      return json
  }

  const profile = await fetchPro()
  if (profile) {
    console.log("async 2:", profile)
  }

}