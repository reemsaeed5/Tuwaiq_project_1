let userName = $('#the-input-userName');
let password = $('#the-input-password');

let result =$('.results > span');

$('.check-item').click(function(){
    let name = localStorage.getItem('name');
    let pass = localStorage.getItem('password');

    if (userName.val()=== name && password.val()===pass){
        result.html('find < span>${userName.val()}</span>');

    }else{
        result.html('Not Find <span>${userName.val()}</span>');

    }
});
$('.add-item').click(function(){
    localStorage.setItem('name' , userName.val());
    localStorage.setItem('password', password.val());
    result.html('add<span>${userName.val()}</span>');
});