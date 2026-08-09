import Input from '../components/ui/Input';
import LogoWhite from '../assets/casdventario-white-logo.svg';
import LogotypeBlack from '../assets/casdventario-black-logotype.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="flex items-center justify-center w-1/2 bg-cyan-600">
          <img
            className="w-72 select-none"
            src={LogoWhite}
            alt="Logo CASDventário"
          />
        </aside>
        <main className="flex flex-1 items-center justify-center">
          <div className="flex flex-col w-full px-32 space-y-6">
            <div className="flex flex-col space-y-3 items-center">
              <img
                className="w-42 select-none"
                src={LogotypeBlack}
                alt="Logotipo CASDventário"
              />
              <h2 className="text-center text-3xl font-bold">Entrar</h2>
            </div>
            <Input text={'Email'} type={'email'} id={'email'} />
            <Input text={'Senha'} type={'password'} id={'user-password'} />
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
