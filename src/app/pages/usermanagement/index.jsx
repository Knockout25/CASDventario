import { PlusIcon } from '@phosphor-icons/react';

import Header from '../../../components/ui/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TableSection from '@/components/table-section';

export default function AdmUserManagement() {
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
                  <TabsContent value="administrators">
                    <TableSection title="Administradores" />
                  </TabsContent>
                  <TabsContent value="students">
                    <TableSection title="Alunos" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
