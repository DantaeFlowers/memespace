document.addEventListener('DOMContentLoaded', ()=>{
getAllPosts();
})

//get all posts function for the feed once user page is loaded
const getAllPosts = async () => {
    console.log('page has loaded');
    let postsURL = `http://localhost:8080/posts` 
    try{
      let postsArr =  await axios.get(postsURL).then((response)=> {return response.payload});
      for(let i =0; i < postsArr.length; i++){
      let imageurl = postArr[i].imgurl
      let username = getUsername(postsArr[i].poster_id)
      }
      console.log(response)
      return response
    } catch (error){
        console.log(error)
    }
}

//get username from database using the poster_id
const getUsername = (poster_id) => {

}

//get single posts

const getSinglePost = () =>{
    event.preventDefault();
}

// delete single post
const deleteSinglePost = () =>{
    event.preventDefault();
    
}

//create card 
const createCard = () => {

}