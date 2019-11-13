document.addEventListener('DOMContentLoaded', () =>  {
   console.log("running ")
loadUserInfo();
loadPost();
})


async function loadUserInfo () {
   const url = 'http://localhost:8080/users/2'
      console.log('page has loaded');
      try{
        
         let user2 =  await axios.get(url)
        
        .then((response)=> 
        
        {return response.data.payload});
        
        //console.log("user2", user2)
        

        createUserCard(user2)


      } catch (error){
          console.log(error)
      }
  }

async function loadPost() {
   const url = 'http://localhost:8080/posts/all'
      console.log('posts has loaded');
      try{
        let postArr =  await axios.get(url)
        .then((response)=> 
        {return response.data.payload});
        createPostCard (postArr)
       
      } catch (error){
          console.log(error);
      };
  };

const createPostCard = (postsArr) => {
   for(let i =0; i < postsArr.length; i++){
      if (postsArr[i].username === 'SuzetteIslam'){
       let username = postsArr[i].username
       let imageurl = postsArr[i].imgurl
       let imgCaption = postsArr[i].caption
       displayPostCard(username, imageurl, imgCaption)
       }
      }
}

function createUserCard (user) {
   //console.log("user", user)
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

  const displayPostCard = (un,url,cap) => { 
   const userDiv = document.querySelector('#userFeed')
   const postDiv = document.createElement('div');
   postDiv.setAttribute('class', 'post');
   const usernameTag = document.createElement('h3');
   usernameTag.innerText = un
   const image = document.createElement('img')
   image.src = url
   const caption = document.createElement('p')
   caption.innerText = cap
   
   postDiv.append(usernameTag, image, caption);
   userDiv.appendChild(postDiv)
   
   }