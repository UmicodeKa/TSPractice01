export {}
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  simpleSort,
  bubbleSort,
  bucketSort,
  quickSort,
  heapSort,
  javascriptSortFunction,
} from './sortAlgorithms'
import { exportArrayToFile } from './fileExport'

// 配列を生成
const count = 10000
const shuffledArray = generateShuffledArray(count)
exportArrayToFile(shuffledArray, 'shuffledArray.txt')

// ソート開始
console.time('Sort Timer')
const sortedArray = javascriptSortFunction(shuffledArray)
console.timeEnd('Sort Timer')

// 結果を出力
exportArrayToFile(sortedArray, 'sortedArray.txt')

/**
 * 指定された個数の要素を持つシャッフルされた配列を生成する
 * @param count 生成する配列の要素数
 * @returns シャッフルされた0からcount-1までの数値を含む配列
 */
function generateShuffledArray(count: number): number[] {
  // 0からcount-1までの数値を含む配列を生成
  const array: number[] = Array.from({ length: count }, (_, index) => index)

  // Fisher-Yatesアルゴリズムを使用してシャッフル
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
