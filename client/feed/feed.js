document.addEventListener('DOMContentLoaded', ()=>{
getAllPosts();
})

//get all posts function for the feed once user page is loaded
const getAllPosts = async () => {
    console.log('page has loaded');
    let postsURL = `http://localhost:8080/posts` 
    try{
      let postsArr =  await axios.get(postsURL).then((response)=> {return response.data.payload});
      console.log(postsArr)
      createCard();

     
    } catch (error){
        console.log(error)
    }
    
}

//get username from database using the poster_id
const getUsername = (poster_id) => {

}

const feedDiv = document.querySelector('#feedContent')

const displayCard = (un,url,cap) => { 
const postDiv = document.createElement('div');
postDiv.setAttribute('class', 'post');
const usernameTag = document.createElement('h3');
usernameTag.innerText = un
const image = document.createElement('img')
image.src = url
const caption = document.createElement('p')
caption.innerText = cap

postDiv.append(usernameTag, image, caption);
feedDiv.appendChild(postDiv)

}

//create card 
const createCard = (postsArr) => {
    for(let i =0; i < postsArr.length; i++){
        let username = getUsername(postsArr[i].poster_id)
        let imageurl = postsArr[i].imgurl
        let imgCaption = postsArr[i].caption
        displayCard(username, imageurl, imgCaption)
        }
}

//get single posts

const getSinglePost = () =>{
    event.preventDefault();
}

// delete single post
const deleteSinglePost = () =>{
    event.preventDefault();
    
}

