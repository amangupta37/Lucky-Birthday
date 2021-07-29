const InputBirthday = document.getElementById("userBirthday");
const InputLuckyNumber = document.getElementById("userLuckyNumber");
const Check = document.getElementById("btn");
const dispalyResult = document.getElementById("result-wrapper");
const resultBackground = document.getElementById("resultcontainer");
const resultInText = document.getElementById("resultshow");
const closeResult = document.getElementById("close");
const addBg = document.getElementById("result-wrapper");
let userDOBsum;
let userLuckyNumber;
const checkLucky = (DOBsum, LuckyNum) => {
  if (DOBsum % LuckyNum === 0) {
    console.log("lucky");
    resultInText.innerHTML = "Your Birthday is A Lucky Number !!!";

    resultBackground.style.backgroundImage =
      "url('https://media.giphy.com/media/W2Fbe4nWDJIWvoubaR/giphy.gif')";
    addBg.style.backgroundImage =
      "url('https://media.giphy.com/media/PmSQHu3vBiWG5CbUZh/giphy.gif')";
  } else {
    resultInText.innerHTML = "Your Birthday is Not A Lucky Number !!!";
    resultBackground.style.backgroundImage =
      "url('https://media.giphy.com/media/lSzQjkthGS1gc/giphy.gif')";
    addBg.style.backgroundImage =
      "url('https://media.giphy.com/media/lSzQjkthGS1gc/giphy.gif')";
  }
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

  userDOBsum = birthdaySum;
};

closeResult.addEventListener("click", () => {
  dispalyResult.style.display = "none";
});

Check.addEventListener("click", () => {
  if (userDOBsum >= 0 && userLuckyNumber >= 0) {
    dispalyResult.style.display = "grid";
    checkLucky(userDOBsum, userLuckyNumber);
  } else {
    alert("Enter valid number");
  }
});

InputLuckyNumber.addEventListener("change", (e) => {
  const userLuckyNum = parseInt(e.target.value);
  userLuckyNumber = userLuckyNum;
});

InputBirthday.addEventListener("change", (e) => {
  const userInput = e.target.value;
  const filterInput = userInput.replace(/-/g, "");
  const toInteger = parseInt(filterInput);
  const userBirthday = toInteger;
  toDigit(userBirthday);
});
