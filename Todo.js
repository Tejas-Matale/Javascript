const list=["Brush","Shower"]
let input=prompt("What would you like to do?")
while(input!="quit"&&input!="q"){
    if(input==="new"){
        let addNum=parseInt(prompt("how many are you going to add"))
        for(i=0;i<addNum;i++){
            let add=prompt("Add to the list")
            list.push(add)
        }
        
    }else if(input==="list"){
        console.log("*******");
        for(i=0;i<list.length;i++)
        {
            console.log(`${i}:${list[i]}`)
        }
        console.log("*******")
    }else if(input==="delete"){
        let remove=parseInt(prompt("Enter the Index number of the selected item"))
        list.splice(remove,1)
    }
    input=prompt("What would you like to do?")
}