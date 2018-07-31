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

function registerEstimateProducts(){
    $.mobile.go('#register_estimate_products');
}

function showEstimate(){
    $.mobile.go('#estimate');
}

function showService(){
    $.mobile.go('#service_order');
}

function registerService(){
    $.mobile.go('#register_service');
}

function registerServiceProducts(){
    $.mobile.go('#register_service_products');
}

function registerServiceData(){
    $.mobile.go('#register_service_data');
}

function showProducts(){
    $.mobile.go('#products');
}

function showClient(){
    $.mobile.go('#register_client'); 
}

function saveTemp(){
    $('#confirm_save').dialog('close');  
    $.mobile.go('#estimate');
}

function saveServiceTemp(){
    $('#confirm_save_service').dialog('close');  
    $.mobile.go('#service_order');
}

function saveClient(){
    $('#register_client').dialog('close');
    $('#confirm_save').dialog('open').dialog('center');
}

function showReports(){
    $.mobile.go('#reports'); 
}

function editService(){
    var row = $('#dg_service').datagrid('getSelected');

    if(row){
        alert('Editar O.S');
    } else {
        alert('Selecione uma O.S para Editar!');
    }
}