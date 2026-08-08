import Input from '../../components/Input';
import LogoWhite from '../../assets/casdventario-white-logo.svg';

function Signup() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="flex items-center justify-center w-1/2 bg-cyan-600">
          <img className="w-72 select-none" src={LogoWhite} alt="" srcset="" />
        </aside>
        <main className="flex flex-1 items-center justify-center">
          <div className="flex flex-col space-y-6 text-center">
            <h2 className="text-3xl font-bold">Registrar-se</h2>
            <div className="space-x-2">
              <Input text={'Primeiro nome'} type={'text'} id={'first-name'} />
              <Input text={'Segundo nome'} type={'text'} id={'middle-name'} />
            </div>
            <Input text={'Email'} type={'text'} id={'email'} />
            <Input text={'Senha'} type={'password'} id={'user-password'} />
            <Input
              text={'Confirmar senha'}
              type={'password'}
              id={'confirmation-user-password'}
            />
            <button className="p-2 rounded-md font-semibold text-sm text-white bg-cyan-600 outline-none hover:bg-cyan-700 active:bg-cyan-800">
              Enviar solicitação de cadastro
            </button>
            <p className="text-sm">
              Já possui uma conta?{' '}
              <a className="font-semibold text-cyan-600 cursor-pointer active:text-cyan-800">
                Entrar
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Signup;
