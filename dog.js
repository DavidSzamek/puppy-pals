$(document).ready(function(){
var personList =JSON.parse(localStorage.getItem("personDetails"));
var loggedIn =JSON.parse(localStorage.getItem("loggedIn"));


console.log(personList,loggedIn);

const findPerson = (x) => x.username == loggedIn;

var person = personList.find(findPerson);
$('#dogName').val(person.dogsRegistered[0].dogName);
$('#email').val(person.email);

console.log(person);

$('#send').click(function(event){

    event.preventDefault();

    $('.notification').removeClass('hideBlock');

    setInterval(function (){
        location.replace('landing-page-with-profile.html');
    }, 1000);    

});

person.dogsRegistered.forEach(dog => {

    $('#yourDogEL').append('<option>'+ dog.dogName +'</option>');
    
});

var matchedDogOut = JSON.parse(localStorage.getItem('matchedDog'));

$('#dogName').text(matchedDogOut.name);

$('#dogImageResponse').attr('src', matchedDogOut.image);
$('#dogImageResponse').attr('style', matchedDogOut.style);


document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      const $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.classList.add('hideBlock');
      });
    });
  });

});

