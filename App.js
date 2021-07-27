const InputBirthday = document.getElementById("userBirthday");
const InputLuckyNumber = document.getElementById("userLuckyNumber");

const checkLucky = (userBirthdaySum) => {
  InputLuckyNumber.addEventListener("change", (e) => {
    const userLuckyNum = parseInt(e.target.value);

    if (userLuckyNum === userBirthdaySum && userLuckyNum !== "") {
      console.log("lucky");
    } else {
      console.log("not lucky");
    }
  });
};

const toDigit = (userBirthday) => {
  let num = userBirthday;
  let birthdaySum = 0;
  while (num > 0) {
    num = Math.floor(num);
    let holdBirthday = num % 10;
    birthdaySum += holdBirthday;
    num = num / 10;
  }
  checkLucky(birthdaySum);
};

InputBirthday.addEventListener("change", (e) => {
  const userInput = e.target.value;
  const filterInput = userInput.replace(/-/g, "");
  const toInteger = parseInt(filterInput);
  const userBirthday = toInteger;
  toDigit(userBirthday);
});
