/**Chuyển ảnh sang trái phải theo click or auto*/
const listImage = document.querySelector('.list_images');
const imgs = document.getElementsByTagName('img');



const btnLeft =document.querySelector('.btn-left');
const btnRight =document.querySelector('.btn-right');

const length =imgs.length;
//alert(length);
let current =0;


const handleChangeSlide =() =>{
    if(current == length-1){                                // case đến ảnh cuối cùng
        current=0;
        let width = imgs[0].offsetWidth;                    // lấy chiều dài của ảnh 
        listImage.style.transform =  `translateX(0px)`      // set lại vị trí ảnh ban đầu
    }else{
        current++
        let width = imgs[0].offsetWidth;   // lấy chiều dài của ảnh 
        //console.log(width); 75
        listImage.style.transform =  `translateX(${width * -1 *current}px)`
    }
}

setInterval(handleChangeSlide,4000)                                         // sau 4s tự động chuyển ảnh
let handleEventChangeSlide= setInterval(handleChangeSlide,4000)             // trường hợp ko để lẫn lộn auto chuyển và click


btnRight.addEventListener('click',()=> {                                    // khi action click
    //clearInterval(handleEventChangeSlide)                                 // trường hợp ko để lẫn lộn auto chuyển và click
    handleChangeSlide()
    //handleEventChangeSlide =setInterval(handleChangeSlide,4000)           // trường hợp ko để lẫn lộn auto chuyển và click
})

btnLeft.addEventListener('click',()=> {                                     // case đến ảnh đầu
    //clearInterval(handleEventChangeSlide)                                 // trường hợp ko để lẫn lộn auto chuyển và click

    if(current == 0){                                           
       current=length-1;
        let width = imgs[0].offsetWidth;                     
        listImage.style.transform =  `translateX(${width * -1 *current}px)`
    }else{
        current--
        let width = imgs[0].offsetWidth;   // lấy chiều dài của ảnh 
        listImage.style.transform =  `translateX(${width * -1 *current}px)`
    }
    //handleEventChangeSlide =setInterval(handleChangeSlide,4000)           // trường hợp ko để lẫn lộn auto chuyển và click

})

/**---------------------------------------------------------------------------------------------- */