import * as path from 'path'
import * as fs from 'fs'

/**
 * 数値配列をテキストファイルに出力する関数
 * @param arr 出力する数値配列
 */
export function exportArrayToFile(arr: number[], fileName: string): void {
  const content = arr.join('\n')
  const filePath = path.join(process.cwd(), '/export/', fileName)

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('ファイルの書き込み中にエラーが発生しました:', err)
    }
  })
}
