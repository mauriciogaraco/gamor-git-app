
      let botFotos = document.getElementById("fotos");
      let over = document.getElementById("over");
      let car = document.getElementById("car");
      let closeCar = document.getElementById("close-car");
      let slides = document.getElementsByClassName("slide");
      let images = document.getElementsByClassName("imgCar");
      let arrowR = document.getElementById("arrowR");
      let arrowL = document.getElementById("arrowL");
      let counter = 0;
      
       

      function loadSlide(){
         car.style.height = '90vh';
         let heightCar = car.offsetHeight;
        
         
   

           for (i=0; i < images.length; i++) {
                if (images[i].offsetHeight < heightCar) {
                   heightCar = images[i].offsetHeight;
              }
          }
       car.style.height = heightCar + 'px';

          for(i=0 ;i < slides.length; i++){
             slides[i].style.left = car.offsetWidth * -i + 'px';
        }
      } 

   /*abrir el carrusel*/ 
  function openModal(){
     over.style.display = 'block';
     car.style.display = 'block';
     loadSlide();
   }

    /* cerrar carrousel*/


function closeModal(){
     over.style.display = 'none';
      car.style.display = 'none';
}



function nextSlide(){
   updateArrow(1);
   for(i=0 ;i < slides.length; i++){
      slides[i].style.left =  slides[i].offsetLeft + car.offsetWidth + 'px';
   }

}

function prevSlide(){
updateArrow(-1);
   for(i=0 ;i < slides.length; i++){
      slides[i].style.left =  slides[i].offsetLeft - car.offsetWidth + 'px';
      
   }
}

function updateArrow(e){
   counter += e;
if(counter !== 0){
   arrowL.style.display = 'flex';
 } else{
      arrowL.style.display = 'none';
   }
   if(counter === slides.length - 1){
      arrowR.style.display = 'none';
   }
   else {
      arrowR.style.display = 'flex';
   }
   arrowR.style.pointerEvents = 'none';
   arrowL.style.pointerEvents = 'none';
   setTimeout(()=>{
      arrowR.style.pointerEvents = 'auto';
      arrowL.style.pointerEvents = 'auto';
   }, 900)
}
