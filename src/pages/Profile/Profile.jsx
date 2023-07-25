const Profile = ({ user }) => {
    console.log(user);

    return (
        <>
            <h3>Hola {user.name} estos son tus datos</h3>
            <p>Email :{user.email}</p>
            <p>Nombre :{user.name}</p>
            <p>Apellido :{user.lastname}</p>
            <p>Direccion :{user.direction}</p>
            <p>Telefono :{user.phone}</p>
        </>
    );
};

export default Profile;
