import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.put(`https://backfinalproyect.vercel.app/user/${userId}`, formData);
      setSubmitMessage('Datos actualizados exitosamente');
      console.log('Datos actualizados:', response.data);
      navigate(`/profile/${userId}`);
    } catch (error) {
      setSubmitMessage('Error al actualizar los datos del usuario');
      console.error('Error al actualizar los datos del usuario:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="edit-profile-form">
      <h3>Editar Datos del Usuario</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Guardando...' : 'Guardar Cambios'}
        </button>
        {submitMessage && <p>{submitMessage}</p>}
      </form>
    </div>
  );
};

export default EditProfile;