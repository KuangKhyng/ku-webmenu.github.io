// THAY ĐỔI, HIỂN THỊ THÊM ẢNH CHI TIẾT MÓN ĂN

const bigImg = document.querySelector('.detail-img')
const smallImg = document.querySelectorAll('.detail-small-img')

smallImg.forEach((imgItem)=>{
    // console.log(imgItem);===điều khiển để click vào là hiện lên ảnh
    imgItem.addEventListener('click',function(){        
        bigImg.src=imgItem.src
    })
})

// -----------------------------------------------------------------------------
//                  BUY PRODUCT
const result = document.querySelector('#number-quality')
var resultNum= result.value
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const buyBtn=document.querySelector('.order')

btn1.addEventListener('click',function(){
    if(!isNaN(resultNum) && result.value>1){
        result.value --
    }
    console.log(result.value)
    return false;
})

result.onchange = function() {
    if(this.value==0){
        this.value = 1
    }
}
result.onkeypress=function(){
    if ( isNaN(this.value + String.fromCharCode(event.keyCode) )){
        return false;
    }
}
btn2.addEventListener('click',function(){
    if(!isNaN(resultNum)){
        result.value++
    }
    return false;
})


// ---------------------------------------------------------------------------------
//                          MENU TAB 
const menuTab = document.querySelector(".tab-list");
menuTab.addEventListener('click',function(e){
      if(e.target.classList.contains('tab-item')){
      const target = e.target.getAttribute("data-target")
      console.log(target);
      menuTab.querySelector(".active").classList.remove('active');
      e.target.classList.add('active');

      const tab = document.querySelector('.product-tap')
      tab.querySelector(".tab-content.active").classList.remove('active');
      tab.querySelector(target).classList.add('active');
      }
  })


// ---------------------------------------------------------------------------------
const wrapper = document.querySelector('.wrapper');

const modal = document.querySelector('.modal-container')
