// int github 
const github = new Github;

//int UI class
const ui = new UI;

//search input

const searchUser = document.getElementById('searchUser');


// search input event listener

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    if(userText !== ''){
        github.getUser(userText)
        .then(data => 
            {
                if(data.profile.message === 'Not Found'){
                    //show Alert
                }else{
                    //Show Profile
                    ui.showProfile(data.profile);

                }
            });
    }else{
        //clearProfile
        ui.clearFields();
    }
    
})