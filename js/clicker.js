let Img = document.querySelector("img");
let body = document.querySelector("body");
Img.addEventListener("click", move)
let inum;
//alert(inum)
let XCord, YCord;
function move(){
    inum = (Math.random())*100;
    XCord = Math.round((Math.random())*545);
    YCord = Math.round((Math.random())*554);
    BgCol = Math.round(Math.random()*1000000)
    //alert(BgCol)

    if(inum < 33){
        Img.src="img/troll.png"
    }else if(inum < 66){
        Img.src="img/boy.png"
    }else{
        Img.src="img/frog.jpg"
    }

    Img.style.top=`${YCord}px`
    Img.style.left=`${XCord}px`

    body.style.background=`#${BgCol}`
    document.querySelector("h1").style.display="none";
}