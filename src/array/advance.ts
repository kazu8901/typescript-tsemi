export default function advance() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStNum: Map<string, number> = (array, fn) => {
    let result = []
    for (let i=0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const num = mapStNum(["123", "456", "789"], (item) => Number(item))
  console.log("generic sample 1:", num)

  const mapSt: Map<number, string> = (array, fn) => {
    let result = []
    for (let i=0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const St = mapSt(num, (item) => String(item))
  console.log("generic sample 2:", St)

}