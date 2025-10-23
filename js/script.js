console.log('hello world');


function welcomeSpeech() {
     let name = prompt("Enter your name:");

     document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

function validateForm() {
     const name = document.getElementById('name-input').value;
     const email = document.getElementById('email-input').value;
     const message = document.getElementById('message-input').value;

     if(name ==="" || email ==="" || message ==="") {
          alert("All fields are required");
     }
}