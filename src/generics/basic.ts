export default function gene() {
  // ジェネリック型を使わない場合
  const string = (array: string[], initial: string): string => {
    let result = initial
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("generic sample 1:", string(["kusa", "mori", "nani"], ""))

  const number = (array: number[], initial: number): number => {
    let result = initial
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("generic sample 2:", number([1, 33, 40], 1000))

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GeneReduce<T> = {
    (array: T[], initialValue: T): T
  }
  const geneStringReduce: GeneReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("generic sample 3:", geneStringReduce(["a", "ww", "44"], "kokokoko"))

  const geneNumberReduce: GeneReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("generic sample 4:", geneNumberReduce([1, 2, 4], 8))

  type GeneReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 省略記法
  type GeneReduce3<T> = (array: T[], initialValue: T) => T
  type GeneReduce4<U> = (array: U[], initialValue : U) => U
}