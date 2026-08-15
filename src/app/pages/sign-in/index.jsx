import LogoWhite from '../../../assets/brand/casdventario-white-logo.svg';
import LogotypeBlack from '../../../assets/brand/casdventario-black-logotype.svg';
import { Link } from 'react-router-dom';
import InputFloatingLabel from '../../../components/ui/input-floating-label';

export default function Login() {
  return (
    <div className="h-screen flex flex-col font-geist">
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
            <InputFloatingLabel
              textFocus={'peer-focus:text-cyan-600'}
              borderFocus={'focus:border-cyan-600'}
              background={'bg-white'}
              text={'Email'}
              type={'email'}
              id={'email'}
            />
            <InputFloatingLabel
              textFocus={'peer-focus:text-cyan-600'}
              borderFocus={'focus:border-cyan-600'}
              background={'bg-white'}
              text={'Senha'}
              type={'password'}
              id={'user-password'}
            />
            <p className="font-semibold text-sm text-cyan-600 underline active:text-cyan-800">
              <Link to={'/forgotpassword'}>Esqueceu a senha?</Link>
            </p>
            <button className="p-2 rounded-md font-semibold text-sm text-white bg-cyan-600 outline-none hover:bg-cyan-700 active:bg-cyan-800">
              Entrar
            </button>
            <p className="text-center text-sm">
              Não tem uma conta?{' '}
              <Link
                to={'/signup'}
                className="font-semibold text-cyan-600 cursor-pointer underline active:text-cyan-800"
              >
                Registre-se
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
