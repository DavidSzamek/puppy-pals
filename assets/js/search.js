//document selectors
var searchButtonEL = $('#searchDog');
var nextSearchEL = $('#nextSearchEL')
var dogImageEL = $('#dogImageResponse');
var dogNameEL = $('#dogNameResponse');
var messageDogEL = $('#messageDog');
var closeModalEL = $('.delete');
var displayResultsEL = $('#displayResults');
var searchBlockEL = $('#searchBlock');
//document selectors

//Fetch API URL's
var imageURL = 'https://dog.ceo/api/breeds/image/random';
var nameURL = 'https://randomuser.me/api?nat=au';
//Fetch API URL's

//Function to handle a random dog search
function handleSubmit () {

    // event.preventDefault();

    displayDogImage();
    randdomName();

    displayResultsEL.removeClass('hideBlock');

    searchBlockEL.removeClass('is-12 is-justify-content-center');
    searchBlockEL.addClass('column is-6');
    searchBlockEL.parent().removeClass('container custom-container');
    searchBlockEL.parent().addClass("columns");

    dogImageEL.parent().css('padding', '100px');

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

    // $('.modal').addClass("is-active");

    location.replace("pet-message-page.html");

};

//Closes the modal
function closeModal () {

    $('.modal').removeClass("is-active");

};

//scale dyanmic images
function scaleImage () {
    var css;
    var ratio=$(this).width() / $(this).height();
    var pratio=$(this).parent().width() / $(this).parent().height();
    if (ratio<pratio) css={width:'auto', height:'100%'};
    else css={width:'100%', height:'auto'};
    $(this).css(css);
};

//Handle inital function
function init () {
    searchButtonEL.on('click', handleSubmit);
    nextSearchEL.on('click', handleSubmit);
    
    messageDogEL.on('click', messageDog);
    closeModalEL.on('click', closeModal);

    $('img').on('load', scaleImage);
};

//first function called
init();
