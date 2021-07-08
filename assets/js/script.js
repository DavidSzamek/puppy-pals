//Nav Bar functionality
$(document).ready(function(){

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
    var personList =[];
    var loggedinUser="";
  $("#register").click(addPerson);    

function addPerson(event){
    // console.log("testing");
    event.preventDefault();
    var person = {
    username :$('#username').val(),
    email: $('#email').val(),
    location :$('#location').val(),
    pswd :$('#password').val(),
    dogsRegistered:[]

    }
    loggedinUser =person.username;
    // console.log(person);
   var list =JSON.parse(localStorage.getItem("personDetails"));

  
    var userExists =false;
    if(list === null){
      personList.push(person);
    }
    else{
      list.forEach(x => {

        if(x.username === loggedinUser){
          alert("person already exist, please try to login!");
          userExists= true;
          return false;
        }
       
      });
      if(!userExists){
        personList =[...list,person];
      }

    }
    console.log(personList,list,person);
    // }
    // console.log(JSON.stringify(personList));
    localStorage.setItem("loggedIn", JSON.stringify(loggedinUser));
    localStorage.setItem("personDetails", JSON.stringify(personList));

    $('#username').val("");
    $('#email').val("");
    // $('#breed').text('');
    $('#location').val("");

    location.replace("landing-page-with-profile.html");




}




});

 





