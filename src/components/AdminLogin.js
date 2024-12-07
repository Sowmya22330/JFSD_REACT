import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Optional CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faLock, faHome } from '@fortawesome/free-solid-svg-icons';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = (e) => {
        e.preventDefault();

        // Hardcoded admin credentials
        const adminUsername = 'admin';
        const adminPassword = 'admin123';

        if (username === adminUsername && password === adminPassword) {
            alert('Admin login successful');
            navigate('/admin/dashboard'); // Redirect to the admin dashboard
        } else {
            alert('Invalid admin credentials');
        }
    };

    return (
        <div className="admin-login-container">
            <h2>
                <FontAwesomeIcon icon={faUserShield} /> Admin Login
            </h2>
            <form onSubmit={handleAdminLogin} className="admin-login-form">
                <div className="input-container">
                    <FontAwesomeIcon icon={faUserShield} className="input-icon" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            <div className="navigation-links">
                <button className="home-button" onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faHome} /> Back to Home
                </button>
            </div>
        </div>
    );
}

export default AdminLogin;
