import LogoWhite from '../../../assets/brand/casdventario-white-logo.svg';
import LogotypeBlack from '../../../assets/brand/casdventario-black-logotype.svg';
import { Link } from 'react-router-dom';
import InputFloatingLabel from '../../../components/ui/input-floating-label';
import { Button } from '@/components/ui/button';

export default function SignUp() {
  return (
    <div className="h-screen flex flex-col font-geist">
      <div className="flex flex-1">
        <aside className="flex items-center justify-center w-1/2 bg-primary">
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
              <InputFloatingLabel
                text={'Primeiro nome'}
                type={'text'}
                id={'first-name'}
              />
              <InputFloatingLabel
                text={'Segundo nome'}
                type={'text'}
                id={'middle-name'}
              />
            </div>
            <InputFloatingLabel text={'Email'} type={'email'} id={'email'} />
            <div className="space-y-1">
              <InputFloatingLabel
                text={'Senha'}
                type={'password'}
                id={'user-password'}
              />
              <p className="text-sm text-muted-foreground">
                *A senha deve ter pelo menos 8 caracteres, incluindo um número e
                uma letra maiúscula.
              </p>
            </div>
            <div className="space-y-1">
              <InputFloatingLabel
                text={'Confirmar senha'}
                type={'password'}
                id={'confirmation-user-password'}
              />
              <p className="text-sm text-muted-foreground">
                *As senhas devem ser as mesmas.
              </p>
            </div>
            <Button variant="default" className="py-5">
              Enviar solicitação de cadastro
            </Button>
            <p className="text-center">
              Já possui uma conta?{' '}
              <Link
                to={'/signin'}
                className="font-semibold text-primary cursor-pointer underline active:text-foreground"
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
