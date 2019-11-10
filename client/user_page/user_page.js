document.addEventListener('DOMContentLoaded', () =>  {
   console.log("running ")
loadUserPage()
})

async function loadUserPage () {
   const url = 'http://localhost:8080/users/'
      console.log('page has loaded');
      try{
        let userArr =  await axios.get(url).then((response)=> {return response.data.payload});
        //console.log (userArr)
        for(let i =0; i < userArr.length; i++){
        let username = (userArr[i].username)
        //console.log(username)
        }
        console.log(response)
        return response
      } catch (error){
          console.log(error)
      }
  }

  async function fetchUsername () { 

  }