/**
 * Pada soal kali ini disediakan class `Person` dimana kalian diminta untuk melengkapi serta membuat beberapa hal dibawah ini:
 * - Class Person yang memiliki properti name, age, dan job
 * - Buatlah getter untuk masing masing Properti diatas dengan format `getName` untuk mendapatkan nama, `getAge` untuk mendapatkan usia, dan `getJob` untuk mendapatkan pekerjaan dari class Person.
 * - Buatlah setter untuk masing masing Properti diatas dengan format `setName` untuk mengubah nilai nama, `setAge` untuk mengubah nilai usia, dan `setJob` untuk mengubah nilai pekerjaan dari class Person
 */

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  
  // TODO: answer here
  getName () {
    return this.name;
  }
  getAge () {
    return this.age;
  }
  getJob () {
    return this.job;
  }
  setName (name) {  // setter
    this.name = name;
  }
  setAge (age) {  // setter 
    this.age = age;
  }
  setJob (job) {  // setter
    this.job = job;
  }
}
const person = new Person('Wahyu', 20, 'Frontend Developer');
console.log(person.getName()); // Wahyu
console.log(person.getAge()); // 20
console.log(person.getJob()); // Frontend Developer

p.setName('Wahyu Pratama');
p.setAge(21);
p.setJob('Frontend Developer');
console.log(p.getName()); // Wahyu Pratama
console.log(p.getAge()); // 21
console.log(p.getJob()); // Frontend Developer


module.exports = Person