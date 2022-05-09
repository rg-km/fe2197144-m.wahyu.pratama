/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  const max = numbers.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  } , 0);
  return max;
};

module.exports = maxFromArray