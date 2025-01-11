import React, { useContext, useRef, useState } from 'react';
import style from './AuthPage.module.css';
import { CartContext } from '../../store/CartContext';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
    const context = useContext(CartContext);
    const navigate = useNavigate();
    const userRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();

        // Send login request to backend API
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userRef.current.value,
                password: passRef.current.value,
            }),
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
            context.login(); // Call login function from context
            navigate('/'); // Redirect to home page
        } else {
            // Set error message if credentials are invalid
            setError(data.message || 'Invalid username or password. Please try again.');
        }
    };

    return (
        <>
            <h1 className={style.heading}>Pallavi's Store</h1>
            <div className={style.main}>
                <h2>Login</h2>
                <form onSubmit={loginHandler}>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" name="username" ref={userRef} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" ref={passRef} />
                    <button type="submit">Login</button>
                </form>
                {error && <p className={style.error}>{error}</p>} {/* Display error message if any */}
            </div>
        </>
    );
}
