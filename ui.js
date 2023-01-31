class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
            <div class = "row">
                <div class = "col-md-3">
                    <img class = "img-fluid mb-2" src ="${user.avatar_url}">
                    <div class="text-center">
                        <a href ="${user.html_url}" target ="_blank" class = "btn btn-outline-primary">View Profile</a>  
                    </div>    
                </div>
                <div class = "col-md-9">
                    <span class= "badge bg-dark">Public Repos = ${user.public_repos}</span>
                    <span class= "badge bg-dark">Public Gists = ${user.gists}</span>
                    <span class= "badge bg-success">Followers = ${user.followers}</span>
                    <span class= "badge bg-info">Following = ${user.following}</span>
                    <br><br>
                    <ul class ="list-group">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                        <li class="list-group-item"><a href=${user.blog}>
                        <p class ="text-justify">Website/Blog</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
       
        `;

    }


    clearFields(){
        this.profile.innerHTML = '';
    }
}