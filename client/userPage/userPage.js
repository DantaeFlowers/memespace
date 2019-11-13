document.addEventListener('DOMContentLoaded', () =>  {
   console.log("running ")
loadUserInfo();
})


async function loadUserInfo () {
   const url = 'http://localhost:8080/users/2'
      console.log('page has loaded');
      try{
        
         let user2 =  await axios.get(url)
        
        .then((response)=> 
        
        {return response.data.payload});
        
        console.log("user2", user2)
        

        createUserCard(user2)


      } catch (error){
          console.log(error)
      }
  }

// async function loadPost() {
//    const url = 'http://localhost:8080/posts/all'
//       console.log('page has loaded');
//       try{
//         let postArr =  await axios.get(url)
//         .then((response)=> 
//         {return response.data.payload});
//         createUserCard (Arr)
       
//       } catch (error){
//           console.log(error);
//       };
//   };

// async function fetchUserId () {
//    // const MIN = 1
//    // const MAX = 809
//    const id = Math.floor(Math.random() * (4 - 1) + 1 )
//    //const id2 = Math.floor(Math.random()* MAX) + MIN
//    return id
// };

//...

function createUserCard (user) {
   console.log("user", user)
   //for(let i =0; i < user.length; i++){
      let userName = (user.username);
      let userimage = (user.userimage);
      console.log("user image url",user.userimage )
      let email = (user.email);
      displayUserCard(userName, userimage);
     // }
}

function displayUserCard (user,url) { 
   const userCardDiv = document.querySelector('#userCard')
   const userDiv = document.createElement('div');
   userDiv.setAttribute ('class', 'img')
   const userName = document.createElement('h2');
   const Img = document.createElement('img');
   userName.innerText = user;
   Img.src = url;
   userDiv.append(userName, Img);
   userCardDiv.appendChild(userDiv)
  }