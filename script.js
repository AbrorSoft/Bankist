'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navItems = document.querySelectorAll('.nav__item');
const nav =  document.querySelector('.nav')
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(item => item.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth' });
});



document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
const tabs = document.querySelectorAll('.operations__tab ');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active')); // we are fist removing all actives class and adding next line
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  // Active contetnet area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});
  const handleHover = (e, opacity)=>{
    if(e.target.classList.contains('nav__link')){
      const link = e.target
      const siblings = link.closest('.nav').querySelectorAll('.nav__link')
      const logo = link.closest('.nav').querySelector("img")
      siblings.forEach(el => {
        if(el !== link) el.style.opacity = opacity;
      });
      logo.style.opacity = opacity;
    }
  }
  nav.addEventListener('mouseover', function(e){
    handleHover(e, 0.5)
  });
  nav.addEventListener('mouseout', function(e){
    handleHover(e, 1)

  });

  const initialCoords = section1.getBoundingClientRect()



const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allBtn = document.getElementsByTagName('button');
const allBtn1 = document.getElementsByClassName('btn');


const message = document.createElement('div');
message.style.width = 200;
message.classList.add('cookie-message');
message.textContent = ' we us cookied for improved functiolatiy and analysitc.';
message.innerHTML =
  ' we us cookied for improved functiolatiy and analysitc. <button class="btn btn--close--cookie">Got it!</button>';

const closeCookie = document.querySelectorAll('.btn--close--cookie');
closeCookie.forEach(btn => {
  btn.addEventListener('click', () => {
    message.remove();
  });
});
message.style.backgroundColor = ' #37383d';
message.style.width = '100%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');
const logo = document.querySelector('.nav__logo');
logo.alt = 'Heros never die';
logo.setAttribute('company', 'Bankist');
const link = document.querySelector('.twitter-link');

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const s1coords1 = section1.getBoundingClientRect();
});

  const navHeight = nav.getBoundingClientRect().height
const sticyNav = (entries)=>{
  const [entery] = entries;
if(!entery.isIntersecting) nav.classList.add('sticky')
else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(sticyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})
headerObserver.observe(header)




const allSection  = document.querySelectorAll('.section')
const revealSection =(entries, observer)=>{
  const [entry] = entries
  if(!entry.isIntersecting) return
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})
allSection.forEach((section)=>{
  sectionObserver.observe(section)
} )

const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = (entries, observer)=>{
  const [entry] = entries
  if(!entry.isIntersecting) return
  entry.target.src =entry.target.dataset.src;
  entry.target.addEventListener('load', ()=>{
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
})

  imgTargets.forEach(img => imgObserver.observe(img))



// Slider
const slider = ()=>{

  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')
  let curSlide = 0
  const maxSlide = slides.length


  // functions
  const createDots = ()=>{
    slides.forEach((_, i)=>{
      dotContainer.insertAdjacentHTML("beforeend", ` <button class="dots__dot" data-slide="${i}"></button>` )
    })
  }

  const acivateDots = (slide)=>{
    document.querySelectorAll('.dots__dot').forEach((dot)=> dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }

  const goToSlide = function (slide) {
    slides.forEach((s,i)=>{
      s.style.transform = `translateX(${(i - slide) * 100}%)`
    })
  }



  const nextSlide = ()=>{
    if(curSlide === maxSlide - 1){
      curSlide = 0
      }else{
        curSlide ++
      }
      goToSlide(curSlide)
      acivateDots(curSlide)
  }
  const preSlide = ()=>{
      if(curSlide === 0 ){
        curSlide = maxSlide - 1
      }else{
      curSlide--
    }
    goToSlide(curSlide)
    acivateDots(curSlide)
    }

    const init = ()=>{
      goToSlide(0)
      createDots()
      acivateDots(0)
    }
    init()
    // eventhadiler
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', preSlide)

  document.addEventListener('keydown', function(e){
    e.key === 'ArrowLeft' && preSlide()
    e.key === 'ArrowRight' && nextSlide()
  })

dotContainer.addEventListener('click', function(e){
   if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide)
      acivateDots(slide)
  }
});
}
slider()


