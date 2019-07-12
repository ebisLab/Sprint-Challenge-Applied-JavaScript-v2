// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');
// chino = document.querySelector('.date').innerText='why';
// console.log(chino)





headerContainer.appendChild(Header())


function Header() {

    const header= document.createElement('div');
    const span = document.createElement('span');
    const h1= document.createElement('h1');
    const tempspan= document.createElement('span');



    header.appendChild(span);
    header.appendChild(h1);
    header.appendChild(tempspan);

    header.classList.add('header')
    span.classList.add('date');
    tempspan.classList.add('temp');

    span.textContent = 'Some Date';
    h1.textContent = 'Lambda Times';
    tempspan.textContent = '98'

    
    return header;
}
