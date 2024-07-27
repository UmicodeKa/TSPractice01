// =====================================================
// 変数
// =====================================================

// 変数の宣言
let num1: number = 11
let num2: number = 22
let strHello: string = 'hello'
let strWorld: string = 'わーるど!'
let str1: string = '11'

// 変数を出力してみる
console.log(num1)
console.log(strHello)
// 変数は書き換えることができる
strHello = 'こんにち'
console.log(strHello)

// =====================================================
// 演算子
// =====================================================

// 算術演算子
console.log(1 + 2)
console.log(1 - 2)
console.log(1 * 2)
console.log(1 / 2)
console.log(1 % 2)
console.log(num1 + num2)

// 文字列結合
console.log(strHello + strWorld)
console.log(num1 + str1) // ⚠️結合する際に､1つでも文字列があると､文字列として結合される

// =====================================================
// 条件分岐
// =====================================================

// if文
console.log(`num1: ${num1}`)
console.log(`num2: ${num2}`)

// 無駄な判定を行わない 良い例
if (num1 > num2) {
  console.log('判定1が行われた')
  console.log('num1はnum2より大きい')
} else if (num1 < num2) {
  console.log('判定2が行われた')
  console.log('num1はnum2より小さい')
}
// 無駄な判定を行う 悪い例
if (num1 > num2) {
  console.log('判定1が行われた')
  console.log('num1はnum2より大きい')
}
if (num1 < num2) {
  console.log('判定2が行われた')
  console.log('num1はnum2より小さい')
}

// =====================================================
// for文
// =====================================================
// 1+2+3+4+5+6+7+8+9+10
let sum: number = 0
for (let i = 1; i <= 10; i++) {
  sum += i
}
console.log(`1から10までの合計: ${sum}`)

// =====================================================
// 用意されている便利な関数
// =====================================================
// 数学系の関数
// 乗
console.log(Math.pow(2, 3)) // 2の3乗
// 平方根
console.log(Math.sqrt(9)) // 9の平方根
// 切り捨て
console.log(Math.floor(3.5)) // 3.5を切り捨て
// 切り上げ
console.log(Math.ceil(3.5)) // 3.5を切り上げ
// 四捨五入
console.log(Math.round(3.5)) // 3.5を四捨五入
// 乱数
console.log(Math.random()) // 0以上1未満の乱数
// 0から10までの乱数
console.log(Math.floor(Math.random() * 11)) // 11倍して小数点以下を切り捨てると､0から10までの乱数が得られる

// 文字列系の関数
// 文字列の長さ
console.log(strHello.length)
// 文字列の検索
console.log(strHello.indexOf('に')) // 一番左を0番目として､lが何番目にあるか
console.log(strHello.lastIndexOf('に')) // 一番右を0番目として､lが何番目にあるか
console.log(strHello.indexOf('H')) // // 見つからない場合-1番目となる
// 文字列の置換
console.log(strHello.replace('にち', 'nichi'))

// =====================================================
// 自分で関数を作る
// =====================================================
// 文章の中から検索キーワードが何回出現するかを返す関数
function countWord(text: string, word: string): number {
  let count: number = 0
  let position: number = text.indexOf(word)
  while (position !== -1) {
    count++
    position = text.indexOf(word, position + 1)
  }
  return count
}

const helloGoodbyeLyrics: string =
  "You say yes, I say no\nYou say stop and I say go go go\nOoh no\n\nYou say goodbye and I say hello\nHello, hello\nI don't know why you say goodbye, I say hello\nHello, hello\nI don't know why you say goodbye, I say hello\n\nI say high, you say low\nYou say why and I say I don't know\nOh no\n\nYou say goodbye and I say hello\n(Hello, goodbye, hello, goodbye) Hello, hello\n(Hello, goodbye) I don't know why you say goodbye, I say hello\n(Hello, goodbye, hello, goodbye) Hello, hello\n(Hello, goodbye) I don't know why you say goodbye, I say hello\n(Hello, goodbye)\n\nWhy why why why why why do you say goodbye?\nGoodbye, bye bye bye bye\nOh no\nYou say goodbye and I say hello\nHello, hello\nI don't know why you say goodbye, I say hello\nHello, hello\nI don't know why you say goodbye, I say hello\n\nYou say yes (I say yes)\nI say no (But I may mean no)\nYou say stop (I can stay)\nAnd I say go go go ('Till it's time to go)\nOh, oh no\n\nYou say goodbye and I say hello\nHello, hello\nI don't know why you say goodbye, I say hello\nHello, hello\nI don't know why you say goodbye, I say hello\nHello, hello\nI don't know why you say goodbye, I say hello, oh, oh\nHello\n\nHela, heba helloa\nHela, heba helloa, cha cha cha\nHela, heba helloa, woo!\nHela, heba helloa, hela!\nHela, heba helloa, cha cha cha\nHela, heba helloa, woo-hoo!\nHela, heba helloa, cha cha cha\nHela, heba helloa, cha cha cha"
console.log(countWord(helloGoodbyeLyrics, 'hello') + '回') // この歌詞にはhelloが何回出てくるか
