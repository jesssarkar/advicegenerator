//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getAdvice)

function getAdvice(){

  let query = document.querySelector('input').value

  fetch(`https://api.adviceslip.com/advice/search/${query}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.message){document.querySelector('h2').innerText="I don't know anything about that!"}
        else if(data.slips){document.querySelector('h2').innerText=data.slips[0].advice}

      })
      
}