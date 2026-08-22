import { PlusIcon } from '@phosphor-icons/react';

import Header from '../../../components/ui/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TableSection from '@/components/table-section';
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectGroup,
} from '@/components/ui/select';
import { useState } from 'react';

export default function AdmUserManagement() {
  const admRoles = [
    {
      label: 'Administrador Básico',
      value: 'normalAdm',
    },
    {
      label: 'Administrador Mestre',
      value: 'masterAdm',
    },
  ];

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex w-full font-geist">
        <AppSidebar />
        <div className="flex flex-1 flex-col min-w-0 w-full h-full">
          <Header
            headerTitle={'Administradores'}
            AccountName={'Administrador'}
            AccountPosition={'CEO'}
          />
          <main className="flex-1 overflow-y-hidden">
            <div className="px-6 pt-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-xl">
                      Gerenciamento de Administradores
                    </h3>
                    <p className="text-sm line text-muted-foreground">
                      Administre e supervisione contas e privilégios de
                      administradores no sistema.
                    </p>
                  </div>
                  <div>
                    <Dialog
                      open={openDialog}
                      onOpenChange={(open) => setOpenDialog(open)}
                    >
                      <DialogTrigger>
                        <Button
                          onClick={() => setOpenDialog(true)}
                          variant="secondary"
                          size="lg"
                        >
                          <PlusIcon />
                          Adicionar Administrador
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Adicionar Administrador</DialogTitle>
                          <DialogDescription>
                            Preencha os campos para cadastro de um novo
                            administrador.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={(event) => {
                            event.preventDefault();
                            setOpenDialog(false);
                          }}
                        >
                          <FieldGroup>
                            <div className="grid grid-cols-2 gap-4">
                              <Field>
                                <Label htmlFor="name">
                                  Nome
                                  <span className="text-destructive">*</span>
                                </Label>
                                <Input required id="name"></Input>
                              </Field>
                              <Field>
                                <Label htmlFor="surname">
                                  Sobrenome
                                  <span className="text-destructive">*</span>
                                </Label>
                                <Input required id="surname"></Input>
                              </Field>
                            </div>
                            <Field>
                              <Label htmlFor="email">
                                Email
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input required id="email"></Input>
                            </Field>
                            <Field>
                              <Label htmlFor="role">
                                Cargo
                                <span className="text-destructive">*</span>
                              </Label>
                              <Select required id="role" items={admRoles}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione um cargo" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {admRoles.map((role) => (
                                      <SelectItem
                                        key={role.value}
                                        value={role.value}
                                      >
                                        {role.label}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </Field>
                          </FieldGroup>
                          <DialogFooter>
                            <Button type="submit" variant="default">
                              Cadastrar
                            </Button>
                            <DialogClose>
                              <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <Tabs>
                  <TabsList variant="line">
                    <TabsTrigger value="administrators">
                      Administradores
                    </TabsTrigger>
                    <TabsTrigger value="administratorsLog">Logs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="administrators">
                    <TableSection title="Administradores" />
                  </TabsContent>
                  <TabsContent value="administratorsLog">
                    <TableSection title="Logs" />
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
