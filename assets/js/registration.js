var breedEl =document.querySelector('.select-breed');

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

