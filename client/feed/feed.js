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
const displayCard = (un,url,cap) => { 
    const feedDiv = document.querySelector('#feedContent')
    const postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'post');
    const usernameTag = document.createElement('h3');
    usernameTag.innerText = un
    const image = document.createElement('img')
    image.src = url
    const caption = document.createElement('p')
    caption.innerText = '\t\t' + '\t' + cap
    let likeButton = document.createElement('i')
    likeButton.className ="far fa-heart"

    let commentButton = document.createElement('i')
    commentButton.className = "far fa-comment-alt"


    
    caption.prepend(likeButton, commentButton)
    
    postDiv.append(usernameTag, image, caption);
    feedDiv.appendChild(postDiv)

}

//create card 
const createCard = (postsArr) => {
    for(let i =0; i < postsArr.length; i++){
        // let postDiv = document.querySelector('.post')
        let username = postsArr[i].username
        // if(username === null) {
        //     username = "SuzetteIslam"
        // }
        let imageurl = postsArr[i].imgurl
        let imgCaption = postsArr[i].caption
       
        displayCard(username, imageurl, imgCaption)
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

