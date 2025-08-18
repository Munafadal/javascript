let person1 = {
    name: "John",
    age: 30,
    occupation: "Software Engineer"    
}
for (const key in person1) {
    console.log(key, person1[key]);
}