// Diberikan array integer nums dan integer val, hapus semua kemunculan val di nums. Urutan relatif elemen dapat diubah.
// Jangan mengalokasikan ruang ekstra untuk array lain.
// Kembalikan jumlah elemen dari array yang tersisa.
//
// Contoh 1
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Fungsi harus mengembalikan nilai 2, karena elemen dengan nilai 3 dihapus
//
// Contoh 2
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,3,0,4,_,_,_]
// Fungsi harus mengembalikan nilai 2, setelah elemen 2 dihapus, maka sisanya 0, 0, 1, 3, and 4.

var removeElement = function(nums, val) {
  // Tulis kode di sini
  // TODO: answer here
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      result++;
    }
    else{
      nums[i] = '_';
    }
  }
  
  return result +', nums = '+ nums;
};

console.log(removeElement([3,2,2,3], 3)); 
console.log(removeElement([0,1,2,2,3,0,4,2], 2));