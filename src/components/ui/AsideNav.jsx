import LogotypeBlack from '../../assets/casdventario-black-logotype.svg';
import ToggleButton from './ToggleButton';
import { Link } from 'react-router-dom';
import {
  CirclesFourIcon,
  PackageIcon,
  BookIcon,
  NotebookIcon,
  UserIcon,
  GearIcon,
  SunIcon,
  MoonIcon,
  ToggleLeftIcon,
  BellIcon,
  UsersIcon,
} from '@phosphor-icons/react';
import { useState } from 'react';

export default function AsideNav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <aside className="flex flex-col shrink-0 w-1/6 h-full border-r bg-white border-gray-600">
      <div className="flex items-center justify-center h-24">
        <img
          className="w-42 select-none"
          src={LogotypeBlack}
          alt="Logotipo CASDventário"
        />
      </div>
      <div className="flex flex-1 space-y-4 flex-col px-6">
        <div>
          <p className="text-xs text-gray-500">Administrador</p>
          <div className="space-y-2">
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <CirclesFourIcon size={20} weight="bold" />
              <p className="font-medium">Dashboard</p>
            </Link>
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <UsersIcon size={20} weight="bold" />
              <p className="font-medium">Usuários</p>
            </Link>
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <PackageIcon size={20} weight="bold" />
              <p>Remessas</p>
            </Link>
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <BookIcon size={20} weight="bold" />
              <p>Livros</p>
            </Link>
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <NotebookIcon size={20} weight="bold" />
              <p>Notebooks</p>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-600" />
        <div>
          <p className="text-xs text-gray-500">Configurações</p>
          <div className="space-y-2">
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <UserIcon size={20} weight="bold" />
              <p>Perfil</p>
            </Link>
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <BellIcon size={20} weight="bold" />
              <p>Notificações</p>
            </Link>
            <Link
              to={''}
              className="flex items-center space-x-2 p-2 rounded-md transition-all ease-in-out hover:bg-cyan-600/15 active:text-cyan-800"
            >
              <GearIcon size={20} weight="bold" />
              <p>Configurações</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1 h-24">
        {console.log(isDarkMode)}
        <SunIcon size={20} weight={!isDarkMode ? 'fill' : 'bold'} />
        <ToggleButton checked={isDarkMode} onChange={setIsDarkMode} />
        <MoonIcon size={20} weight={isDarkMode ? 'fill' : 'bold'} />
      </div>
    </aside>
  );
}
