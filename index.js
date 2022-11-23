document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("value").value;
  if (!inputValue) {
    return;
  }

  if (inputValue >= 100) {
    document.getElementById("result").innerHTML =
      "Please input a number less than 100";
    return;
  }

  const randomNumber = randomNumberGenarator();
  if (Number(inputValue) === randomNumber) {
    document.getElementById(
      "result"
    ).innerHTML = `You guessed it right, the number is ${randomNumber}`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `You failed, the number is ${randomNumber}`;
    if (Number(inputValue) + 10 > randomNumber) {
      document.getElementById("comment").innerHTML = "A little high";
    } else if (Number(inputValue) + 10 < randomNumber) {
      document.getElementById("comment").innerHTML = "A little low";
    }
  }
};

const randomNumberGenarator = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};
