export default function obj() {
  const a: object = {
    name: 'siso',
    age: 23
  }
  // a.name

  // オブジェクトリテラル記法
  let country: {
    lang: string
    name: string
  } = {
    lang: "japanese",
    name: "japan"
  }

  console.log("obj sample 1:", country)

  country = {
    lang: "草",
    name: "kkk"
  }
  console.log("obj sample 2:", country)

  // オプショナルとリードオンリー
  const kusa: {
    age: number
    lName: string
    readonly fName: string
    gender?: string
  } = {
    age:23,
    lName: "kusa",
    fName: "siso",
  }
  kusa.gender = 'male'
  kusa.lName = 'mori'
  // kusa.fName = 'fufu'

  console.log("obj sample 3:", kusa)

  // インデックスシグネチャ
  const cap: {
    [countryName: string]: string
  } = {
    japan: 'tokyo',
    korea: 'seoul'
  }

  cap.china = 'しゃんはい'
  cap.canada = "どこだろう"

  console.log("obj sample 4:", cap)
}