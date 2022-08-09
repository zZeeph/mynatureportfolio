'use strict';
{

$(function () {

  $('.slider').slick({
    slidesToShow:1,
    dots:true,
  });
    
});

  document.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;

    if(scrollY > 450) {
      document.getElementById('header').classList.add('active');
    } else {
      document.getElementById('header').classList.remove('active');
    }
  });

  const showElements = document.querySelector('.animation-target');

  window.addEventListener('scroll', function() {
    const getElementDistance = showElements.getBoundingClientRect().top;
    if (window.innerHeight > getElementDistance) {
      showElements.classList.add('show');
    }
  })

  const moveElements = document.querySelectorAll('.move-target');

  window.addEventListener('scroll', function() {
    for (let i = 0; i<moveElements.length; i++) {
      const getMoveElementDistance = moveElements[i].getBoundingClientRect().top + moveElements[i].clientHeight * .7;
      if (window.innerHeight > getMoveElementDistance) {
        moveElements[i].classList.add('move');
      }
    }
  })

  const moveMoreElements = document.querySelector('.move-more-target');

  window.addEventListener('scroll', function() {
    const getMoveMoreElementDistance = moveMoreElements.getBoundingClientRect().top+ moveMoreElements.clientHeight * .7;
    if (window.innerHeight > getMoveMoreElementDistance) {
      moveMoreElements.classList.add('move-more');
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()

      const target = document.querySelector(link.hash),
            adjust = 50,
            offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    })
  })

  const nav = document.querySelector('#header');
  const btn = document.querySelector('.toggle-btn');
  const mask = document.querySelector('#mask');

  btn.onclick = () => {
    nav.classList.toggle('open');
  }

  mask.onclick = () => {
    nav.classList.toggle('open');
  }

}