let btnChecked = false;

document.addEventListener('DOMContentLoaded', () =>{

    $(".sign-in__button").click(()=>{

    });

    $(".login__button").click(()=>{
        SelectForm();
    });

    $(".close__form").click(()=>{

    });
})

function SelectForm(){
    if(btnChecked !== true){
        $("h3").text("Login");
        $(".sign-in__button").text("sign in");
        $(".login__text").text("Don't have an account?");
        $(".login__button").text("Register Here");
    }
    else if (btnChecked === false){
        $("h3").text("registration");
        $(".sign-in__button").text("sign up");
        $(".login__text").text("Have already an account?");
        $(".login__button").text("Login Here");
    }
}
