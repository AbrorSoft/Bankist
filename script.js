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

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// ); not goo practis

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    console.log(id);
  }
});
const tabs = document.querySelectorAll('.operations__tab ');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('Tab');
//   })
// );
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
  // window.addEventListener('scroll', ()=>{
  //   console.log(window.scrollY)


  //   if(window.scrollY > initialCoords.top ) nav.classList.add('sticky')
  //    else nav.classList.remove('sticky')

  // })
// practise
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allBtn = document.getElementsByTagName('button');
const allBtn1 = document.getElementsByClassName('btn');
console.log(allBtn);
console.log(allBtn1);

const message = document.createElement('div');
message.style.width = 200;
message.classList.add('cookie-message');
message.textContent = ' we us cookied for improved functiolatiy and analysitc.';
message.innerHTML =
  ' we us cookied for improved functiolatiy and analysitc. <button class="btn btn--close--cookie">Got it!</button>';
// header.prepend(message); //add elemnet before inside of  header class
//header.append(message); //add element after inside of  header class
// header.append(message.cloneNode(true)); //clone element help us to multiplay elements
// header.before(message); add element outside  the  header class and  before
header.after(message); //add element outside  the  header class and  after
const closeCookie = document.querySelectorAll('.btn--close--cookie');
closeCookie.forEach(btn => {
  btn.addEventListener('click', () => {
    message.remove();
    // message.parentElement.removeChild(message)  this is old school and it is called DOM traversing
  });
});
message.style.backgroundColor = ' #37383d';
message.style.width = '100%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.className);
console.log(logo.classList);
logo.alt = 'Heros never die';
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('designer'));
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(logo.dataset.versionNumber);
// logo.classList.contains()

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const s1coords1 = section1.getBoundingClientRect();
  console.log(s1coords1);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'high.width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // window.scrollTo(
  //   s1coords1.left + window.pageXOffset,
  //   s1coords1.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords1.left + window.pageXOffset,
  //   top: s1coords1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // old school way

  // section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// const aletH1 = e => {
//   alert('addEventliser : great you are heading');
// };
// h1.addEventListener('mouseenter', aletH1);
// setTimeout(() => h1.removeEventListener('mouseenter', aletH1), 4000);

// const randomInit = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInit(0, 255)},${randomInit(0, 255)},${randomInit(0, 255)} )`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LInk', e.target, e.currentTarget);
//   e.stopPropagation(); //not good practis but some times it helps
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAv', e.target, e.currentTarget);
// });
//goign : children
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'darkblue';
// // going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// //going sidways : siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';

// });

// const obsCallback = (entries, observer)=>{
//   entries.forEach(entery =>{
//     console.log(entery)
//   })
// }
// const obsOptions = {
//   root: null,
//   threshold: 0.1
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
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
  // section.classList.add('section--hidden')
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
    // const slide = e.target.dataset.slide; we can also do that
    goToSlide(slide)
      acivateDots(slide)
  }
});
}
slider()



document.addEventListener('DOMContentLoaded', function(e){
  console.log( 'HTMl parsed and DOM  three built  ',  e)
})
window.addEventListener('load', function(e){
  console.log( 'Page fully loaded  ',  e)
})
// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = 'ADadag';
// });