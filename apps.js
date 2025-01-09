const hour = new Date().getHours() ;
let greeting ;

if (hour < 17) {
    greeting = "Hello!" ;
} else {
    greeting = "Good Evening" ;
}

document.getElementById("clock").innerHTML = greeting + "!" + " Welcome to Adan Rubio's Portfolio!";
