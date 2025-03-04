import React from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

const Apihivas = () => {
    const navigate = useNavigate();

    const handleApiCall = async () => {
        const auth = sessionStorage.getItem('auth');
        if (!auth) {
            alert('Nincs bejelentkezve!');
            navigate('/');
            return;
        }

        try {
            const response = await apiClient.get('/');
            const data = await response.json();
            console.log('API válasz:', data);
            alert('Sikeres API hívás');
        } catch (error) {
            console.error('Hiba az API hívás során:', error);
            alert('Hiba történt az API hívás során.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl mb-4">Dashboard</h2>
            <button onClick={handleApiCall} className="bg-green-500 text-white p-2">
                Fiktív API hívás
            </button>
        </div>
    );
};

export default Apihivas;
