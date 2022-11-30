
const isLoggedIn = ()=>{
  const token = localStorage.getItem('token');

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
    id : localStorage.getItem('userId')
  };
}
  
const AuthService = {
  isLoggedIn
}

export default AuthService
  

