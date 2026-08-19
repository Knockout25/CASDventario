import { useEffect, useState } from 'react';
import AsideNav from '../../../components/ui/aside-nav';
import Header from '../../../components/ui/header';
import { CaretDownIcon, CaretRightIcon, MagnifyingGlassIcon, PlusIcon } from '@phosphor-icons/react';
import SearchBar from '../../../components/ui/search-bar';
import UsersDataTable from './columns';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';

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
    <SidebarProvider>
      <div className="flex w-full  font-geist">
        <AppSidebar />
        <div className="flex flex-1 flex-col min-w-0 w-full h-full">
          <Header
            headerTitle={'Usuários'}
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
                    <p className="text-sm line text-muted-foreground">
                      Administre e supervisione contas e privilégios de usuários
                      no sistema.
                    </p>
                  </div>
                  <div>
                    <Button variant="secondary" size="lg">
                      <PlusIcon />
                      <p>Adicionar Usuário</p>
                    </Button>
                  </div>
                </div>
                <Tabs>
                  <TabsList variant="line">
                    <TabsTrigger value="administrators">
                      Administradores
                    </TabsTrigger>
                    <TabsTrigger value="students">Alunos</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="rounded-md border-2">
                <div className="flex items-center justify-between rounded-t-md  px-4 w-full h-16 bg-card">
                  <h4 className="font-semibold text-lg">Administradores</h4>
                  <div className="flex space-x-2 transition-all ease-in-out">
                    <InputGroup>
                      <InputGroupInput
                        placeholder="Buscar usuário..."
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                      />
                      <InputGroupAddon>
                        <MagnifyingGlassIcon />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </div>
                <div
                  className={`p-4 w-full transition-all ease-in-out ${showUsers ? '' : 'hidden'}`}
                >
                  <UsersDataTable users={users} filterValue={globalFilter} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
