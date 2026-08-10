import { SunIcon, MoonIcon } from '@phosphor-icons/react';
import ToggleButton from './ui/ToggleButton';
import { useState } from 'react';

export default function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="flex space-x-2">
      <SunIcon size={24} weight={!isDarkMode ? 'fill' : 'regular'} />
      <ToggleButton checked={isDarkMode} onChange={setIsDarkMode} />
      <MoonIcon size={24} weight={isDarkMode ? 'fill' : 'regular'} />
    </div>
  );
}
