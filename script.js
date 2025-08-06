const btn = document.querySelector("#btn");
const msg = document.querySelector("#para");

const URL = "https://official-joke-api.appspot.com/jokes/random";
btn.addEventListener("click", ()=>{

    fetch(URL)
   .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
   .then(data =>{
    const joke = `${data.setup} - ${data.punchline}`;
    console.log(joke);
    msg.innerText = joke;
})
.catch(error => {
    console.error('Error fetching data:', error);
});
    
})
