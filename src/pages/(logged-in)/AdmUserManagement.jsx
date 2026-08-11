import { useState } from 'react';
import AsideNav from '../../components/ui/AsideNav';
import Header from '../../components/ui/Header';
import Input from '../../components/ui/Input';
import {
  CaretDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@phosphor-icons/react';

export default function AdmUserManagement() {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="flex h-screen font-geist">
      <AsideNav />
      <div className="flex flex-1 flex-col min-w-0 h-full">
        <Header
          headerTitle={'Administração'}
          AccountName={'Administrador'}
          AccountPosition={'CEO'}
        />
        <main className="flex-1 overflow-y-hidden">
          <div className="px-6 pt-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl">
                    Gerenciamento de Usuários
                  </h3>
                  <p className="text-sm line text-gray-500">
                    Administre e supervisione contas e privilégios de usuários
                    no sistema.
                  </p>
                </div>
                <div>
                  <button className="flex items-center space-x-1 p-3 rounded-md text-white bg-yellow-500 transition-all ease-in-out hover:bg-yellow-600 active:bg-yellow-700">
                    <PlusIcon />
                    <p>Adicionar Usuário</p>
                  </button>
                </div>
              </div>
              <div className="flex space-x-6">
                <button
                  className={`p-2 w-32 cursor-pointer transition-all ease-in-out hover:border-b-3 hover:border-cyan-600
                    ${
                      activeTab === 'users'
                        ? 'border-b-3 border-cyan-600'
                        : 'border-b-3 border-transparent'
                    }`}
                  onClick={() => setActiveTab('users')}
                >
                  Usuários
                </button>
                <button
                  className={`p-2 w-32 cursor-pointer transition-all ease-in-out hover:border-b-3 hover:border-cyan-600
                    ${
                      activeTab === 'perms'
                        ? 'border-b-3 border-cyan-600'
                        : 'border-b-3 border-transparent'
                    }`}
                  onClick={() => setActiveTab('perms')}
                >
                  Permissões
                </button>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-300">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                <h4 className="font-semibold text-lg">Administradores</h4>
                <div className="flex space-x-2">
                  <div className="group relative flex items-center w-10 h-10 px-4 py-2 rounded-lg border border-gray-600 overflow-hidden transition-all ease-in-out focus-within:w-64">
                    <label
                      className="absolute left-0 flex items-center justify-center w-10 h-10 transition-all ease-in-out"
                      htmlFor="admSearch"
                    >
                      <MagnifyingGlassIcon size={20} />
                    </label>
                    <input
                      className="w-full h-full pl-6 opacity-0 group-focus-within:opacity-100 outline-none placeholder:text-gray-500"
                      id="admSearch"
                      type="text"
                      placeholder="Pesquisar usuário..."
                    />
                  </div>
                  <button className="p-2 cursor-pointer">
                    <CaretDownIcon size={20} weight="fill" />
                  </button>
                </div>
              </div>
              <div>
                <p>tabela</p>
              </div>
              <div>
                <p>paginacao</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
