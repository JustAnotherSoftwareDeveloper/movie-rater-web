# Movie Rater Web UI

This is a web UI that  allows users to rate movies. It is meant to be used in conjunction with the [movie rater ws](https://github.com/JustAnotherSoftwareDeveloper/movie-rater-ws) project. The application runs at port 4200, and assumes the ws is running at port 3000. Note that due to this being a development project, I am simply using ng serve to develop. I would obviously not do this in a production environment. 


# Technologies Used

 - Angular - Angular is what I use at work, and since I was timeboxing myself I just stuck with it. In the future, I might write a companion UI in vue.js. While Angular is not as "hot" as React or Vue, it is still the 2nd most popular framework. I don't feel like I'm unjustified in using it. 
 - Bootstrap - Bootstrap is a great styling framework. The 4th iteration has modern css feature support, and overall I enjoy the way it looks. 
 - ng-bootstrap - This is the angular-bootstrap integration library that bootstrap recommends. 
 - ngx-datatable - Any decent amount of data will do better with some sort of table framework. I used to use ngx-datable at work. I actually hated it. There are a lot of issues with this component when working with any reasonably sized amount of data. However, for small and simple datasets it's very quick to develop. 
 - ng-select - ng-bootstrap's autocomplete is awful. I've found ng-select as a great alternative. 
## To Install
Run 
    npm ci
This will download files according to my package-lock.json 
At that point you can run following command:

    npm run start
Note this is not meant for production deployment.
## Disclaimer

This was a small project I finished in a weekend. It is missing a lot of stuff I would consider essential in a production level application. This includes:

 - ANY TESTING
 - A login feature
 - Editing of Categories
 - User specific movies/categories
 - 

### If you have any questions, feel free to contact me
