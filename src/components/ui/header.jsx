import { Link } from 'react-router-dom';

import { BellIcon, SignOutIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

export default function Header({ headerTitle, AccountName, AccountPosition }) {
  const avatarUrl = `https://api.dicebear.com/10.x/lorelei/svg?seed=${encodeURIComponent(AccountName)}`;

  return (
    <header className="flex items-center justify-between w-full h-24 px-6 border-b">
      <h2 className="font-semibold text-xl">{headerTitle}</h2>
      <div className="flex items-center space-x-4">
        <Button size="icon-lg" variant="outline">
          <Link>
            <BellIcon />
          </Link>
        </Button>
        <div className="h-6 w-px bg-accent" />
        <Button variant="outline" size="profile">
          <Link className="flex gap-1.5">
            <img
              className="w-9"
              src={avatarUrl}
              alt={`Foto de perfil de ${AccountName}`}
            />
            <div>
              <p>{AccountName}</p>
              <p className="text-sm text-muted-foreground">{AccountPosition}</p>
            </div>
          </Link>
        </Button>
        <Button size="icon-lg" variant="destructive">
          <SignOutIcon />
        </Button>
      </div>
    </header>
  );
}
