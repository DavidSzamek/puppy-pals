//document selectors
var searchButtonEL = $('#searchDog');
var nextSearchEL = $('#nextSearchEL')
var dogImageEL = $('#dogImageResponse');
var dogNameEL = $('#dogNameResponse');
var messageDogEL = $('#messageDog');
var closeModalEL = $('.delete');
//document selectors

//Fetch API URL's
var imageURL = 'https://dog.ceo/api/breeds/image/random';
var nameURL = 'https://randomuser.me/api';
//Fetch API URL's

//Function to handle a random dog search
function handleSubmit () {

    // event.preventDefault();

    displayDogImage();
    randdomName();

};

//Function display random dog image
function displayDogImage () {

    fetch(imageURL).then(function (response) {
        if(response.ok){
            return response.json();
        }
        else {
            //expcetion handling here
        };
    }).then(function (data) {


        console.log(data);

        dogImageEL.attr('src', data.message);

});

};

//Function display random dog name
function randdomName () {

    fetch(nameURL).then(function (response) {
        if(response.ok){
            return response.json();
        }
        else {
            //expcetion handling here
        };
    }).then(function (data) {


        console.log(data);

        dogNameEL.text(data.results[0].name.first);

});

}

//Opens modal to allow user to message the matched dog
function messageDog () {

    $('.modal').addClass("is-active");

};

//Closes the modal
function closeModal () {

    $('.modal').removeClass("is-active");

};

//Handle inital function
function init () {
    searchButtonEL.on('click', handleSubmit);
    nextSearchEL.on('click', handleSubmit);
    
    messageDogEL.on('click', messageDog);
    closeModalEL.on('click', closeModal);
};

//first function called
init();






