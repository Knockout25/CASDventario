import { BellIcon } from '@phosphor-icons/react';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-24 p-6 border-b border-gray-600">
      <h2 className='font-semibold text-xl'>Gerenciamento de Usuários</h2>
      <div className='flex '>
        <BellIcon />
        <div className='h-6 w-[1px] bg-gray-600' />
        <div>
          <p>Administrador</p>
          <p>CEO</p>
        </div>
      </div>
    </header>
  );
}
