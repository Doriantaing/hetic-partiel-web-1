// Header Scroll


var header = document.querySelector('.row1');

document.body.addEventListener('wheel',function(event){
    if (event.deltaY > 0) {
        header.style.opacity = '0';
    } 
    else if(event.deltaY < 0) {
        header.style.opacity = '1';
    }
})



// Scroll To top

var backtoTop = document.querySelector('.top');


backtoTop.addEventListener('click',function(event){
     window.scrollTo({
         top: 0,
         behavior: 'smooth',
        });
})

