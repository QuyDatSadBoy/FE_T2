const input = document.querySelector("input");
const buttonSend = document.querySelector("#send");
const buttonClear = document.querySelector("#clear");
const buttonUp = document.querySelector("#up");
const buttonClearAll = document.querySelector("#clearAll");
const resultDiv = document.querySelector("#result");

buttonSend.addEventListener("click", () => {
  const name = input.name;
  const value = input.value;

  if(value) {
    localStorage.setItem(name, value);

    const email = localStorage.getItem("email");
    resultDiv.innerHTML = email;
  }
});

buttonClear.addEventListener("click", () => {
  localStorage.removeItem("email");
  resultDiv.innerHTML = "";
});

let count = 0;

buttonUp.addEventListener("click", () => {
  localStorage.setItem(`key${count}`, `value${count}`);
  count++;
});

buttonClearAll.addEventListener("click", () => {
  localStorage.clear();
});

// for(let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   const value = localStorage.getItem(key);
//   console.log(key, value);
// }



// sessionStorage.setItem("token", "sdfsdkfsdfassdfsdfs34534v435v34");