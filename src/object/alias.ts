export default function typeAlias() {
  // 型エイリアス
  type country = {
    cap: string
    lang: string
    name: string
  }

  const japan: country = {
    cap: "tokyo",
    lang: 'ja',
    name: 'japan'
  }

  console.log("obj sample 5:", japan)

  const america: country = {
    cap: "ワシソトソ",
    lang: "en",
    name: "アメリカ"
  }

  console.log("obj sample 6:", america)

  // 合併型と交差型
  type king = {
    hp: number
    sp: number
    wepon: string
    skill: string
  }

  type ashigaru = {
    hp: number
    mp: number
    wepon: string
    ashiskill: string
  }

    // 合併型... kingかashigaruの型を持つ
  type human = king | ashigaru

  // 交差型... kingかつashigaruの型を持つ
  type tsuwamono = king & ashigaru


  // kingよりの人
  const human1: human = {
    hp: 100,
    sp: 100,
    wepon: "やり",
    skill: "寝る"
  }

  // ashigaruよりの人
  const human2: human = {
    hp: 120,
    mp: 105,
    wepon: "素手",
    ashiskill: "ける"
  }

  console.log("obj sample 7:", human1)
  console.log("obj sample 8:", human2)
}