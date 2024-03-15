const mtext = document.querySelector('#match');
const pw = document.querySelector('#password');
const confirmpw = document.querySelector('#confirm-pw');

document.addEventListener('change', function(){
    if (pw.value != confirmpw.value){
        mtext.style.opacity = '1';
        confirmpw.style.border = '1px solid red';
        pw.style.border = '1px solid red';
    } else {
        mtext.style.opacity = '0';
        confirmpw.style.border = '1px solid #b28876';
        pw.style.border = '1px solid #b28876';
    }
})