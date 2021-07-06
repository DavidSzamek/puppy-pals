var breedEl =document.querySelector('.select-breed');

var dogregistration=[];

var dog = {
  dogName : $('#dog-name').val(),
  age:$('#dog-age').val(),
  breed:$('#breed').val(),
  about:$('#dog-info').val(),
  image:{}
}


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


input.addEventListener('click', updateImageDisplay);


function updateImageDisplay() {
  // console.log(input.files)
  const curFiles = input.files;

    for(const file of curFiles) {

      if(validFileType(file)) {
        imgData=URL.createObjectURL(file)
        dog.image=imgData;
        displayImgData( imgData);
      } else {
        console.log( `File name ${file.name}: Not a valid file type. Update your selection.`);

      }

    }
  
}

function displayImgData(imgData){
  var span = document.createElement('span');
  span.innerHTML = '<img class=" image is-rounded is-128X128  " src="' + imgData + '"/>';
  document.getElementById('list').insertBefore(span, null);
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






$('#submit-dogregistration').click(function(){


  

 
//   dog.dogName.value =$('#dog-name').value;
//   dog.age = $('#dog-age').value;
//   dog.breed =$('#breed').value;
//   dog.image =$('#dog-image').value;
//  dog.about =$('#dog-info').value;

  dogregistration.push(dog);

  localStorage.setItem("dog-registration" ,JSON.stringify(dogregistration));
  


});
