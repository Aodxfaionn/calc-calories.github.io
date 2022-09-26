/*Реализация калькулятора*/
const btnThree = document.querySelector(".step-three__button");
const result = document.querySelector(".result__number");

const sumCcal = () => {
  const sex = Number(document.querySelector('input[name="sex"]:checked').value);
  const activity = Number(
    document.querySelector('input[name="activity"]:checked').value
  );
  const age = Number(document.querySelector('input[name="age"]').value);
  const height = Number(document.querySelector('input[name="height"]').value);
  const weight = Number(document.querySelector('input[name="weight"]').value);
  let sum = 0;

  if (sex === 1) {
    sum = Math.round(
      (9.99 * weight + 6.25 * height - 4.92 * age + 5) * activity
    );
  } else if (sex === 2) {
    sum = Math.round(
      (9.99 * weight + 6.25 * height - 4.92 * age - 161) * activity
    );
  }
  return (result.innerHTML = `Универсальная норма - ${sum} ккал`);
};

btnThree.addEventListener("click", sumCcal);

/*Реализация переключателя слайдов*/

const buttons = document.querySelectorAll(".ready-button");
const slideOne = document.querySelector(".step-one");

const clickBtn = () => {
  let slideActiv = document.querySelector(".is-active");
  let newActiv = document.querySelector(".is-active").nextElementSibling;
  if (newActiv == null) {
    clearClass(slideActiv);
    addClass(slideOne);
  } else {
    addClass(newActiv);
    clearClass(slideActiv);
  }
};

const clearClass = (elem) => {
  elem.classList.remove("is-active");
};

const addClass = (elem) => {
  elem.classList.add("is-active");
};

for (button of buttons) {
  button.addEventListener("click", clickBtn);
}
