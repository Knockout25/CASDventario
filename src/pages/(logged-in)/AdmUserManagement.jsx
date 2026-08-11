import { useState } from 'react';
import AsideNav from '../../components/ui/AsideNav';
import Header from '../../components/ui/Header';
import { PlusIcon } from '@phosphor-icons/react';

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
                  <h3 className="font-semibold text-lg">
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
            <div>
              <p>tabela</p>
            </div>
            <div>
              <p>tabela</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
