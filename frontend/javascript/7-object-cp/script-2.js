// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
  read() {
    this.a = prompt("Masukkan nilai a");
    this.b = prompt("Masukkan nilai b");
  },
  sum() {
    Number(this.a + this.b);
    return this.a + this.b;

  },
  substract() {
    return this.a - this.b;
  },
  multiply() {
    return this.a * this.b;
  },
  division() { 
    return this.a / this.b;
  }
  // Tulis kode di sini
  // TODO: answer here
};
  
calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());