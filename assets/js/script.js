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
    suburb :$('#suburb').val(),
    location :$('#location').val(),
    pswd :$('#password').val(),
    dogsRegistered:[]

    }
    loggedinUser =person.username;
    // console.log(person);
   var list =JSON.parse(localStorage.getItem("personDetails"));

  


    // if(list === null){
    //   personList.push(person);
    //   console.log(personList);
    // }
    // else
    // {  console.log(list);
    //   list.forEach(x => {
    //     console.log(x,x.username, person.username)
    //       if(x.username == person.username || x.email == person.email){
    //         personList.push(list);
    //        alert("person already exist, please try to login!");
    //        return false;
    //        }
    //        personList.push(person);
    //       });

    //   console.log(personList);
            
    // }
          

    
    

   
    // if(!list){
    //   list.forEach(x => {
    //   if(x.username === person.username || x.email === person.email){
    //    alert("person already exist, please try to login!");
    //    }
    //   });
    //   personList.push(list);
    // }
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
    location.replace("landing-page-with-profile.html");

}




});

 





