var breedEl =document.querySelector('.select-breed');

var requestUrl  ='https://dog.ceo/api/breeds/list/all/';

fetch(requestUrl)
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    data.forEach(breed => {
        var optionEl= document.createElement('<option>').addClass("options");
        optionEl.value=breed;
        optionEl.appendTo(breedEl);

        
    
    
  })
  .catch(console.error(e));
});


