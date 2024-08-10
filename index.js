let fullName = "eublan mata";

let capitaliceName =  fullName.split(" ")
                                .map( name => {
                                    return name.charAt(0).toUpperCase() + name.slice(1)
                                }).join(" ")

// let nameComplete = capitaliceName.map( name => {
//     return name.charAt(0).toUpperCase() + name.slice(1)
// })

// let result = nameComplete.join(" ");


console.log(capitaliceName);

// console.log(result);
// console.log(nameComplete);
