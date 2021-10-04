'use strict';
function calcAge(birthyear) {
  const age = 2021 - birthyear;
  function printAge() {
    const output = `${firstName}You are ${age} born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      const str = `${firstName} you are a millenial`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3));
  }
  printAge();
  return age;
}
const firstName = 'pranav';
calcAge(1985);
