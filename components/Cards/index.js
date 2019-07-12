// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards= document.querySelector('.cards-container');

const promise = axios.get('https://lambda-times-backend.herokuapp.com/articles')

promise
.then(data => {
    console.log('card data', data)
    const articles = data.data.articles;
    const articleTopic= Object.keys(articles)
    console.log('articletopic', articleTopic)
    console.log("articles", articles)
    const photo = data.data.articles
    console.log(photo)

    articleTopic.map(topic => {
        articles[topic].map(article =>{
            cards.append(createCards(article))
        })
    })

    // articles.forEach(element => {
    //     const art = createCards(element)

    //     cards.appendChild(art)
    // });

    
    // createCards()
})

function createCards(obj){

    const card= document.createElement('div');
    const headline = document.createElement('div');
    const author= document.createElement('div');
    const imgcontainer= document.createElement('div');
    const img= document.createElement('img');
    const aname= document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgcontainer);
    imgcontainer.appendChild(img);
    author.appendChild(aname);

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    imgcontainer.classList.add('img-container');

    headline.textContent = '{HeadLine of Article}';
    img.textContent = 'google.com';
    aname.textContent = `By: `
    

    console.log('Hello')
    return card;


}
