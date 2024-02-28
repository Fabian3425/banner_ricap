var imagesCarousel = document.getElementsByClassName('item');
var itemsId = Array.from(imagesCarousel);
var sectionDeg = 360/itemsId.length;              // Seccionar el círculo imaginario en un número igual al número de elementos del array
var radianSectionDeg = sectionDeg*Math.PI*2/360;  // Transformar de grados a radianes
var radiusLength = 250;                           // Distancia entre el centro del cítuclo y el elemento  

//Posicion de cada item
for(var i=0; i<itemsId.length; i++){
  itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px'; //1.5708 radianes son 90 grados
  itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
  checkPosition();
}

// Función usada para establecer la nueva posición de los elementos
function makeATurn(){
  for(var i=0; i<itemsId.length; i++){
      itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px';
      itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
    }
    checkPosition();
}

// Función para verificar la posición y anadir clase personalizada
function checkPosition() {
  for (var i = 0; i < itemsId.length; i++) {
    // Remover todas las clases de posición primero
    for (var j = 1; j <= 15; j++) {
      itemsId[i].classList.remove('posicion-' + j);
    }

    // Calcular la posición y agregar la clase correspondiente
    var posicion = (i + itemsId.length - 1) % itemsId.length + 1;
    itemsId[i].classList.add('posicion-' + posicion);
  }
}

//Mover los elementos cambiando la posición en el array3
function turnRight(){
  var holder = itemsId.pop();
  itemsId.unshift(holder);
  makeATurn();
  // rotateItem();
}

function turnLeft(){
    var holder = itemsId.shift();
    itemsId.push(holder);
    makeATurn();
}
