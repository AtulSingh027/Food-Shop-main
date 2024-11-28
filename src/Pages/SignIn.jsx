import React from 'react';
import "./SignIn.css"
export default function SignIn()
{
 return(
    <div class="signin-container">
    <h1>Sign In</h1>
    <form>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
        </div>
        <div class="forgot-password">
            <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="signin-btn">Sign In</button>
        <div class="signup-link">
            Don't have an account? <a href="#">Sign Up</a>
        </div>
    </form>
</div>
 )
}