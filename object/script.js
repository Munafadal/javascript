


let person = {
    name: "John",
    age: 30,
    isMarried: true,
    occupation: "Developer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }

}

person.name = "Muna";
console.log(person.occupation); //. Notation
console.log (person["occupation"])