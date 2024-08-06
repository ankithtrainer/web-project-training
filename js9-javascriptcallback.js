function hello(name,name2){
    console.log(' Hi '+ name);
    name2();
}

function callme(){
    console.log(' I am inside callback function');
}

hello('Promod', callme);