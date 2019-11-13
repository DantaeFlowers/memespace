document.addEventListener('DOMContentLoaded', ()=>{
    getAllPosts();
    const newPostSubmit = document.querySelector('#submitPost')
    newPostSubmit.addEventListener('click', getNewPostInfo);

    let myFeed = document.getElementById("feedContent");
    myFeed.addEventListener("click", (event)=> {
        let id = event.target.parentNode.id;
        console.log(id)
        if(event.target.src) {
            console.log(id)
            postLike(id)
        } else if (event.target.innerText === "Post Comment") {
            console.log("hi Pete")
            postComment(id)
        }
        console.log(event.target)
    })
    

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
    caption.innerText = '\t\t' + '\t' + cap
    let likeButton = document.createElement('i')
    likeButton.className ="far fa-heart"


    
    caption.prepend(likeButton, commentButton)
  
    let numberOfLikes = document.createElement("p");
    numberOfLikes.id = `likes${id}`;
    

    let commentBox = document.createElement("input");
    commentBox.id = `input${id}`
    let commentButton = document.createElement("button");
    commentButton.innerText = "Post Comment"
    commentButton.id = `commentBox${id}`
    



    getLikes(id)
    getComments(id)

    postDiv.append(usernameTag, image, caption, numberOfLikes, commentBox, commentButton);
    feedDiv.appendChild(postDiv)
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
            let numberOfLikes = document.getElementById(`likes${id}`)
            // let likes = document.createElement("p");
            numberOfLikes.innerText = likesLength
            // let div = document.getElementById(id);
            // div.appendChild(likes)
         })
    } catch (error) {
        console.log(error)
    }
}

     
async function postLike(id){
    console.log("hi", id)
    let likeLink = `http://localhost:8080/likes/${id}`
    try{
         await axios.post(likeLink, {post_id: id, liker_name: 'SuzetteIslam'})
         getLikes(id)
    } catch (error) {
        console.log(error);
    }
}

const getComments = async (id) => {
    let comments = `http://localhost:8080/comments/${id}`;
    try {
        await axios.get(comments)
        .then((response) => {
            for (let i of response.data.payload) {
                let comment = document.createElement("p");
                comment.innerText = `${i.commentors_name}: ${i.comment}`;
                let div = document.getElementById(id);
                div.append(comment);
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const postComment = async (id) => {
    let commentLink = `http://localhost:8080/comments/${id}`
    let commentBox = document.getElementById(`input${id}`).value
    try {
        await axios.post(commentLink, {comment: commentBox, post_id: id, commentors_name: "SuzetteIslam"})
        .then ((response) => {
            let commentInfo = response.data.payload;
            console.log(commentInfo)
            let comment = document.createElement("p");
            comment.innerText = `${commentInfo.commentors_name}: ${commentInfo.comment}`;
            let div = document.getElementById(id);
            div.append(comment);

        })

    }catch (error) {
        console.log(error)
    }
}