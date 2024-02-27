var htmlCollection = document.getElementsByClassName('item');
var image = document.getElementsByClassName('imagen-persona');
var images = Array.from(image);
var itemsId = Array.from(htmlCollection);
var sectionDeg = 360/itemsId.length;//24              // Seccionar el círculo imaginario en un número igual al número de elementos del array
var radianSectionDeg = sectionDeg*Math.PI*2/360;  // Transformar de grados a radianes
var radiusLength = 250;                           // Distancia entre el centro del cítuclo y el elemento  

//Posicion de cada item
for(var i=0; i<itemsId.length; i++){
  // var angle = sectionDeg * i - 90;
  itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px'; //1.5708 radianes son 90 grados
  itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
  // itemsId[i].style.transform = 'rotate(' + angle + 'deg)';
  // var angle = sectionDeg * i - 90; // Ajuste para que la primera imagen comience en la parte superior
  // var x = radiusLength * Math.cos(angle * Math.PI / 180);
  // var y = radiusLength * Math.sin(angle * Math.PI / 180);

  itemsId[i].style.top = y + 'px';
  itemsId[i].style.left = x + 'px';
  // itemsId[i].style.transform = 'rotate(' + angle + 'deg)';
}

// for(var i=0; i<images.length; i++){
//   var angle = sectionDeg * i - 180; // Ajuste para que la primera imagen comience en la parte superior
//   images[i].style.transform = 'rotate(' + angle + 'deg)';
// }

// Función usada para establecer la nueva posición de los elementos
function makeATurn(){
  for(var i=0; i<itemsId.length; i++){
 
    itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px';
    itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';

  
    }
}
function rotateItem(){
  for(var i = 0; i<itemsId.length; i++){
    itemsId[i].style.transform = 'rotate(45deg)';
  }
}

//Mover los elementos cambiando la posición en el array3
function turnRight(){
  var holder = itemsId.pop();
  itemsId.unshift(holder);
  makeATurn();
  rotateItem();
}

function turnLeft(){
    var holder = itemsId.shift();
    itemsId.push(holder);
    makeATurn();
}
