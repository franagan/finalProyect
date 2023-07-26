import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`https://backfinalproyect.vercel.app/user/${userId}`);
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

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://backfinalproyect.vercel.app/user/${id}`);
      sessionStorage.removeItem('token');

    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  const handleDeleteClick = () => {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta?');
    if (confirmed) {
      deleteUser(userId).then(() => {
        logout();
      }).catch((error) => {
        console.error('Error al eliminar el usuario:', error);
      });
    }
  };

  return (
    <div className="profile-card">
      <h3>Hola {user.name}, estos son tus datos:</h3>
      <p>Email: {user.email}</p>
      <p>Nombre: {user.name}</p>
      <p>Apellido: {user.lastname}</p>
      <p>Teléfono: {user.phone}</p>

      <NavLink to={`/editProfile/${userId}`} className="btn btn-primary">Editar Perfil</NavLink>
      <button className="btn btn-primary" onClick={handleDeleteClick}>Eliminar Usuario</button>
    </div>
  );
};

export default Profile;