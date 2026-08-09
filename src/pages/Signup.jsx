import Input from '../components/ui/Input';
import LogoWhite from '../assets/casdventario-white-logo.svg';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="flex items-center justify-center w-1/2 bg-cyan-600">
          <img className="w-72 select-none" src={LogoWhite} alt="" srcSet="" />
        </aside>
        <main className="flex flex-1 items-center justify-center">
          <div className="flex flex-col w-full px-32 space-y-6">
            <h2 className="text-center text-3xl font-bold">Registrar-se</h2>
            <div className="flex flex-row space-x-2">
              <Input text={'Primeiro nome'} type={'text'} id={'first-name'} />
              <Input text={'Segundo nome'} type={'text'} id={'middle-name'} />
            </div>
            <Input text={'Email'} type={'email'} id={'email'} />
            <Input text={'Senha'} type={'password'} id={'user-password'} />
            <Input
              text={'Confirmar senha'}
              type={'password'}
              id={'confirmation-user-password'}
            />
            <button className="p-2 rounded-md font-semibold text-sm text-white bg-cyan-600 outline-none hover:bg-cyan-700 active:bg-cyan-800">
              Enviar solicitação de cadastro
            </button>
            <p className="text-center text-sm">
              Já possui uma conta?{' '}
              <Link
                to={'/login'}
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
