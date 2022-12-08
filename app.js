let intro = document.querySelector('.intro');

window.onload = init();

function init(){
    setTimeout(function(){
        intro.remove()
    }, 8000);
}


const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
    },
    {
        threshold: 0.25
    }
);

hiddenElements.forEach(hiddenElements => {
    observer.observe(hiddenElements);
});