let max1 = 0;
let max2 = 0;

for (let i = 0; i < Infinity; i++) {
  let input = prompt("Iltimos, son kiriting (stop uchun 'stop' yozing):");

  if (input.toLowerCase() == "stop") {
    break;
  }

  if (!isNaN(input)) {
    if (input > max1) {
      max2 = max1;
      max1 = input;
    } else if (input > max2) {
      max2 = input;
    }
  }
  
}
console.log(max1  + ', ' + max2);