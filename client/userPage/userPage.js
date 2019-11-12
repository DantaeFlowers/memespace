document.addEventListener('DOMContentLoaded', () =>  {
   console.log("running ")
loadUserInfo();
//loadPost();
})

async function loadUserInfo () {
   const url = 'http://localhost:8080/users/'
      console.log('page has loaded');
      try{
        
         let userArr =  await axios.get(url)
        
        .then((response)=> 
        
        {return response.data.payload});
        
        console.log(userArr)
        
        createUserCard(userArr)


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

function createUserCard (userArr) {
   for(let i =0; i < userArr.length; i++){
      let userName = (userArr[i].username);
      let userImage = (userArr[i].userimage);
      let email = (userArr[i].email);
      displayUserCard(userName, userImage, email);
      }
}

function displayUserCard (user,url) { 
   const userCardDiv = document.querySelector('#userCard')
   const userDiv = document.createElement('div');
   userDiv.setAttribute ('class', 'img')
   const userName = document.createElement('h2');
   const Img = document.createElement('img');
   //userCard.id = user.fetchUserId; 
   userName.innerText = user;
   Img.src = url;
   userDiv.append(userName, Img);
   userCardDiv.appendChild(userDiv)
  }