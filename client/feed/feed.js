document.addEventListener('DOMContentLoaded', ()=>{
    getAllPosts();
    const newPostSubmit = document.querySelector('#submitPost')
    newPostSubmit.addEventListener('click', getNewPostInfo);
})

//get all posts function for the feed once user page is loaded
const getAllPosts = async () => {
    console.log('page has loaded');
    let postsURL = `http://localhost:8080/posts/all` 
    try{
      let postsArr =  await axios.get(postsURL).then((response)=> {return response.data.payload});
    //   console.log(postsArr)
      createCard(postsArr);

     
    } catch (error){
        console.log(error)
    }
    
}

//displays the card on the site
const displayCard = (un,url,cap,id) => { 
    const feedDiv = document.querySelector('#feedContent')
    
    const postDiv = document.createElement('div');
    postDiv.id = id;
    postDiv.setAttribute('class', 'post');
    const usernameTag = document.createElement('h3');
    usernameTag.innerText = un
    const image = document.createElement('img')
    image.src = url
    const caption = document.createElement('p')
    caption.innerText = '\t' + cap
    
    let likeButton = document.createElement('i')
    likeButton.className ="far fa-heart"
    
    caption.prepend(likeButton)
    
    postDiv.append(usernameTag, image, caption);
    feedDiv.appendChild(postDiv)
    getLikes(id)
}

//create card 
const createCard = (postsArr) => {
    for(let i =0; i < postsArr.length; i++){
        let id = postsArr[i].id
        let username = postsArr[i].username
        let imageurl = postsArr[i].imgurl
        let imgCaption = postsArr[i].caption

        displayCard(username, imageurl, imgCaption, id)
        }
}

const getNewPostInfo = () => {
    const username = 'SuzetteIslam'
    const newImgURL = document.querySelector('#newPostURL').value
    const newCaption = document.querySelector('#newPostCaption').value
    postToDB(username, newImgURL, newCaption)
    displayCard(username, newImgURL, newCaption)
}

const postToDB = async (username, newImgURL, newCaption) =>{
    let newPostURL = `http://localhost:8080/posts/register` 
    try{
        await axios.post(newPostURL, {imgURL: newImgURL, caption: newCaption, username: username});
    } catch (error) {
        console.log(error)
    }
}

const getLikes = async (id) => {
    let likePosts = `http://localhost:8080/likes/${id}`;
    try{
        await axios.get(likePosts)
        .then((response) => {
            console.log(response.data.payload.length)
            let likesLength = response.data.payload.length
            let likes = document.createElement("p");
            likes.innerText = likesLength
            let div = document.getElementById(id);
            div.appendChild(likes)
         })
    } catch (error) {
        console.log(error)
    }
}

     
const postLike = async (id) => {
    console.log("hi")
    let likeLink = `http://localhost:8080/likes/${id}`
    try{
         await axios.post(likeLink, {post_id: id, liker_name: 'SuzetteIslam'})
    } catch (error) {
        console.log(error);
    }
}

