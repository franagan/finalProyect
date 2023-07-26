import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`/https://backfinalproyect.vercel.app/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    getUserData();
  }, [userId]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="profile-card">
      <h3>Hola {user.name}, estos son tus datos:</h3>
      <p>Email: {user.email}</p>
      <p>Nombre: {user.name}</p>
      <p>Apellido: {user.lastname}</p>
      <p>Dirección: {user.direction}</p>
      <p>Teléfono: {user.phone}</p>
    </div>
  );
};

export default Profile;
