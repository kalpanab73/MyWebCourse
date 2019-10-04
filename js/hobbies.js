const hobbiesArray=[
    {name: 'Art', lengthInyearsAtHobby: 10},
    {name: 'Cooking', lengthInyearsAtHobby: 35}
]

function printHobby(hobby){
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInyearsAtHobby} years`);
}

for (i=0; i<hobbiesArray.length; i++){
    printHobby(hobbiesArray[i]);
}