// このファイル自体をモジュール化する（グローバル変数として扱われない）
export {}

let isFinished: boolean = true
isFinished = false
//isFinished = 1
console.log({ isFinished })
