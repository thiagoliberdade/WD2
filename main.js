


//////// CICLO DE NOMES ///////

// Definindo a lista de palavras
const myArray = ["GENOCIDA ", "CORRUPTO ", "NEGACIONISTA ", "IGNORANTE ", "PACOVO ", "BOSTANARO ", "MENTIROSO ", "PALERMA ", "IDIOTA ", "DESPREPARADO ", "OMISSO ", "CRETINO ", "MILICIANO ", "FACISTA ", "TORTURADOR ", "GOLPISTA ", "CRIMINOSO " ];

// Adicionando um random à lista
let rand = Math.floor(Math.random() * myArray.length);

// Adicionando um random numerico para as palavras
let RandomN = (9,20);

// Função do Random de números
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// tentativa de criar um objeto (fail) porque id é único e getElementClassName não funciona
//const arrayID = [{id: 0, name: "bozoAdj"}, {id: 1, name: "bozoAdj2"} ]

// Função do Random do tamanho da frase
function Random(){
    document.getElementById('bozoAdj').innerHTML = myArray[rand].repeat(RandomN);
    document.getElementById('bozoAdj2').innerHTML = myArray[rand].repeat(RandomN+RandomN+RandomN);
    document.getElementById('bozoAdj3').innerHTML = myArray[rand].repeat(RandomN+RandomN);
    document.getElementById('bozoAdj4').innerHTML = myArray[rand].repeat(RandomN+RandomN+RandomN);
    document.getElementById('bozoAdj5').innerHTML = myArray[rand].repeat(RandomN);
    document.getElementById('bozoAdj6').innerHTML = myArray[rand].repeat(RandomN+RandomN);
    document.getElementById('bozoAdj7').innerHTML = myArray[rand].repeat(RandomN+RandomN+RandomN);
    document.getElementById('bozoAdj8').innerHTML = myArray[rand].repeat(RandomN+RandomN);
    document.getElementById('bozoAdj9').innerHTML = myArray[rand].repeat(RandomN+RandomN+RandomN);
   
}
Random();


//////// MAPEANDO O CURSOR NOVO ///////

//identificar o cursor por mim definido
let cursor = document.querySelector('.cursor');
let cursor_dot = document.querySelector('.cursor_dot');

//cria-se um evento
window.addEventListener('mousemove', (rato)=> {
    cursor.style.left = rato.pageX + 'px';
    cursor.style.top = rato.pageY + 'px' ;
    cursor_dot.style.left = rato.pageX + 'px';
    cursor_dot.style.top = rato.pageY + 'px' ;
   
})


//////// MUDANDO IMAGEM E BACKGROUND ///////

// função muda imagem e background
function clickBozo() {

    // variáveis de imagem e cor de fundo
    let image = document.getElementById('imgsbozo');
    let canva = document.getElementById('canvas');
    let text = document.getElementById('mudatexto');

    // se a imagem for "boca" E se a cor de fundo for "red" 
  if (image.src.match("/img/bozoboca.png") && canva.style.backgroundColor === 'red' && text.innerHTML === 'TRANSPARENCY') {
      //ao clique muda imagem para "nariz";
      image.src = "/img/bozonariz.png";

      //e muda cor de fundo para "chartreuse"
      canva.style.backgroundColor = 'chartreuse';
      text.innerHTML = 'PRIVACY';
      
  }
  else {
      // e vice versa
      image.src = "/img/bozoboca.png";
      canva.style.backgroundColor = 'red';
      text.innerHTML = 'TRANSPARENCY';
      
  }
}



//////// CÓDIGO MORTO ///////


/*

function bozoAdj() {
    const myNodelist = document.querySelectorAll("p");
    for (let i = 0; i < myNodelist.length; i++) {
      myNodelist[i].innerHTML = "teste";
    }
  }

*/

//let str = "genocida"; 

// manipulação DOM: seleciona id="textgenocida" e insere texto da variável str, on repeat 600x
//document.getElementById("nameRepeat").innerHTML = str.repeat(12);



/*
const myAdj = document.querySelectorAll("p");

document.getElementById("pAdd").innerHTML = myAdj[0].innerHTML;

/*

let bozoAdj = new Array();

bozoAdj[0] = {"name": "GENOCIDA"};
bozoAdj[1] = {"name": "CORRUPTO"};
bozoAdj[2] = {"name": "IGNORANTE"};
bozoAdj[3] = {"name": "NEGACIONISTA"};

//console.log (bozoAdj);
//for(let i = 0; i < 4; i++) {
  //  console.log("olá; "+ i);}
function AdjClick() {
d1 = document.getElementsByTagName("p");

document.getElementById('clickBozo').innerHTML = 'NKNLKNLK';


}
*/

/*
var x = document.getElementsByID("imgsbozo");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementsByID("p").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementsByID("p").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementsByID("p").innerHTML += "Moused out!<br>";
}


// TEXTURE BACKGROUND
//let str = "genocida"; 

// manipulação DOM: seleciona id="textgenocida" e insere texto da variável str, on repeat 600x
//document.getElementById("nameRepeat").innerHTML = str.repeat(12);


*/

/*
  // MOUSEOVER IMAGES
  let img = document.getElementById("imgsbozo");

  function bozo1NOEYES()
  {
      imgsbozo.src="/img/bozonarizRed.png";
  }
  
  function bozo1EYES()
  {
      imgsbozo.src="/img/bozonariz.png";
  }
  */
  


/*
$('imgsbozo').mouseenter(function(rato) {

    $('.cursor-dot').addClass('cursor-dot--hide');
    $('.cursor-text').addClass('cursor-text--anim');
    $('.follower-circle').addClass('follower-circle--scale');
  
  });


  $('imgsbozo').mouseenter(function(rato) {

    $('.cursor-dot').addClass('cursor-dot--hide');
    $('.cursor-text').addClass('cursor-text--anim');
    $('.follower-circle').addClass('follower-circle--scale');
  
  });
  
  $('imgsbozo').mouseleave(function(rato) {
  
    $('.cursor-dot').removeClass('cursor-dot--hide');
    $('.cursor-text').removeClass('cursor-text--anim');
    $('.follower-circle').removeClass('follower-circle--scale');
  
  });
  
  $(document).on('mousemove', function(rato) {
    
    $('.cursor, .follower').css({
      "transform": "translate3d(" + (rato.clientX) + "px, " + (rato.clientY) + "px, 0px)"
    });
    
  });
  
 */