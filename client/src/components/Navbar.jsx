import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function Navbar () {
    const { isAuthenticated, logout, user} = useAuth()
    

    return (
       <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
        <Link to={
          isAuthenticated ? "/tasks" : "/"
        }>
            <h1 className='text-2xl font-bold'>BOGA</h1>
        </Link>
        <ul className='flex gap-x-2'>
            {isAuthenticated ? (
            <>
            <li>
              Bienvenido a BOGA {user.username}
            </li>
            <li>
              <Link to='/add-task'
              className='bg-indigo-500 px-4 py-1 rounded-sm'
              >Añade una nota </Link>
            </li>
            <li>
              <Link to='grafica'
              className='bg-indigo-500 px-4 py-1 rounded-sm'
              >estadisticas</Link>
            </li>
            <li>
              <Link to='/'
              onClick={() => {
                logout();
              }}
              >
                Cerrar sesión</Link>
            </li>
            </>
            
            ) :(
              
            <>
            <li>
              <Link to='/login'
              className='bg-indigo-500 px-4 py-1 rounded-sm'
              >Iniciar</Link>
            </li>
            <li>
              <Link to='/register'
              className='bg-indigo-500 px-4 py-1 rounded-sm'
              >Registrar</Link>
            </li>
            </>
            )}
        </ul>
       </nav>
    )
}

export default Navbar