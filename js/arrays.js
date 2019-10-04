let hobbiesArray = ["Art", "Cooking", "Travel"];

function printHobbies(hArray){
    const items = hArray.map(function(value){
        return `I like ${value}`;
    });

    console.log(`I like ${items.length} things:`)
    for(i=0;i <items.length;i++){
        console.log(`${items[i]}`);
    }
        
}

printHobbies(hobbiesArray);

function formatArray(ufString){
    console.log(ufString.join());
    console.log(ufString.join('+'));
}

formatArray(["Red", "Green", "White", "Black"]);

function repeatingString(arrString){
    
}