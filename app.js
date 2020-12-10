//import { Slider } from './slider';

///////////////////////////////////////////////////////////
// slider component for projects
const Slider = (slider) => {

    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
      }
    
    let current;
    let prev;
    let next;

    const startSlider = () => {
        current = slider.querySelector('.current');
        prev = current.previousElementSibling || slider.lastElementChild;
        next = current.nextElementSibling;

        //console.log(current, prev, next)
    }

    const applyClasses = () => {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
        //console.log(prev)
        //console.log(next)
    }

    const goTo = (slideDir) => {
        console.log(slideDir)

        const classesToRemove = ['current', 'prev', 'next']

        current.classList.remove(...classesToRemove);
        prev.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        //console.log(current, prev, next)

        if(slideDir === 'prev') {
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild]
        }

        //console.log(current, prev, next);
        applyClasses();
    }

    const slides = slider.querySelector('.slides');
    const nextButton = slider.querySelector('.goToNext')
    const prevButton = slider.querySelector('.goToPrev')

    startSlider();
    applyClasses();

    nextButton.addEventListener('click', goTo)
    prevButton.addEventListener('click', () => goTo('prev'))

    console.log(nextButton)
    console.log(prevButton)
}

const brewSlider = Slider(document.querySelector('.brew-slider'))
const countriesSlider = Slider(document.querySelector('.countries-slider'))
const portfolioSlider = Slider(document.querySelector('.portfolio-slider'))
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//tabs for project sliders
const tabs = document.querySelector('.projects');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'))

const handleTab = (e) => {
    //1. set all the tab panels to hidden
    tabPanels.forEach(panel => {
        panel.hidden = true;
    })

    //2. set all the aria-selected attributes of the buttons to false
    tabButtons.forEach(button => {
        button.setAttribute('aria-selected', false);
    })

    //3. set the aria-selected attribute of the clicked button to true
    console.log(e.currentTarget)
    e.currentTarget.setAttribute('aria-selected', true)

    //loop through the array of tabpanels, find the panel that matches the id(the currenttarget that was clicked)'
    //set the hidden attribute of that element to false
    const tabPanel = tabPanels.find(panel => {
        return panel.getAttribute('aria-labelledby') === e.currentTarget.id;
    })
    console.log(tabPanel)
    tabPanel.hidden = false;
}

tabButtons.forEach(button => {
    button.addEventListener('click', handleTab)
})
//////////////////////////////////////////////////////////////////////////////////

const slides = document.querySelector('.slides');
const controls = document.querySelector('.controls')
const projectSlider = document.querySelector('.project-slider')
const controlButtons = slides.querySelectorAll('.controls button')


///////////////////////////////////////////////////////////////////////////////////
//intersection observer for header navigation

const homePage = document.querySelector('.home')
const aboutPage = document.querySelector('#about')
const aboutTag = document.querySelector('.about__desc')
const headerNav = document.querySelector('.header-nav')

const headerObCallback = (hi) => {

    if(hi[0].intersectionRatio < 0.35) {
        headerNav.classList.toggle('header-visible')
    }

    console.log(hi[0].intersectionRatio)
}

let headerOb = new IntersectionObserver(headerObCallback, {
    threshold: 0.2
})

headerOb.observe(homePage)

////////////////////////////////////////////////////////////////////////////////////////
//smooth scrolling library 
var mainScroll = new SmoothScroll('.main-nav a[href*="#"]', {
    speed: 800
});

var headNavScroll = new SmoothScroll('.header-nav-list a[href*="#"]', {
    speed: 800
});