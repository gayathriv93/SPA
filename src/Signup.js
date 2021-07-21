function Signup() {
    return (
        <div>
            <form>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <div className='row m-2'>
                        
                        <label className='col-2' htmlFor="email"><b>Email : </b></label>
                        <input className='col-2' type="text" placeholder="Enter Email" name="email" required />

                    </div>
                    <div className='row m-2'>
                        <label className='col-2' htmlFor="psw"><b>Password:</b></label>
                        <input className='col-2' type="password" placeholder="Enter Password" name="psw" required />

                    </div>
                    <div className='row m-2'>
                        <label className='col-2' htmlFor="psw-repeat"><b>Repeat Password:</b></label>
                        <input className='col-2' type="password" placeholder="Repeat Password" name="psw-repeat" required />

                    </div>



                    <div className="clearfix ">
                        <button className='btn btn-primary m-4' type="button" >Cancel</button>
                        <button className='btn btn-primary m-4' type="submit" >Sign Up</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Signup;