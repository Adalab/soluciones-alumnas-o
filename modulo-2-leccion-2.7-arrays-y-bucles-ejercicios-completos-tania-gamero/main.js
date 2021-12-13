'use strict';
//Los console log están todos comentados, descomentar para comprobar los resultados.
//Ejercicio 1
const movies = ['Your name','The nightmare before christmas','Zootopia'];
movies[3] = 'Harry Potter';
//console.log(movies);

//Ejercicio 2
for (let i = 0; i < 11; i++) {
   // console.log('Voy por la vuelta ' + i);
  }

//Ejercicio 3
let acc = 0;
for (let i = 0; i < 11; i++){
    acc += 2;
}
//console.log(acc);

//Ejercicio 4

const moonYears = [2017];
for( let i = 0; i < 15; i++ ){
    moonYears[i+1] = moonYears[i]+3;
}
console.log(moonYears);


//Ejercicio 5

const numbers = [ 1, 4, 6, 8, 3];
let acc2 = 0;

for( let num = 0; num < numbers.length; num++){
    acc2 += numbers[num];
    //console.log(acc2);
}
//Ejercicio 6
const favouriteMovies = [];
const btn = document.querySelector('.btn');

btn.addEventListener('click', btnHandler);

function btnHandler(event){
    event.preventDefault();
    favouriteMovies[0] = document.getElementById('favouriteMovie1').value;
    favouriteMovies[1] = document.getElementById('favouriteMovie2').value;
    for (const movie of favouriteMovies){
        console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`)
    }
}


//Ejercicio 7

const adalabers = [
    {
        name : 'Maria',
        age : 29,
        job : 'diseñadora'
    },
    {
        name : 'Lucía',
        age : 31 ,
        job : 'ingeniera química'
    },
    {
        name : 'Susana',
        age : 34,
        job : 'periodista'
    },
    {
        name : 'Rocío',
        age : 25,
        job : 'actriz'
    },
    {
        name : 'Inmaculada',
        age : 21,
        job : 'diseñadora'
    }
]

function countAdalabers (adalabersList){
    console.log(`Hay ${adalabersList.length} adalabers en esta promoción`);
}
//countAdalabers(adalabers);
function averageAge(adalabersList){
    let adalabersTotalAge = 0;
    for (const adalaber of adalabersList){   
        adalabersTotalAge += adalaber.age;
    }
    return adalabersTotalAge/adalabersList.length;
}
//console.log(averageAge(adalabers));

function theYoungest(adalabersList){
    let youngest;
    let lastAdalaberAge = adalabersList[0].age;
    for (const adalaber of adalabersList){
        if (adalaber.age < lastAdalaberAge){  
            youngest = adalaber.name;
        }
        adalaber.age = lastAdalaberAge;
    }
    return youngest;
}

//console.log(theYoungest(adalabers));

//ejercicio 8
//Para este ejercicio he hecho dos variantes, la primera utiliza un for normal, la segunda utiliza un método de Arrays que se llama forEach, su funcionamiento es muy similar al for normal. Ambos funcionan.
const alarmButtons =document.querySelectorAll('.js-btn');


 for ( let button = 0; button < alarmButtons.length ; button ++ ) {
     alarmButtons[button].addEventListener('click', ( ) => {
        document.body.classList.toggle('red');
         });

 }
/*

alarmButtons.forEach( (button)=>{
    button.addEventListener('click', ( ) => {
      document.body.classList.toggle('red');
       });

})
*/
//ejercicio 10 

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];

  for (let item = 0; item < items.length; item++){
     if(item <3 ){
     console.log(`El dato ${items[item]} está en la posición ${item} y es de tipo   ${typeof(items[item])} ".
     `)
     }else{
        console.log(`El dato ${items[item].mother}, ${items[item].father} está en la posición ${item} y es de tipo   ${typeof(items[item])} ".
        `)
   
     }
  } 

