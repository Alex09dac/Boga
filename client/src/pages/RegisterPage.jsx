import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState:{ errors} } = useForm();
    const { signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);


    const onSubmit = handleSubmit( async (values)=>{
        signup(values);
    });

    return(        
        <div className='flex h-screen items-center justify-center'>
            
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            {
                registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white my-2' key={i}>
                        {error}
                    </div>
                ))
            }
            <h1 className='text-2xl font-bold'>Registrar</h1>
            <form
             onSubmit={onSubmit}> 
                <input type="text" {...register('username', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' 
                placeholder='Username'/>
                {
                    errors.username && ( <p className='text-red-500'>username is requerid</p> )
                }

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

                <button type="submit"
                className='bg-sky-500 hover:bg-green-400 text-white px-4 py-2 rounded-md my-2'>
                    Registrar
                </button>
            </form>
            <br />
            <p className='flex gap-x-2 justify-between'>
                    ¿Ya tienes una cuenta? <Link to='/login' className='text-sky-500'>Iniciar sesión</Link>
            </p>
        </div>
        </div>
    );
}

export default RegisterPage;