const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const color = ['yellow','red','green','#3b59'];

colorBtn.addEventListener('click',changeColor);
function changeColor (){
    bodyBcg.style.backgroundColor ='blue';
    
}