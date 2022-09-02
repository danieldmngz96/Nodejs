console.log("Starting");
//funcion normal en JS
function showUserInfo(userName , userAge){
    return `The username is ${userName} the user is ${userAge}, rears old`
}
//Arrow function 
const showUserInf = (userNam , userAg) => {
     `The username is ${userNam} the user is ${userAg}, rears old`
}
//Mostramos la data de las funciones
console.log(showUserInfo('Joe', 30));
showUserInfo('Pependence', 31)
showUserInfo('Peped', 34)
showUserInfo('Pepes', 37)
showUserInfo('Pepew', 38)
showUserInfo('Pepse', 35)
