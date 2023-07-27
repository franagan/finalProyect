import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import "./RegisterSeller.css";

const RegisterSeller = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [imagen, setImagen] = useState(null);

    const handleImagenChange = (e) => {
        const selectedImagen = e.target.files[0];
        setImagen(selectedImagen);
    };

    const result = async (data) => {
        try {
            console.log(data);
            const res = await axios.post(
                'https://backfinalproyect.vercel.app/store/'
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(result)} className="formRegister">
                <label>Nombre:</label>
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register('name', {
                        required: 'el nombre no puede estar vacio',
                    })}
                />
                {errors.name && <p>{errors.name.message} </p>}
                <label>direccion:</label>
                <input
                    type="text"
                    placeholder="direccion"
                    {...register('direction', {
                        required: 'la direccion no puede estar vacia',
                    })}
                />
                {errors.direction && <p>{errors.direction.message} </p>}
                <label>year :</label>
                <input
                    type="number"
                    placeholder="phone"
                    {...register('phone', {
                        required: 'el telefono no puede estar vacio',
                    })}
                />
                {errors.phone && <p>{errors.phone.message} </p>}
                <label>Ciudad:</label>
                <input
                    type="text"
                    placeholder="ciudad"
                    {...register('city', {
                        required: 'la ciudad no puede estar vacia',
                    })}
                />
                {errors.city && <p>{errors.city.message} </p>}
                <label>Provincia:</label>
                <input
                    type="text"
                    placeholder="provincia"
                    {...register('province', {
                        required: 'la provincia no puede estar vacia',
                    })}
                />
                {errors.province && <p>{errors.province.message} </p>}
                <label>Imagen:</label>
                <input
                    type="file"
                    name="imagen"
                    onChange={handleImagenChange}
                />
                <label>Descripcion:</label>
                <input
                    type="text"
                    placeholder="descripcion"
                    {...register('description', {
                        required: 'la descripcion no puede estar vacia',
                    })}
                />
                {errors.descrption && <p>{errors.descrption.message} </p>}
                <label>Web:</label>
                <input
                    type="text"
                    placeholder="web"
                    {...register('web', {
                        required: 'la web no puede estar vacia',
                    })}
                />
                {errors.web && <p>{errors.web.message} </p>}
                <label>Mail:</label>
                <input
                    type="text"
                    placeholder="mail"
                    {...register('mail', {
                        required: 'el mail no puede estar vacio',
                    })}
                />
                {errors.mail && <p>{errors.mail.message} </p>}
                <label>Ciudad:</label>
                <label htmlFor="category">Selecciona una opción:</label>
                <select
                    id="category"
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    <option value="">Seleccionar</option>
                    <option value="peluquerias">Peluquerias</option>
                    <option value="fruterias">Fruterias</option>
                    <option value="zapaterias">Zapaterias</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default RegisterSeller;
