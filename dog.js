$(document).ready(function(){
var personList =JSON.parse(localStorage.getItem("personDetails"));
var loggedIn =JSON.parse(localStorage.getItem("loggedIn"));


console.log(personList,loggedIn);

const findPerson = (x) => x.username == loggedIn;

var person = personList.find(findPerson);
$('#dogName').val(person.dogsRegistered[0].dogName);
$('#email').val(person.email);

console.log(person);

$('#send').click(function(){

    location.replace('landing-page-with-profile.html');

})
});