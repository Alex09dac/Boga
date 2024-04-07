import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage(){

    const {register, handleSubmit, formState: {errors}, } = useForm ();
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    return(
        
        <div className='flex h-screen items-center justify-center'>

            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            {
                signinErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                        {error}
                    </div>
                ))
            }   
            


                <h1 className='text-2xl font-bold'>Iniciar sesion</h1>
                <form onSubmit={onSubmit}> 
                        
                    <input type="email" {...register('email', {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'/>
                        {
                            errors.email && ( <p className='text-red-500'>email is requerid</p> )
                        }

                    <input type="password" {...register('password', {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='password'/>
                        {
                            errors.password && ( <p className='text-red-500'>password is requerid</p> )
                        }
                        <br/>
                    <button type="submit"
                    className='bg-sky-500 hover:bg-green-400 text-white px-4 py-2 rounded-md my-2'>
                        Iniciar
                    </button>
                    <br/>
                    <br/>
                </form>

                <p className='flex gap-x-2 justify-between'>
                    ¿No tienes una cuenta aun? <Link to='/register' className='text-sky-500'>Crear cuenta</Link>
                </p>
                <br />
                <p className='flex gap-x-2 justify-between'>
                ¿Olvidastes tu contraseña? <Link to='' className='text-sky-500'>Recuperar</Link>
                </p>
            </div>
       </div>
    )
}

export default LoginPage;