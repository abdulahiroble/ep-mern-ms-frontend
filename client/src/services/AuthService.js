
const isLoggedIn = ()=>{
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('admin');

  console.log("TOKEN====",token)
  console.log("ID===",localStorage.getItem('userId'))
  if(!token){
    return {
      authenticated : false,
      id : null
    };
  }

  return {
    authenticated : true,
    id : localStorage.getItem('userId'),
    isAdmin : JSON.parse(isAdmin)
  };
}
  
const AuthService = {
  isLoggedIn
}

export default AuthService
  

