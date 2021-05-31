import React from 'react';

function form() {
    return (
   <form action="/register" method="POST">
       <div className="form-inner">
        <h2>Login</h2>
       </div>
        <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username"  />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Register" id="submit_btn"/>
   </form>
    )
}

export default form
