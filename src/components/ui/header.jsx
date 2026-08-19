import { Link } from 'react-router-dom';

import {
  BellIcon,
  DotsThreeVerticalIcon,
  UserIcon,
  GearIcon,
  SignOutIcon,
} from '@phosphor-icons/react';

import ThemeSwitcher from '../theme-switcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './dropdown-menu';
import { Button } from './button';
import { Separator } from './separator';
import { SidebarTrigger } from './sidebar';

export default function Header({ headerTitle, AccountName, AccountPosition }) {
  const avatarUrl = `https://api.dicebear.com/10.x/lorelei/svg?seed=${encodeURIComponent(AccountName)}`;

  return (
    <header className="flex items-center justify-between w-full h-24 px-6 border-b">
      <div className="flex gap-4">
        <SidebarTrigger />
        <h2 className="font-semibold text-xl">{headerTitle}</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Link>
            <BellIcon />
          </Link>
        </Button>
        <Separator orientation="vertical" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="lg" className="flex h-12">
              <img
                className="w-10 h-10"
                src={avatarUrl}
                alt={`Avatar de ${AccountName}`}
              />
              <div className="flex flex-col items-start">
                <p className="font-medium">{AccountName}</p>
                <p className="text-xs text-muted-foreground">
                  {AccountPosition}
                </p>
              </div>
              <DotsThreeVerticalIcon weight="bold" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon />
                Perfil
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <GearIcon />
                Configurações
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <SignOutIcon />
                Sair
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
