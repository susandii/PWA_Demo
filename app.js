document.getElementById('ping').addEventListener("click", function(){
    document.getElementById('out').textContent="Java Script is working";
})


//helper file
//runs in the baclground, seperate from the main page
//offline performance, overall performance, push notifications
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(()=> console.log('service Worker registerred'))
    .catch(err => console.log('SW registration failed', err));

}

