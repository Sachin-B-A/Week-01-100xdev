let arrobj = [
    {
        Name: "Sachin",
        age: 19,
        Gender: "Male"
    },
    {
        Name: "Rahul",
        age: 20,
        Gender: "Female"
    },
    {
        Name: "Virat",
        age: 21,
        Gender: "Male"
    }
];
for (let i = 0; i < arrobj.length; i++) {
    if (arrobj[i].Gender == "Male") {
        console.log(arrobj[i].Name);
    }
}
