const btnPrev = document.querySelector('.btnPrev')
const btnNext = document.querySelector('.btnNext')

btnNext.addEventListener('click', () =>{
    btnPrev.classList.remove('d-none');
    const activeSlide = document.querySelector('.slider-item.active');
    activeSlide.classList.remove('active');
    activeSlide.nextElementSibling.classList.add('active');
    if(activeSlide.nextElementSibling.nextElementSibling === null) {
        btnNext.classList.add('d-none');
    }
});

btnPrev.addEventListener('click', () =>{
    let activeSlide = document.querySelector('.slider-item.active');
    activeSlide.classList.remove('active');
    btnNext.classList.remove('d-none');
    activeSlide.previousElementSibling.classList.add('active');
    if(activeSlide.previousElementSibling.previousElementSibling === null) {
        btnPrev.classList.add('d-none');
    }
});