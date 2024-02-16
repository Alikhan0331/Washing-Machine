
const animeItems = document.querySelectorAll('.anim');

if (animeItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animeItems.length; index++){
            const animeItem = animeItems[index];
            const animeItemHeight = animeItem.offsetHeight;
            const animeItemOffset = offset(animeItem).top;
            const animeStart = 4;

            let animeItemPoint = window.innerHeight - animeItemHeight / animeStart;
            if (animeItemHeight > window.innerHeight){
                animeItemPoint = window.innerHeight - window.innerHeight / animeStart;
            }

            if ((window.pageYOffset > animeItemOffset - animeItemPoint) && window.pageYOffset < (animeItemOffset + animeItemHeight)) {
                animeItem.classList.add('active');
            } else {
                if (!animeItem.classList.contains('anim-no')){
                    animeItem.classList.remove('active')
                }
            }

        }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollleft}
    }

    }
    setTimeout(() => {
        animOnScroll(); 
    }, 300);
}

const slaider_content = document.querySelectorAll(".slaider-content")
let i = 0
const prev = document.getElementsByClassName("btn-prev")
const next = document.getElementsByClassName("btn-next")
let i2 = i
prev[0].classList.add('none')
function slaider(i){
    if(0 < i < slaider_content.length){
        prev[0].classList.remove('none')
        next[0].classList.remove('none')
    }if(i == 0){
        prev[0].classList.add('none')
    }
    if(i == slaider_content.length-1){
        next[0].classList.add('none')
    }
    if( i > i2){
        if(i == 0){
            slaider_content[i].classList.remove("none")
        }
        else{
            slaider_content[i-1].classList.add("none")
            slaider_content[i].classList.remove("none")
        }
    }else {
        slaider_content[i].classList.remove("none")
        slaider_content[i+1].classList.add("none")
    }
    
    i2 = i;

}


prev[0].addEventListener("click",function(){
    i--;
    slaider(i);
})
next[0].addEventListener("click",function(){
    i++;
    slaider(i);
})

function nextSlide() {
    i++;
    if (i >= slaider_content.length) {
        slaider_content[i-1].classList.add("none")
        i = 0;

    }
    slaider(i);
  }
  
  // Используйте setInterval для автоматической прокрутки слайдов каждые 4 секунды
  setInterval(nextSlide, 10000)

const butup = document.querySelector('.button-up');

butup.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});

const burgermenu = document.querySelector('.hamburger-menu');
const ham_nav = document.querySelector('.hamburger-nav');

burgermenu.addEventListener("click", function(){
    ham_nav.classList.toggle("none");
});

const slid_width = document.querySelector('.slaider-wrapper'),
slid_line = document.querySelector('slaider-content');

function showslide(){
    slid_width = document.querySelector('.slaider-wrapper').offsetWidth;
    slid_line.style.width = slid_width + 'px';

}