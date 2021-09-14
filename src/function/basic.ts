// アロー関数
export const logMessge = (message: string): void => {
  console.log('functionbasic1', message)
}

// 名前付き関数
export function log2(message: string): void {
  console.log('functionbasic2', message)
}

// 関数式
export const log3 = function (message: string): void {
  console.log('functionbasic3', message)
}

// アロー関数の省略記法
export const log4 = (message: string): void => console.log('functionbasic4', message)

export const error = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ
type Logm = (message: string) => void 
export const Log6: Logm = (message) => {
  console.log('シグネチャ', message)
}

// 完全な呼び出しシグネチャ
type Fullm = {
  (message: string):void
}

export const log7: Fullm = (message) => {
  console.log("完全呼び出しシグネチャ", message)
}