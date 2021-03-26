let calificacion= [];
let califmayor= [];
let suma=0;
let division;


for(let e=0; e<10;  e++){
 calificacion[e]= prompt('ingresa una calificación');
  
  
}
  for(let e=0; e<10; e++){
    suma= suma + parseInt(calificacion[e]);
    
   division=suma/10;
  }
for(let e = 0; e<10; e++){
  if(calificacion[e] > division)
    califmayor.push(calificacion[e]);
}

document.write('El promedio de las calificaciones es: ' + division + '<br>' + 'y las calificaciones mayores al promedio son: ' + califmayor);
