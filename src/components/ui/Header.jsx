import { BellIcon, SignOutIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import AvatarTemplate from '../../assets/avatar-template.svg';

export default function Header({ headerTitle, AccountName, AccountPosition }) {
  return (
    <header className="flex items-center justify-between w-full h-24 p-6 border-b border-gray-600">
      <h2 className="font-semibold text-xl">{headerTitle}</h2>
      <div className="flex items-center space-x-4">
        <Link className="p-2 rounded-full transition-all ease-in-out hover:bg-gray-500/15 active:bg-gray-500/25">
          <BellIcon size={24} />
        </Link>
        <div className="h-6 w-px bg-gray-600" />
        <Link className="flex items-center space-x-2">
          <img className="w-9" src={AvatarTemplate} alt="" />
          <div>
            <p>{AccountName}</p>
            <p className="text-sm text-gray-500">{AccountPosition}</p>
          </div>
        </Link>
        <button className="p-2 rounded-full transition-all ease-in-out cursor-pointer hover:bg-red-600/15 active:bg-red-600/25">
          <SignOutIcon size={24} className="text-red-500" />
        </button>
      </div>
    </header>
  );
}
