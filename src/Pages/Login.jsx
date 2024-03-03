import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer" >
        <div className="formWrapper" >
            <span className="logo" >Robin Hood</span>
            <span className="title" >Login</span>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Sign up</button>
                
            </form>
            <p>You don't  have account? Register</p>
        </div>
    </div>
  )
}

export default Login