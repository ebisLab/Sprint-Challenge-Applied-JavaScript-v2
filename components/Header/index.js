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



//const key = '3e4ffa05eddf99b9f30923de5aee44ff';
//const key = f56d319c4b0c0a6b7c6481016aefb54b;
const promise = axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f56d319c4b0c0a6b7c6481016aefb54b>`)
// https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/,')

promise
.then(data => {
    console.log('weater', data)
})

.catch(error => {
    console.log('Something is down, idk', error)
  })

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

    let d = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(item=> item.toUpperCase());
let m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(item=> item.toUpperCase());

span.textContent = `${days[d.getDay()]} ${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    

    
    return header;
}
