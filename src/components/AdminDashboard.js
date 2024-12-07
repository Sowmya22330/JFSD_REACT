import React, { useState, useEffect } from "react";
import axios from "axios";
import './AdminDashboard.css'; // Optional CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTasks, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // For navigation

function AdminDashboard() {
    const navigate = useNavigate(); // Initialize navigation
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', status: 'Pending' },
        { id: 2, title: 'Task 2', status: 'Completed' },
    ]); // Hardcoded task list
    const [showConfirm, setShowConfirm] = useState(false);
    const [emailToDelete, setEmailToDelete] = useState("");

    // Fetch users from the backend when the component loads
    useEffect(() => {
        fetchUsers();
    }, []);

    // Fetch user data from backend
    function fetchUsers() {
        axios.get("http://localhost:8080/api/users")
            .then((res) => {
                setUsers(res.data); // Populate the result state with fetched data
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
            });
    }

    // Handle user delete
    function handleDelete(event) {
        const email = event.currentTarget.getAttribute("em");
        setEmailToDelete(email);
        setShowConfirm(true); // Show the confirmation modal
    }

    // Confirm delete
    function confirmDelete() {
        axios.delete("http://localhost:8080/api/delete", {
            params: { email: emailToDelete }
        }).then(() => {
            fetchUsers(); // Refresh the user list after deletion
            setShowConfirm(false); // Close the confirmation modal
        }).catch((err) => {
            console.error("Error deleting user: ", err);
        });
    }

    // Cancel delete action
    function cancelDelete() {
        setShowConfirm(false); // Close the confirmation modal without deleting
    }

    // Handle user edit
    function handleEdit(event) {
        const email = event.currentTarget.getAttribute("em");
        const name = event.currentTarget.getAttribute("name");
        const password = event.currentTarget.getAttribute("pass");
        const userType = event.currentTarget.getAttribute("userType");

        // Set the update fields
        document.getElementById("idemail").value = email;
        document.getElementById("idname").value = name;
        document.getElementById("idpass").value = password;
        document.getElementById("iduserType").value = userType;

        // Show the update section
        document.getElementById("idupdate").style.display = "block";
    }

    // Handle user update
    function handleUpdate() {
        const email = document.getElementById("idemail").value;
        const name = document.getElementById("idname").value;
        const password = document.getElementById("idpass").value;
        const userType = document.getElementById("iduserType").value;

        axios.put("http://localhost:8080/api/update", {
            email, name, password, userType
        }).then(() => {
            fetchUsers(); // Refresh the user list after update
            document.getElementById("idupdate").style.display = "none"; // Hide the update section
        }).catch((err) => {
            console.error("Error updating user:", err);
        });
    }

    // Function to handle logout
    const handleLogout = () => {
        alert('You have been logged out.');
        navigate('/login'); // Redirect to the login page
    };

    // Function to manage tasks (future feature)
    const handleManageTasks = () => {
        alert('Navigating to task management (future feature).');
    };

    // Function to view analytics (future feature)
    const handleAnalytics = () => {
        alert('Analytics dashboard will show performance metrics (future feature).');
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar Navigation */}
            <aside className="dashboard-sidebar">
                <h2>Admin Panel</h2>
                <nav>
                    <ul>
                    <li onClick={() => navigate('/manageusers')}>
                            <FontAwesomeIcon icon={faUsers} /> Manage Users
                        </li>
                        <li onClick={handleManageTasks}>
                            <FontAwesomeIcon icon={faTasks} /> Manage Tasks
                        </li>
                        <li onClick={handleAnalytics}>
                            <FontAwesomeIcon icon={faChartLine} /> Analytics
                        </li>
                        <li onClick={handleLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <header>
                    <h1>Welcome, Admin</h1>
                </header>

                {/* Dashboard Cards */}
                <section className="dashboard-cards">
                    <div className="card">
                        <FontAwesomeIcon icon={faUsers} size="3x" />
                        <h3>{users.length}</h3>
                        <p>Total Users</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faTasks} size="3x" />
                        <h3>{tasks.filter((task) => task.status === 'Pending').length}</h3>
                        <p>Pending Tasks</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faChartLine} size="3x" />
                        <h3>75%</h3>
                        <p>Performance</p>
                    </div>
                </section>

                {/* User Management Section */}
                <section className="management-section">
                    <h2>Manage Users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>USER TYPE</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((obj) => (
                                <tr key={obj.email}>
                                    <td>{obj.name}</td>
                                    <td>{obj.userType}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.password}</td>
                                    <td>
                                        <button
                                            className="edit-btn"
                                            onClick={handleEdit}
                                            em={obj.email}
                                            name={obj.name}
                                            pass={obj.password}
                                            userType={obj.userType}
                                        >
                                            ✎ Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="delete-btn"
                                            onClick={handleDelete}
                                            em={obj.email}
                                        >
                                            🗑 Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Update Section */}
                    <div style={{ display: "none" }} id="idupdate">
                        <label>Email: <input type="text" id="idemail" disabled /></label>
                        <label>Name: <input type="text" id="idname" /></label>
                        <label>Password: <input type="password" id="idpass" /></label>
                        <label>User Type: <input type="text" id="iduserType" /></label>
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </section>

                {/* Custom Confirmation Modal */}
                {showConfirm && (
                    <div className="confirm-modal">
                        <p>Are you sure you want to delete this user?</p>
                        <button onClick={confirmDelete}>Yes</button>
                        <button onClick={cancelDelete}>No</button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default AdminDashboard;
