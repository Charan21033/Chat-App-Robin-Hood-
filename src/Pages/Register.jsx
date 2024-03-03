

const Register = () => {
  return (
    <div className="formContainer" >
        <div className="formWrapper" >
            <span className="logo" >Robin Hood</span>
            <span className="title" >Register</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="file"  />
                <button>Sign up</button>
                <p>You do have account? Login</p>
            </form>
        </div>
    </div>
  )
}

export default Register