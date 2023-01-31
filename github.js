class Github {
    constructor() {
        this.client_id = 'bcb8a79b57cdbcfd0bed';
        this.client_secret = '2eb14d63d8eeddf9d402d994cbb25bea8861c9bf';
    }


    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();


        

         return {
             profile 
         }
    }

    

}



