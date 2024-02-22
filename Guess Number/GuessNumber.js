let maxNum=parseInt(prompt("Enter your max number:"))
while(!maxNum){
   maxNum= parseInt(prompt("enter valid number"))
}
const randomNum=Math.floor(Math.random()*maxNum)+1
console.log(randomNum,maxNum)

guessCount=1
let guess=parseInt(prompt("Enter Your guess number"))
while (parseInt(guess)!==randomNum){
    if (guess==="q"){
        break
    }
    if(parseInt(guess)>randomNum){
        guess=prompt("guess is high")
    }
    else{
        guess=prompt("guess is low")
    }

    guessCount+=1
}
if(guess==="q"){
    console.log("You quit")
}
else{
    console.log(`It took ${guessCount} for you to guess`)
}
