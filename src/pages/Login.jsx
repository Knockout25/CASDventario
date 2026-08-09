import Input from '../components/ui/Input';
import LogoWhite from '../assets/casdventario-white-logo.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="flex items-center justify-center w-1/2 bg-cyan-600">
          <img className="w-72 select-none" src={LogoWhite} alt="" srcset="" />
        </aside>
        <main className="flex flex-1 items-center justify-center">
          <div className="flex flex-col w-full px-32 space-y-6">
            <h2 className="text-center text-3xl font-bold">Entrar</h2>
            <Input text={'Email'} type={'email'} id={'email'} />
            <div className="space-y-1">
              <Input text={'Senha'} type={'password'} id={'user-password'} />
              <p className="text-xs text-gray-500">
                *A senha deve ter pelo menos 8 caracteres, incluindo um número e
                uma letra maiúscula.
              </p>
            </div>
            <p className="font-semibold text-sm text-cyan-600 active:text-cyan-800">
              <Link>Esqueceu a senha?</Link>
            </p>
            <button className="p-2 rounded-md font-semibold text-sm text-white bg-cyan-600 outline-none hover:bg-cyan-700 active:bg-cyan-800">
              Entrar
            </button>
            <p className="text-center text-sm">
              Já possui uma conta?{' '}
              <Link
                to={'/signup'}
                className="font-semibold text-cyan-600 cursor-pointer active:text-cyan-800"
              >
                Entrar
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
