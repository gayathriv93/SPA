// import './Form.css';
function Login() {
    return (
        <div className='row container justify-content-center' >
            <div className='col-5  '>
                <h1>Login to your account</h1>
                <form >
                    <div className='row m-2'>
                        <label className='col-5' for="Username"><b>Username</b></label>
                        <input className='col-7' type="text" name="username" placeholder="username" />
                    </div>
                    <div className='row m-2'>
                        <label className='col-5' for="psw"><b>Password</b></label>
                        <input className='col-7' type="password" name="password" placeholder="password" />
                    </div>
                    <div className='row  justify-content-center my-4'>
                        <div className='col-4 '>
                            <button className='btn btn-primary' type="submit" >Login</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default Login;