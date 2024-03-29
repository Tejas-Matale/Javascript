const button=document.querySelector('button')
const jokes=document.querySelector('#jokes')

const addnewjoke =async()=>{
    const jokeText=await getDadJokes()
    const newli=document.createElement('li')
    newli.append(jokeText)
    jokes.append(newli)
}

const getDadJokes=async()=>{
    try{
    const config={headers:{Accept:'application/json'}}
    const res= await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke
    }catch(e){
        return "No jokes Availabe Sorry"
    }
}

button.addEventListener('click',addnewjoke)

