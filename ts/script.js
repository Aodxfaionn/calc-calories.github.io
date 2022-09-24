const btnThree = document.querySelector(".step-three__button");
const sex = document.querySelectorAll('input[name="sex"]');
const activity = document.querySelectorAll('input[name=activity]');
const age = document.querySelector('input[name="age"]');
const height = document.querySelector('input[name="height"]');
const weight = document.querySelector('input[name="weight"]');
const result = document.querySelector(".result__number");
let sum = 0;

 const sumCcal = () => {
for (let who of sex) {
		if (who.checked) {
            let sex = who.value;
            console.log(sex)
	}

    for (let activ of activity) {
		if (activ.checked) {
            let activity = activ.value;
            console.log(activity)
	}
    }
 }

}

/* let sum = 
   return result.innerHTML = sum + 'калорий'
} */

btnThree.addEventListener("click", sumCcal);


/* let slides = Array.from(document.querySelectorAll(".slide"));
let buttons = Array.from(document.querySelectorAll(".ready-button"));

const clearActiveClass = (element, className = "is-active") => {
  element.find((item) => item.className.remove("${ className }"));
};

const addActiveClass = (element, className = "is-active") => {
  element.find((item) => item.className.add("${ className }"));
};

const clickBtn = (item, index) => {
  clearActiveClass(slides);
  addActiveClass(slides);
};

for (button of buttons) {
  button.addEventListener("click", clickBtn);
}
 let btnOne = document.querySelector(".step-one__button");
let btnTwo = document.querySelector(".step-two__button");
let btnThree = document.querySelector(".step-three__button");
let btnFour = document.querySelector(".step-four__button");

btnOne.addEventListener('click', function() {
 for (slide of slides) {
    slide.classList.toggle('none')
    console.log(slide)
 }
}) */

