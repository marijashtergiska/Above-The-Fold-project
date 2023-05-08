document.addEventListener('DOMContentLoaded', function(){
window.onscroll=function(){
  if(window.scrollY>=50){
    document.querySelector('nav').classList.add('active');
  }
  else{
    document.querySelector('nav').classList.remove('active');
  }

}

})