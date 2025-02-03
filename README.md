Dear Sir,
I am submitting the assignment you provided. Since I am not very experienced with this tech stack, 
I encountered several challenges while working on it, as I was learning through implementation. 
To assist me in the process, I referred to various resources such as GeeksForGeeks, ChatGPT, and others.

Backend Implementation:
I was able to understand most of the backend functionality and successfully implemented JWT authentication, 
VirusTotal API, and Sapling API. However, despite setting up everything correctly, I faced an issue with MongoDB Atlas. 
The application throws an error stating, "URI is not specified in the environment variable." 
Although I have already declared the URI in the .env file, I was unable to determine what is missing.

The backend follows the following structure:

Config Folder: Handles the configuration for JWT and the database.
Controllers: Contains logic for handling requests (authController, urlController, textController).
Models: Defines the database schema (user, urlScan, textChecker).
Routes: Contains API route definitions.
At the moment, the backend is not starting due to the aforementioned database connection issue.

Frontend Implementation:
I have created a basic UI to cover all required functionalities.
