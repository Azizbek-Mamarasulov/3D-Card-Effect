if(window.innerHeight < 1250 || window.innerWidth < 1250){
    alert('error');
}

// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  const xAxies = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxies = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxies}deg) rotateX(${yAxies}deg)`;

  // Popout
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  description.style.transform = 'translateZ(125px)';
  sizes.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(75px)';
});

// Animate In
container.addEventListener("mouseenter", (e) => {
    card.classList.remove('card-transition');
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
    card.classList.add('card-transition')
    card.style.transform = "rotateX(0deg) rotateY(0deg)";

    // Popback
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0) rotateZ(0deg)';
    description.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
});
