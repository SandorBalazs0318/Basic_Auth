import apiClient from '../api/apiClient';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const datas = btoa(`${username}:${password}`);
        sessionStorage.setItem('auth', datas);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl mb-4">Bejelentkezés</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Felhasználónév"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2"
                />
                <input
                    type="password"
                    placeholder="Jelszó"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Belépés
                </button>
            </form>
        </div>
    );
}

export default Login;
