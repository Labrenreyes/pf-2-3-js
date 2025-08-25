export function fizzbuzz(){
  //tu código va aqui
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Llamamos la función para que se ejecute al correr el archivo
fizzbuzz();

module.exports = fizzbuzz;
}
