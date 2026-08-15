import LogotypeBlue from '../../assets/brand/casdventario-blue-logotype.svg';
import { NavLink } from 'react-router-dom';
import {
  CirclesFourIcon,
  PackageIcon,
  BookIcon,
  UserIcon,
  GearIcon,
  BellIcon,
  UsersIcon,
  LaptopIcon,
} from '@phosphor-icons/react';
import ThemeToggle from '../theme-switcher';

export default function AsideNav() {
  const getLinkClass = ({
    isActive,
  }) => `flex items-center space-x-3 px-3 py-2 rounded-md transition-all ease-in-out 
  ${
    isActive
      ? 'bg-cyan-600 text-white'
      : 'hover:bg-cyan-600/15 active:text-cyan-800'
  }`;

  return (
    <aside className="flex flex-col shrink-0 w-1/6 h-full border-r bg-white border-gray-500">
      <div className="flex items-center justify-center h-24">
        <img
          className="w-48 select-none"
          src={LogotypeBlue}
          alt="Logotipo CASDventário"
        />
      </div>
      <div className="flex flex-1 space-y-4 flex-col px-6">
        <div>
          <p className="text-xs text-gray-500">Administrador</p>
          <div className="space-y-2">
            <NavLink to={'/'} className={getLinkClass}>
              <CirclesFourIcon size={24} weight="regular" />
              <p className="font-medium">Dashboard</p>
            </NavLink>
            <NavLink to={'/usermanagement'} className={getLinkClass}>
              <UsersIcon size={24} weight="regular" />
              <p className="font-medium">Administração</p>
            </NavLink>
            <NavLink to={'/'} className={getLinkClass}>
              <PackageIcon size={24} weight="regular" />
              <p>Remessas</p>
            </NavLink>
            <NavLink to={'/'} className={getLinkClass}>
              <BookIcon size={24} weight="regular" />
              <p>Livros</p>
            </NavLink>
            <NavLink to={'/'} className={getLinkClass}>
              <LaptopIcon size={24} weight="regular" />
              <p>Notebooks</p>
            </NavLink>
          </div>
        </div>
        <div className="w-full h-px bg-gray-600" />
        <div>
          <p className="text-xs text-gray-500">Configurações</p>
          <div className="space-y-2">
            <NavLink to={'/login'} className={getLinkClass}>
              <UserIcon size={24} weight="regular" />
              <p>Perfil</p>
            </NavLink>
            <NavLink to={'/login'} className={getLinkClass}>
              <BellIcon size={24} weight="regular" />
              <p>Notificações</p>
            </NavLink>
            <NavLink to={'/login'} className={getLinkClass}>
              <GearIcon size={24} weight="regular" />
              <p>Configurações</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-24">
        <ThemeToggle />
      </div>
    </aside>
  );
}
