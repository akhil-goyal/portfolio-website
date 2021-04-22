const buttonTypeOne = document.querySelector('.type1');
const buttonTypeTwo = document.querySelector('.type2');
const buttonTypeThree = document.querySelector('.type3');
const buttonTypeFour = document.querySelector('.type4');
const buttonTypeFive = document.querySelector('.type5');
const buttonTypeSix = document.querySelector('.type6');

const boxOne = document.querySelector('.box1');
const boxTwo = document.querySelector('.box2');
const boxThree = document.querySelector('.box3');
const boxFour = document.querySelector('.box4');
const boxFive = document.querySelector('.box5');
const boxSix = document.querySelector('.box6');

boxTwo.classList.add('hidden');
boxThree.classList.add('hidden');
boxFour.classList.add('hidden');
boxFive.classList.add('hidden');
boxSix.classList.add('hidden');

window.addEventListener('click', (e) => {

    let clickedButton = e.target.innerHTML.toLowerCase().replace(/\s/g, '');

    if (clickedButton === 'category1') {
        boxOne.classList.remove('hidden');
        boxTwo.classList.add('hidden');
        boxThree.classList.add('hidden');
        boxFour.classList.add('hidden');
        boxFive.classList.add('hidden');
        boxSix.classList.add('hidden');
    } else if (clickedButton === 'category2') {
        boxOne.classList.add('hidden');
        boxTwo.classList.remove('hidden');
        boxThree.classList.add('hidden');
        boxFour.classList.add('hidden');
        boxFive.classList.add('hidden');
        boxSix.classList.add('hidden');
    } else if (clickedButton === 'category3') {
        boxOne.classList.add('hidden');
        boxTwo.classList.add('hidden');
        boxThree.classList.remove('hidden');
        boxFour.classList.add('hidden');
        boxFive.classList.add('hidden');
        boxSix.classList.add('hidden');
    } else if (clickedButton === 'category4') {
        boxOne.classList.add('hidden');
        boxTwo.classList.add('hidden');
        boxThree.classList.add('hidden');
        boxFour.classList.remove('hidden');
        boxFive.classList.add('hidden');
        boxSix.classList.add('hidden');
    } else if (clickedButton === 'category5') {
        boxOne.classList.add('hidden');
        boxTwo.classList.add('hidden');
        boxThree.classList.add('hidden');
        boxFour.classList.add('hidden');
        boxFive.classList.remove('hidden');
        boxSix.classList.add('hidden');
    } else if (clickedButton === 'category6') {
        boxOne.classList.add('hidden');
        boxTwo.classList.add('hidden');
        boxThree.classList.add('hidden');
        boxFour.classList.add('hidden');
        boxFive.classList.add('hidden');
        boxSix.classList.remove('hidden');
    } else {
        return;
    }

});