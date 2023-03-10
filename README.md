# Notes-App

To run, download the package and npm i node. Then: node server.js . 

Here I've made a straightforward app that can be used for taking notes. The app is is made in Node and Express, and leverages the mongoose module to handle much of the API functionality. The data is stored on MongoDB's cloud service Atlas.  I will use Postman here to demonstrate the endpoints. 
  
I will mention that I have provided error handling for most of the functions. I do not show that here just to save space, but stuffice it to say that most of the 
wrong inputs a user could put in have an appropriate error response. 

Onto showing the API endpoints!

<b>POST: Every note creation has a unique id associated with it, given to use by default by mongoose.</b>
![image](https://user-images.githubusercontent.com/122057790/211212704-2c5b5ac1-12e7-4e06-932c-51751843b98b.png)

<b>GET: get-all returns all of our notes.</b>
![image](https://user-images.githubusercontent.com/122057790/211212905-883d7d87-ad19-4ef5-b5ab-49206fdf9b98.png)

<b>GET: We can retrieve any particular note with the noteId.</b>
![image](https://user-images.githubusercontent.com/122057790/211213017-094f5f16-3f75-422f-9038-73c7c48baef9.png)

<b>PUT: Editing a note with Id.</b>
![image](https://user-images.githubusercontent.com/122057790/211213106-1e590ebe-7d52-426f-90d7-77f1c8af17c5.png)

<b>GET: The search function works by finding any matching keywords within the note contents, not the Id.</b>
![image](https://user-images.githubusercontent.com/122057790/211213142-114181b5-2866-4c52-8cca-2eb5f7d7d9ed.png)

<b>DELETE: Finally, we can delete by a particular note Id.</b>
![image](https://user-images.githubusercontent.com/122057790/211213159-6884947f-fcd7-4441-846e-910a5bf2d764.png)


  
  <b>TODO</b>
  Currently, I am working on two further functionalities: 
  
  1.) Refactoring the POST function so that it can either take in a single {note: String} JSON object (see my model file) <b><i>or</i></b> an array
  of multiple notes: i.e.: {["batch": {"note1": "first"}, {"note2": "second"}, ..., {"note3": "third"}]} . Getting mongoose to properly parse that object has been
  challenging. I can get the array itself to pass, but not its contents. 
  
  2.) Similarly, refactoring the DELETE function to delete an array of Ids, such as {[{"note":"id",...,"note":"id"}]}.
  
  <b>Further goals</b>:

The next logical step is to of course connect this back end with a front end. Given the current tech in the stack, React seems like a clear choice here. Additionally, unit testing would be a good addition, even for a small project.
