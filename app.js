const form =  document.querySelector(".container .text form");
const email = document.querySelector(".container .text form input[type=email]");

form.addEventListener('submit', ()=>{
    let emailValue = email.value;

    if(validateEmail(emailValue)){
        form.querySelector("small").classList.remove("error");
        form.querySelector(".error-icon").classList.remove("error");
        console.log("true");

        console.log(form);
    }
    else {
        form.querySelector("small").classList.add("error");
        form.querySelector(".error-icon").classList.add("error");
        console.log("false");

        console.log(form);
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}