const thanks = ['Guadalupe', 'Ollie', 'Aki' ];

function writeCards(thanks) {
let birthday = []

  for (let i = 0; i < thanks.length; i++) {
    birthday.push(`Thank you, ${thanks[i]}, for the wonderful surprise gift!`);
console.log(birthday);
  }

  return birthday;
}

writeCards(thanks);

function countDown(number) {
while (0 <= number) {
  console.log(number--);
}
}