import Input from '../components/ui/Input';
import LogoWhite from '../assets/casdventario-white-logo.svg';
import LogotypeBlack from '../assets/casdventario-black-logotype.svg';
import { Link } from 'react-router-dom';

export default function Signup() {
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
              <h2 className="text-center text-3xl font-bold">Registrar-se</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <Input
                textFocus={'peer-focus:text-cyan-600'}
                borderFocus={'focus:border-cyan-600'}
                background={'bg-white'}
                text={'Primeiro nome'}
                type={'text'}
                id={'first-name'}
              />
              <Input
                textFocus={'peer-focus:text-cyan-600'}
                borderFocus={'focus:border-cyan-600'}
                background={'bg-white'}
                text={'Segundo nome'}
                type={'text'}
                id={'middle-name'}
              />
            </div>
            <Input
              textFocus={'peer-focus:text-cyan-600'}
              borderFocus={'focus:border-cyan-600'}
              background={'bg-white'}
              text={'Email'}
              type={'email'}
              id={'email'}
            />
            <div className="space-y-1">
              <Input
                textFocus={'peer-focus:text-cyan-600'}
                borderFocus={'focus:border-cyan-600'}
                background={'bg-white'}
                text={'Senha'}
                type={'password'}
                id={'user-password'}
              />
              <p className="text-xs text-gray-500">
                *A senha deve ter pelo menos 8 caracteres, incluindo um número e
                uma letra maiúscula.
              </p>
            </div>
            <div className="space-y-1">
              <Input
                textFocus={'peer-focus:text-cyan-600'}
                borderFocus={'focus:border-cyan-600'}
                background={'bg-white'}
                text={'Confirmar senha'}
                type={'password'}
                id={'confirmation-user-password'}
              />
              <p className="text-xs text-gray-500">
                *As senhas devem ser as mesmas.
              </p>
            </div>
            <button className="p-2 rounded-md font-semibold text-sm text-white bg-cyan-600 outline-none hover:bg-cyan-700 active:bg-cyan-800">
              Enviar solicitação de cadastro
            </button>
            <p className="text-center text-sm">
              Já possui uma conta?{' '}
              <Link
                to={'/login'}
                className="font-semibold text-cyan-600 cursor-pointer underline active:text-cyan-800"
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
