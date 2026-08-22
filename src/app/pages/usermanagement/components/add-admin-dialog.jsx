import { useState } from 'react';

import { PlusIcon } from '@phosphor-icons/react';

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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectGroup,
} from '@/components/ui/select';
import { Field, FieldGroup } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AddAdminDialog() {
  const ADM_ROLES = [
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} onOpenChange={(open) => setOpenDialog(open)}>
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
            Preencha os campos para cadastro de um novo administrador.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
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
              <Select required id="role" items={ADM_ROLES}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um cargo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {ADM_ROLES.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
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
  );
}
