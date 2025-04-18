//
// to change the message when you click the greet button

function sayHello() {
    //in html file, find the <p> with id = "message" and change the text inside it:
    document.getElementById("message").textContent = "Hola 😎 Mundo del Web! Hello World Wide Web! 😄🔥🎉✨";

}


// this function runs when you click the Submit button 

function showName() {
    let name = document.getElementById("nameInput").value;
    // find the <p> with the id = "output"and put the name there
    document.getElementById("output").textContent = `Nice to meet you, ${name}🙌😄!`;
}


