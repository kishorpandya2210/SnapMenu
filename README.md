# SnapMenu

Team Members: Kishor Pandya, Dhrumil Pandya, Madhu Sivapragasam


This project is a reimplementation of Left (https://github.com/apatronl/Left)


# Installation instructions

There are two main ways you can install the app, you can either use the public url to easily access and use the application (recommended) or you can install and set up the application locally on your computer. It is recommended that you use the public url so that you don't need to setup accounts for our different services or setup API keys. Instructions for using both options shall be provided below:

## Instructions for public url (recommended)
Simply navigate to https://snap-menu.herokuapp.com/. Click on the register tab to create an account or click on the login tab to login to an existing account. After registering/logging in, you can follow the instructions in the about tab to use the application as intended. 

## Instructions for local setup
If you choose not to use the public url (https://snap-menu.herokuapp.com/), you can setup the application locally by following these steps. Please keep in mind it is recommended to use the public url since it saves you time from having to create several accounts and setup API keys for each account. If you wish to do the local installation without setting up accounts, please make sure you have the following prerequisites completed, and then follow the instructions. 

### Prerequisites:

- Have Node.js installed (The project is confirmed to work with Node.js version 14.17.3)
Create the following accounts or alternatively send a message to Madhu Sivapragasam (sivapram@mcmaster.ca) and he can provide the relevant keys needed from these accounts:
    - Create a cloudinary account at https://cloudinary.com/users/register/free
    - Create a mongodb account and then create a mongodb cluster which will be used as the project database, this can be done at https://www.mongodb.com/cloud/atlas/register/
    - Create a clarifai account at https://portal.clarifai.com/signup
    - Create a spoonacular account at https://spoonacular.com/food-api/console#Dashboard

### Instructions:

1. Clone this repository
2. Run `npm install` in project src folder to install dependencies, `cd` into the src/client folder and run `npm install` again to install client dependencies. Then cd back into the project src folder. 
3. Create a .env file in the project root and add the following fields by using the keys from the mongodb, cloudinary account, clarifai and spoonacular account. Also add a custom JWT secret key that you can choose. 
```
MONGODB_URI=mongodb+srv://user:password@cluster0.example.mongodb.net/<data>?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=XXXXXX
CLOUDINARY_API_KEY=XXXXXXXXX
CLOUDINARY_API_SECRET=XXXXXXXXXXXXXXX
CLARIFAI_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SPOONACULAR_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
JWT_SECRET=MySecretPassword
```
4. You can now run the project by running `npm run dev` in the project src folder which will run the client at `localhost:3000` and the server at `localhost:5000`. 
5. You can either test the endpoints using the client or you use postman or a similar service to test endpoints directly through the server.  
6. Feel free to reach out to any of the developers if you need any help. 
