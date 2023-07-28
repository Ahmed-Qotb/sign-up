// inputs
var signUpName = document.getElementById('su-name');
var signUpEmail = document.getElementById('su-email');
var signUpPass = document.getElementById('su-password');
var signUpButton = document.getElementById('sign-up');
var signInButton = document.getElementById('log-in');
var signInEmail = document.getElementById('sign-in-email');
var signInPass = document.getElementById('sign-in-pass');
var displayError = document.getElementById('error');
var massage = document.getElementById('success');
var uName = document.getElementById('u_name');
var signInArr = [];


// function to add a new account
function SignUp() {
    var signUp = {
        userName: signUpName.value,
        userEmail: signUpEmail.value,
        userPass: signUpPass.value,
    }
    if (signUpEmail.value == '' || signUpPass.value == '') {
        massage.innerHTML = 'enter email and pass fields';
    } else {
        if (signInArr.length == 0) {
            signInArr.push(signUp);
            localStorage.setItem('userInfo', JSON.stringify(signInArr));
            document.getElementById('success').innerHTML = 'success'
        } else {
            for (let i = 0; i < signInArr.length; i++) {
                if (signUpEmail.value == signInArr[i].userEmail || signUpPass.value == signInArr[i].userPass) {
                    document.getElementById('success').innerHTML = 'email or pass already exist'
                }
                else {
                    signInArr.push(signUp);
                    localStorage.setItem('userInfo', JSON.stringify(signInArr));
                    document.getElementById('success').innerHTML = 'success';
                    console.log(5);
                }
            }
        }
    }

    console.log(signInArr);
}

signUpButton.onclick = function () {
    SignUp()
}
// function to add a new account end



// sign in function 
function signInButtonGoTo() {
    window.location.href = 'welcome.html';
}


function signIn() {
    var Email = signInEmail.value;
    var Pass = signInPass.value;
    console.log(Email, Pass);
    var infoArr = [];
    infoArr = JSON.parse(localStorage.getItem('userInfo'));
    console.log(infoArr);
    for (let i = 0; i < infoArr.length; i++) {

        if (signInEmail.value == infoArr[i].userEmail && signInPass.value == infoArr[i].userPass) {
            signInButton.addEventListener('click', function () {
                signInButtonGoTo()
                console.log(3);
                console.log(5);
            })
        } else {
            displayError.innerHTML = 'invalid email or pass try signing up';
        }
    }
}
// sign in function end

