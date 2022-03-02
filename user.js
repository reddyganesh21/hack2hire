const select = document.querySelector(".select");
const price = document.querySelector(".price");

select.onchange = function () {
  if (this.value === "Market") {
    price.disabled = true;
  } else {
    price.disabled = false;
  }
};

// console.log(y);
