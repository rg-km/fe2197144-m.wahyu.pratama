/** Format nama user menjadi "John - john@example.com - Unemployed",
 *  dan akses data user dengan teknik destrucuring assignment
 *  gunakan default value ketika atribut tidak ditemukan
 */

const format = (user) => {
  // TODO: answer here
  const { name , email = "unemployed", job = "unemployed" } = user;
  return `${name} - ${email} - Unemployed`;
};

console.log(format({ name: "John", email: "john@example.com" }));

module.exports = format