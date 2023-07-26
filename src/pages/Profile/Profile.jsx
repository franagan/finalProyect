import React from 'react';
import { useAuth } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useAuth();
    console.log(user);

    if (!user) {
        return <p>Cargando...</p>;
    } else {
        return (
            <>
                <h2>userValue</h2>
                <h3>Hola {user.name} estos son tus datos</h3>
                <p>Email :{user.email}</p>
                <p>Nombre :{user.name}</p>
                <p>Apellido :{user.lastname}</p>
                <p>Direccion :{user.direction}</p>
                <p>Telefono :{user.phone}</p>
            </>
        );
    }
};

export default Profile;
