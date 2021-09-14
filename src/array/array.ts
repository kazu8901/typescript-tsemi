export default function arr() {
  // シンプルな配列の型定義
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // colors.push(123)
  console.log("array sample 1:", colors)

  const even: Array<number> = [2,4,6]
  even.push(123)
  console.log("array sample 2:", even)

  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)

  console.log("array sample 3:", ids)

  // 配列の型推論
  const katasuiron = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push("ABC") // (string | number)[]
    return _someArray
  }

  const someArray = katasuiron()
  someArray.push(456)
  // someArray(true)
  console.log("array sample 4:", someArray)

  // 可変長引数を使ったタプル
  const friends: [string, ...string[]] = ["kusa", "mori", "nunu"]
  friends.push("moji")
  console.log("array sample 5:", friends)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ["add", "init", "push"]
  // commands.push("pull")
  // commands[2] = "pull"
  console.log("array sample 6:", commands)
}