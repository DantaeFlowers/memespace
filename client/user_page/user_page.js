document.addEventListener('DOMContentLoaded', () =>  {
loadUserPage()
})

function loadUserPage () {
   const url = 'postgress://localhost:5432/databasesql'
   axios
   .get(response => {
      console.log (response.json)
   })
   .get(data => {
      console.log (data)
   })
}