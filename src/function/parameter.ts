// オプションパラメーターを持つ関数
// オプショナル
export const userSignIn =(userId: string, userName?: string): boolean => {
  if (userId === "ABC") {
    console.log("サインインできてるよ", userName)
    return true
  } else {
    console.log("サインインできてねえー", userName)
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const userSignIn2 =(userId: string, userName: string = "無"): boolean => {
  if (userId === "ABC") {
    console.log("サインインできてるよ2", userName)
    return true
  } else {
    console.log("サインインできてねえー3", userName)
    return false
  }
}
