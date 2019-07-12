// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicselect = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log('response', data)
    const topics = data.data.topics;
    
    console.log(topics)
    topics.forEach( topicurl => {
        const el = createTabs(topicurl)
        
    topicselect.appendChild(el);
    });
})

.catch(error => {
    console.log('Something is down, idk', error)
  })

function createTabs(obj){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = obj


    tab.addEventListener('click', function(){
        console.log('why meeee!')
    })
    return tab;

}