// Create two objects with their own properties (similar to the boat object we created in Night School)
// The first object should contain...
// no less than 4 key-value pairs
// a setter
// a getter
// The second object can contain anything you want, but it should be creative (have fun with it)
// Loop through the values for each object

let jordan = {
    name: "jordan",
    _age: 25,
    favoriteColor: "orange",
    favoriteInstructor: "Ben",
    set age(newAge) {
        if (typeof newAge != "number"){
            console.log("enter a number")
        } else{
            this._age= newAge;
        }

    },
    get age() {
        return this._age;
    }
}
console.log(jordan);
console.log(jordan._age);
console.log(jordan.age);
jordan.age = "twentry-five"
jordan.age= 50
console.log(jordan._age)
console.log(jordan.age)

let phat = {
    name: "patton",
    _age: 24,
    favoriteColor: "Probably Blue",
    favoriteInstructor: "Benjammin"
}

let phat_values= Object.values(phat);

phat_values.forEach(x => {
    console.log(x);
});
