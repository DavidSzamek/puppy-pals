//Nav Bar functionality
$(document).ready(function(){
var breedEl =document.querySelector('#breed');

var personList =JSON.parse(localStorage.getItem("personDetails"));
var loggedIn =JSON.parse(localStorage.getItem("loggedIn"));
var dogName = $('#dog-name').val();
var   age = $('#dog-age').val();
 var  breed = $('#breed').val();
 var  about= $('#dog-info').val();
 console.log(dogName,age,breed,about);

var dog = {
  dogName :dogName,
  age:age,
  breed:breed,  
  about:about,
  image:""
}


var requestUrl  ='https://dog.ceo/api/breeds/list/all';

fetch(requestUrl)
.then(function (response) {
    if (!response.ok) {
      throw response.json();
    }

    return response.json();
  })
  .then(function(data) {
      var data1 =data.message;
    // console.log(data1)
    for (let value in data1) {
        //  console.log(value);
         var opt= document.createElement('option');
         opt.appendChild( document.createTextNode(value) );
         // set value property of opt
         opt.value = value;     
         // add opt to end of select box (sel)
         breedEl.appendChild(opt); 
  }
  });


 const input = document.querySelector('input[type=file]');console.log(input);

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
];


function validFileType(file) {
  return fileTypes.includes(file.type);
}


$("input[type=file]").change( updateImageDisplay);

function updateImageDisplay() {
  // console.log(input.files)
  const curFiles = input.files;

    for(const file of curFiles) {

      if(validFileType(file)) {
        imgData=URL.createObjectURL(file)
        dog.image=imgData;
        // displayImgData( imgData);
        $('#list').attr('src', imgData);
      } else {
        console.log( `File name ${file.name}: Not a valid file type. Update your selection.`);

      }

    }
  
}

function displayImgData(imgData){

 $('#list').attr('src', imgData);
  
}





$('#submit-dogregistration').click(function(){
   console.log(personList,dog);

   const findPerson = (x) => x.username == loggedIn;

   var person = personList.find(findPerson);
    person.dogsRegistered.push(dog);

  //  console.log(dog);
  //   console.log(personList);

  localStorage.setItem("personDetails" ,JSON.stringify(personList));

});


});