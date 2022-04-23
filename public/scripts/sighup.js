
$(function(){
    $('button').on('click', function(e){
        // connects user inputs to variables;
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        let email; 
        let password;
        const password2 = $('#password2').val();
    
        validateEmail();
        validatePassword();
        
        const emailbo = validateEmail()
        if(emailbo){
            email = $('#email').val();
        } else {
            e.preventDefault();
            alert('The Email you have entered is invalid. Please try again.');
        }

        const passwordbo = validatePassword()
        if(passwordbo){
            password  = $('#password').val();
        } else {
            e.preventDefault();
            alert('The Password you have entered is invalid. Please try again.');
        }

        if(password !== password2){
            e.preventDefault();
            alert('Passwords Do Not Match.');
        }

    });
});



function validateEmail() {

    const email = $('#email').val();

    // personal data can have both uppercase and lower case letter, all digits a period, and a underscore. then the email must include an @ then can inclued both uppercase and lower case letters aswell as any digit for domain name. this is followed by a period then the end of the email such as .com or a non standerd ending such as .z.co beacuse of the option (.[a-z]+)?$/
    var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;

    if(regex.test(email)) {
        return true;
    } else {
        return false;
    };
}


function validatePassword() {

    const password = $('#password').val();


    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;

    if(regex.test(password)) {
        return true;
    } else {
        return false;
    };
}



