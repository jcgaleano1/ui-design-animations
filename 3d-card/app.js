//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animation event
container.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) /10;
    console.log(x);
    let y = (window.innerHeight / 2 - e.pageY) /10;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
});

//Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
   ///popout
   title.style.transform = "translateZ(70px)";
   title.style.fontSize = "2.5rem";
   sneaker.style.transform = "translateZ(70px) rotateZ(-25deg)";
   purchase.style.transform = "translateZ(70px)";
   description.style.transform = "translateZ(70px)";
   sizes.style.transform = "translateZ(70px)";
   purchase.style.fontSize = "1.4rem";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    title.style.fontSize = "2rem";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    purchase.style.fontSize = "1rem";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});