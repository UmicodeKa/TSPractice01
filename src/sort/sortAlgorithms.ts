/**
 * シンプルソートアルゴリズム
 * @param arr ソートする配列
 * @returns ソートされた配列
 */
export function simpleSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        // 要素を交換
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

/**
 * バブルソートアルゴリズム
 * @param arr ソートする配列
 * @returns ソートされた配列
 */
export function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 要素を交換
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

/**
 * バケットソートアルゴリズム
 * @param arr ソートする配列
 * @param bucketSize バケットのサイズ（デフォルト値: 5）
 * @returns ソートされた配列
 */
export function bucketSort(arr: number[], bucketSize: number = 5): number[] {
  if (arr.length === 0) {
    return arr
  }

  // 配列の最小値と最大値を見つける
  const minValue = Math.min(...arr)
  const maxValue = Math.max(...arr)

  // バケットの数を計算
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets: number[][] = new Array(bucketCount).fill(null).map(() => [])

  // 要素をバケットに分配
  for (const num of arr) {
    const bucketIndex = Math.floor((num - minValue) / bucketSize)
    buckets[bucketIndex].push(num)
  }

  // 各バケットをソートし、結果を結合
  const sortedArray: number[] = []
  for (const bucket of buckets) {
    insertionSort(bucket)
    sortedArray.push(...bucket)
  }

  return sortedArray
}

/**
 * 挿入ソートアルゴリズム（バケットソート用の補助関数）
 * @param arr ソートする配列
 */
function insertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
}

/**
 * クイックソートアルゴリズム
 * @param arr ソートする配列
 * @returns ソートされた配列
 */
export function quickSort(arr: number[]): number[] {
  // 配列の要素が1つ以下の場合、そのまま返す
  if (arr.length <= 1) {
    return arr
  }

  // ピボットを配列の中央の要素に設定
  const pivot = arr[Math.floor(arr.length / 2)]
  const left: number[] = []
  const right: number[] = []
  const equal: number[] = []

  // 配列の要素をピボットと比較して3つの配列に分割
  for (const element of arr) {
    if (element < pivot) {
      left.push(element)
    } else if (element > pivot) {
      right.push(element)
    } else {
      equal.push(element)
    }
  }

  // 左右の配列
  return [...quickSort(left), ...equal, ...quickSort(right)]
}

/**
 * ヒープソートアルゴリズム
 * @param arr ソートする配列
 * @returns ソートされた配列
 */
export function heapSort(arr: number[]): number[] {
  const n = arr.length

  // ヒープを構築
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  // ヒープから要素を1つずつ取り出してソート
  for (let i = n - 1; i > 0; i--) {
    // ルート要素と末尾要素を交換
    ;[arr[0], arr[i]] = [arr[i], arr[0]]

    // ヒープサイズを減らしてヒープを再構築
    heapify(arr, i, 0)
  }

  return arr
}

/**
 * ヒープを構築する補助関数
 * @param arr 配列
 * @param n ヒープサイズ
 * @param i 現在のノードのインデックス
 */
function heapify(arr: number[], n: number, i: number): void {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, n, largest)
  }
}

/**
 * JavaScriptの組み込みソート関数を使用してソートを行う関数
 * @param arr ソートする数値配列
 * @returns ソートされた数値配列
 */
export function javascriptSortFunction(arr: number[]): number[] {
  return arr.sort((a, b) => a - b)
}
