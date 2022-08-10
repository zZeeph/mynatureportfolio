'use strict';
{

$(function () {

  $('.slider').slick({
    slidesToShow:1,
    dots:true,
  });
    
});

  const headerElement = document.getElementById('header');

  let scrollPoint = 0
  let lastPoint= 0

  document.addEventListener('scroll', function() {
    scrollPoint = window.pageYOffset;

    if (document.getElementById('topArea').getBoundingClientRect().bottom < 0) {
      if (scrollPoint > lastPoint) {
        headerElement.classList.add('active');
      } else {
        headerElement.classList.remove('active');
      }

      lastPoint = scrollPoint
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

}