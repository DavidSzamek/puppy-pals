var profileName;

var userHeading = $('#userHeading');
var displayDogsEL = $('#displayDogs');

function checkLogin () {
    if (localStorage.getItem('loggedIn') == null) {
        window.alert("Error, you are not logged in")
        location.replace('login.html');
        
    }
};

function addUserName () {
    
    var userOut = JSON.parse(localStorage.getItem('personDetails'));

    profileName = userOut[0].username;

    userHeading.text('Welcome ' + profileName + '!');

}

function addDogsToProfile () {

    var userOut = JSON.parse(localStorage.getItem('personDetails'));

    var dogs = userOut[0].dogsRegistered;

    if (dogs == null) {

        var text = '<p>You have not registered a Dog! follow the prompts to register your first dog to your profile</p>';
        
        displayDogsEL.append(text);
    }

    dogs.forEach(dog => {

        var dogNameEL = '<h5>'+ dog.dogName +'</h5>'
        var dogAttributesEL = '<ul><li class="has-text-weight-normal">Age: '+ dog.age +'</li><li class="has-text-weight-normal">Breed: '+ dog.breed +'</li></ul>';

        displayDogsEL.append(dogNameEL);
        displayDogsEL.append(dogAttributesEL);
        
    });

};



checkLogin();
addUserName();
addDogsToProfile();