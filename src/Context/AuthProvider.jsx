import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const UserListContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const useUserList = () => useContext(UserListContext);

const AuthProvider = ({ children }) => {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  const [formUser, setFormUser] = useState(INITIAL_STATE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = sessionStorage.getItem('token');
        setIsLoggedIn(!!storedToken);

        const response = await axios.get('https://backfinalproyect.vercel.app/user/idEmail');
        const usersData = response.data;
        if (Array.isArray(usersData)) {
          setUsers(usersData);

          if (isLoggedIn && usersData.length > 0) {
            const decodedToken = JSON.parse(atob(storedToken.split('.')[1]));
            const email = decodedToken.email;
            const foundUser = usersData.find((user) => user.email === email);
            setCurrentUser(foundUser);
            if (foundUser) {
              const userUserId = foundUser._id;
              setUserId(userUserId);
            }
          }
        } else {
          console.error('La respuesta no contiene una lista de usuarios válida:', usersData);
        }
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  const loginUser = async (email, password) => {
    try {
      if (!email || !password) {
        setError('Debes ingresar un email y una contraseña.');
        return false;
      }

      const response = await fetch('https://backfinalproyect.vercel.app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setFormUser(INITIAL_STATE);
        setError('');
        navigate('/');
        return true;
      } else {
        const data = await response.json();
        setError(data.message || 'Usuario o contraseña incorrectos');
        return false;
      }
    } catch (error) {
      setError('Error de inicio de sesión');
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const getUserIdByEmail = (email) => {
    const foundUser = users.find((user) => user.email === email);
    return foundUser ? foundUser._id : null;
  };

  if (loading) {
    return <div>Iniciando sesión...</div>;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login: loginUser, logout, formUser, currentUser, userId, getUserIdByEmail }}>
      <UserListContext.Provider value={{ users }}>
        {children}
      </UserListContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;