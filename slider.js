 export const Slider = (slider) => {

    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
      }
    
    let current;
    let prev;
    let next;

    const startSlider = () => {
        current = slider.querySelector('.current');
        prev = current.previousElementSibling;
        next = current.nextElementSibling;

        console.log(current)
    }

    const slides = slider.querySelector('.slides');
    const nextButton = slider.querySelector('.goToNext')
    const prevButton = slider.querySelector('.goToPrev')

    startSlider();
    applyClasses();



}