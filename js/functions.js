function login(){
    var login = $('#username').textbox('getValue');;
    var password = $('#password').textbox('getValue');

    if(login == "" && password == ""){
        setTimeout(function(){ $.mobile.go('#menu'); }, 500);        
    }else{
        $.messager.alert('Login','Usuário/Senha Inválido!');
    }
}

function menu(){
    $.mobile.go('#menu');
}

function registerEstimate(){
    $.mobile.go('#register_estimate');
}

function showEstimate(){
    $.mobile.go('#estimate');
}

function showProducts(){
    $.mobile.go('#products');
}

function showClient(){
    $.mobile.go('#register_client'); 
}