const elements = document.querySelectorAll('.reveal-animation');

for (const item of elements) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        const threshold = item.offsetTop - window.innerHeight * 0.8;
        if (y >= threshold) {
            item.classList.add('show');
        }
    });
}
let menu = document.getElementById("nav");

let a = 1;

let burgerMenu = document.getElementById("burgerMenu");
burgerMenu.addEventListener("click", appearBurgerMenu);



function appearBurgerMenu(){
    a++;
    if(a %2 === 0){
      menu.style.cssText=`
      margin-top:0vh;
      transition:0.4s;
      `;
      burgerMenu.src="img/cross.svg";
    }else{
      menu.style.cssText=`
      margin-top:-100vh;
      transition:0.4s;
      `;
      burgerMenu.src="img/menu.svg";
    }

    
}
function close_window(){
  document.querySelector(".settings").style.display="none";
}
function sett(){
  document.querySelector(".settings").style.display="flex";
}
let container = document.querySelector(".container");
let paragraphs = document.querySelectorAll("p, h1, h2, a, h3, label, span");

function change_pers(){
  let color = font_color.value;
 
  container.style.cssText=`
  color:${color};
  `
  for (const item of paragraphs) {
    item.style.color=`${color}`
  }
  let Font = font.value;
  
  if(Font == "roboto"){
    for (const item of paragraphs) {
      item.style.fontFamily="'Roboto Mono', monospace"
    }
  }else if(Font == "oswald"){
    for (const item of paragraphs) {
      item.style.fontFamily="'Oswald', sans-serif"
    }
  }else if(Font == "raleway"){
    for (const item of paragraphs) {
      item.style.fontFamily="'Raleway', sans-serif"
    }
  }else if(Font == "kanit"){
    for (const item of paragraphs) {
      item.style.fontFamily="'Kanit', sans-serif"
    }
  }else if(Font == "flow"){
    for (const item of paragraphs) {
      item.style.fontFamily="'Flow Circular', cursive"
    }
  }
  let fontSize = font_size.value;
  for (const item of paragraphs) {
    item.style.fontSize=`${fontSize}`;
  }
}
let Cookies = document.querySelector(".cookies"); 
function closeCookies(){
  Cookies.style.marginBottom="-50%";
}


let upButton = document.querySelector(".up_button");
window.addEventListener("scroll", function(){
  if(window.pageYOffset > 300){
    upButton.style.display="block";
  }else{
    upButton.style.display="none";
  }
})

upButton.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

let wish1 = ["Гарного тобі ","Чудового тобі ","Милого тобі ","Веселого тобі ","Розважливого тобі ","Чарівного тобі ","Світлого тобі ","Яскравого тобі ","Сонячного тобі ","Продуктивного тобі ",];
let wish2 = ["дня","ранку","вечора","обіду","свята","Дня народження","сніданку","робочого дня","відпочику","старту",];
let wish3 = [", дорогий(а)",", любий(а)",", король(ева)",", спортсмене ",", програмісте",", працівник",", друже",", подруго",", любий",", люба",];

function getFuture(){
  w1 = wish1[Math.round(Math.random()*10)];
  w2 = wish2[Math.round(Math.random()*10)];
  w3 = wish3[Math.round(Math.random()*10)];
  let massege = w1 + w2 + w3;
  alert(massege);
}
function sendEmeil() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sbulbuk@gmail.com",
    Password: "sbulbuk12345",
    To: 'obulbuk07@gmail.com',
    From: document.getElementById("Email").value,
    Subject: "Portfolio messege",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );
}

