import { useEffect, useState } from 'react';
import AsideNav from '../../../components/ui/AsideNav';
import Header from '../../../components/ui/Header';
import { CaretDownIcon, CaretRightIcon, PlusIcon } from '@phosphor-icons/react';
import PaginationTable from '../../../components/ui/PaginationTable';
import SearchBarExpandable from '../../../components/ui/SearchBarExpandable';
import UsersDataTable from './columns';

// Cria uma função para consumir os dados da API
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export default function AdmUserManagement() {
  const [activeTab, setActiveTab] = useState('users');
  const [showUsers, setShowUsers] = useState(true);

  // Filtro das tabelas
  const [globalFilter, setGlobalFilter] = useState('');
  // Define o valor de cada usuário
  const [users, setUsers] = useState([]);

  // Hook para buscar os valores função que armazena a API
  useEffect(() => {
    // Armazena cada array da API consumida em 'data'
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

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
              <div className="flex items-center justify-between px-4 w-full h-16 bg-gray-200">
                <h4 className="font-semibold text-lg">Administradores</h4>
                <div className="flex space-x-2 transition-all ease-in-out">
                  <SearchBarExpandable
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                  />
                  {showUsers ? (
                    <button
                      onClick={() => setShowUsers(!showUsers)}
                      className="p-2 cursor-pointer"
                    >
                      <CaretDownIcon size={20} weight="fill" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowUsers(!showUsers)}
                      className="p-2 cursor-pointer"
                    >
                      <CaretRightIcon size={20} weight="fill" />
                    </button>
                  )}
                </div>
              </div>
              <div
                className={`p-4 transition-all ease-in-out ${showUsers ? '' : 'hidden'}`}
              >
                <UsersDataTable users={users} filterValue={globalFilter} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
