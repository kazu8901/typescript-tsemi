export default function notSample() {

  let name = null
  console.log("not sample 1:", typeof name, name)

  if (!name) {
    console.log("primitive sample 2:", "草ァ！")
  } else {
    console.log("primitive sample 3:", "なんだろう" + name)
  }

  let age = undefined
  console.log("not sample 4:", typeof age, age)
}