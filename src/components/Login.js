import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (storedUserDetails) {
            setProfile(storedUserDetails);
        }
    }, []);

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            console.log("Sending credentials:", { email, password, role });

            const response = await axios.post(
                'http://localhost:8080/api/signin',
                { email, password, role },
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log("Response received:", response);

            if (response.status === 200) {
                const { name, email, role } = response.data;
            
                // Store user details in localStorage
                const userDetails = { name, email, role };
                localStorage.setItem('userDetails', JSON.stringify(userDetails));
                console.log("Stored user details:", userDetails);  // Log to check
            
                setProfile(userDetails);  // Update profile state
                alert('Login successful');
                // Redirect based on role
                if (role === 'artisan') {
                    navigate('/add-product');
                } else {
                    navigate('/home');
                }
            }else {
                alert('Sign-in failed. Status: ' + response.status);
            }
        } catch (error) {
            console.error('Sign-in error:', error);
            alert(error.response?.data?.message || 'Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userDetails');
        setProfile(null);
        navigate('/signin');
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Sign In</h2>
            <form onSubmit={handleSignIn} className="login-form">
                <div className="input-group">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="role" className="input-label">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="input-field"
                    >
                        <option value="user">User</option>
                        <option value="artisan">Artisan</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button type="submit" className="sign-in-button">
                    <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                </button>
            </form>

            <button type="button" onClick={() => navigate('/adminlogin')} className="admin-button">
                <FontAwesomeIcon icon={faUserShield} /> Admin Login
            </button>

            {profile && (
                <div className="profile-container">
                    <h3>Welcome, {profile.name}!</h3>
                    <p>Email: {profile.email}</p>
                    <p>Role: {profile.role}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

            <div className="signup-link">
                <p>
                    Don't have an account? <Link to="/Signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
