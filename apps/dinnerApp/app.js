var dinnerApp = {
    protBtn: document.getElementById('protBtn'),
    carbBtn: document.getElementById('carbBtn'),
    vegeBtn: document.getElementById('vegeBtn'),
    randomBtn: document.getElementById('randomize'),
    protInput: document.getElementById('protInput'),
    carbInput: document.getElementById('carbInput'),
    vegeInput: document.getElementById('vegeInput'),
    protList: document.getElementById('protList'),
    carbList: document.getElementById('carbList'),
    vegeList: document.getElementById('vegeList'),
    init: function() {
        dinnerApp.protBtn.addEventListener('click', dinnerApp.addItemProt);
        dinnerApp.carbBtn.addEventListener('click', dinnerApp.addItemCarb);
        dinnerApp.vegeBtn.addEventListener('click', dinnerApp.addItemVege);
        dinnerApp.randomBtn.addEventListener('click', dinnerApp.createMenuArray);
        dinnerApp.protInput.addEventListener('keypress', dinnerApp.keyPressProt);
        dinnerApp.carbInput.addEventListener('keypress', dinnerApp.keyPressCarb);
        dinnerApp.vegeInput.addEventListener('keypress', dinnerApp.keyPressVege);
    },
    addItemProt: function() {
        if (dinnerApp.protInput.value != "") {
            const item = document.createElement('li');
            item.innerHTML = dinnerApp.protInput.value;
            item.classList.add('prot');
            dinnerApp.remove(item);
            dinnerApp.protList.appendChild(item);
            dinnerApp.protInput.value = "";
        }
    }, 
    addItemCarb: function() {
        if (dinnerApp.carbInput.value != "") {
            const item = document.createElement('li');
            item.innerHTML = dinnerApp.carbInput.value;
            item.classList.add('carb');
            dinnerApp.remove(item);
            dinnerApp.carbList.appendChild(item);
            dinnerApp.carbInput.value = "";
        }
    }, 
    addItemVege: function() {
        if (dinnerApp.vegeInput.value != "") {
            const item = document.createElement('li');
            item.innerHTML = dinnerApp.vegeInput.value;
            item.classList.add('vege');
            dinnerApp.remove(item);
            dinnerApp.vegeList.appendChild(item);
            dinnerApp.vegeInput.value = "";
        }
    },
    remove: function(item) {
        const remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.classList.add('remove');
        remove.onclick = function() {this.parentNode.remove()};
        item.appendChild(remove); 
    },
    keyPressProt: function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dinnerApp.protBtn.click();
        }
    },
    keyPressCarb: function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dinnerApp.carbBtn.click();
        }
    },
    keyPressVege: function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dinnerApp.vegeBtn.click();
        }
    },
    createMenuArray: function() {
        const protArraySetup = document.querySelectorAll('.prot');
        const carbArraySetup = document.querySelectorAll('.carb');
        const vegeArraySetup = document.querySelectorAll('.vege');
        const protArray = [];
        const carbArray = [];
        const vegeArray = [];
        for ( let i = 0; i < protArraySetup.length; i ++) {
            let item = protArraySetup[i].textContent.replace('Remove', '');
            protArray.push(item);
        }
        for ( let i = 0; i < carbArraySetup.length; i ++) {
            let item = carbArraySetup[i].textContent.replace('Remove', '');
            carbArray.push(item);
        }
        for ( let i = 0; i < vegeArraySetup.length; i ++) {
            let item = vegeArraySetup[i].textContent.replace('Remove', '');
            vegeArray.push(item);
        }
        if ( protArray.length > 0 && carbArray.length > 0 && vegeArray.length > 0) {
            dinnerApp.pickMenu(protArray, carbArray, vegeArray);
        }
    },
    pickMenu: function(protArray, carbArray, vegeArray) {
        let protein = Math.floor(Math.random() * protArray.length);
        protein = protArray[protein];
        let carbohydrate = Math.floor(Math.random() * carbArray.length);
        carbohydrate = carbArray[carbohydrate];
        let vegetable = Math.floor(Math.random() * vegeArray.length);
        vegetable = vegeArray[vegetable];
        dinnerApp.displayMeal(protein, carbohydrate, vegetable);
    },
    displayMeal: function (protein, carbohydrate, vegetable) {
        console.log(protein);
        console.log(carbohydrate);
        console.log(vegetable);
        const proteinCard = document.getElementById('proteinCard');
        const carbohydrateCard = document.getElementById('carbohydrateCard');
        const vegetableCard = document.getElementById('vegetableCard');
        dinnerApp.protBtn.remove();
        dinnerApp.protInput.remove();
        dinnerApp.protList.remove();
        dinnerApp.carbBtn.remove();
        dinnerApp.carbInput.remove();
        dinnerApp.carbList.remove();
        dinnerApp.vegeBtn.remove();
        dinnerApp.vegeInput.remove();
        dinnerApp.vegeList.remove();
        const randomProtein = document.createElement('h2')
        randomProtein.innerHTML = protein;
        const randomCarbohydrate = document.createElement('h2');
        randomCarbohydrate.innerHTML = carbohydrate;
        const randomVegetable = document.createElement('h2');
        randomVegetable.innerHTML = vegetable;
        proteinCard.appendChild(randomProtein);
        carbohydrateCard.appendChild(randomCarbohydrate);
        vegetableCard.appendChild(randomVegetable);
        dinnerApp.randomBtn.remove();
        const resetBtn = document.createElement('button');
        resetBtn.innerHTML = 'Reset';
        const resetLocation = document.getElementById('randomizer');
        resetLocation.appendChild(resetBtn);
        resetBtn.addEventListener('click', () => location.reload());
    }
}
window.onload = dinnerApp.init;