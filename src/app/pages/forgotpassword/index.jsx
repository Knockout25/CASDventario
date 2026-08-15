import Input from '../../../components/ui/Input';
import LogoWhite from '../../../assets/brand/casdventario-white-logo.svg';
import LogotypeBlack from '../../../assets/brand/casdventario-black-logotype.svg';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@phosphor-icons/react';

export default function ForgotPassword() {
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
              <h2 className="text-center text-3xl font-bold">
                Redefina sua senha
              </h2>
              <p className="text-center text-sm">
                Digite o endereço de email verificado da sua conta de usuário
                para poder lhe enviarmos um link de redefinição de senha.
              </p>
            </div>
            <Input
              textFocus={'peer-focus:text-cyan-600'}
              borderFocus={'focus:border-cyan-600'}
              background={'bg-white'}
              text={'Email'}
              type={'email'}
              id={'email'}
            />
            <button className="p-2 rounded-md font-semibold text-sm text-white bg-cyan-600 outline-none hover:bg-cyan-700 active:bg-cyan-800">
              Enviar link de redefinição de senha
            </button>
            <p className="p-2 rounded-md font-semibold text-center text-sm text-white bg-yellow-500 outline-none hover:bg-yellow-600 active:bg-yellow-700">
              <Link
                to={'/signin'}
                className="flex items-center justify-center gap-2"
              >
                <ArrowLeftIcon size={16} />
                Voltar
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
