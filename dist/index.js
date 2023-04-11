const tabs = document.getElementsByName('tabs');
const mainSections = document.getElementsByTagName('main')
const burger = document.getElementById('check');

tabs.forEach(button => {
    button.addEventListener('click', displayContent);
});

function displayContent() {
    burger.checked = false;
    toggleHidden(this.id);
}

function toggleHidden(radio) {
    for (let i = 0; i < mainSections.length; i++) {
        if (!mainSections[i].classList.contains('hidden'))
            mainSections[i].classList.toggle('hidden');
        if (mainSections[i].id === radio + '__content')
            mainSections[i].classList.toggle('hidden');
    }
}
