'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';
import { SortAscendingIcon } from '@phosphor-icons/react';

const columnHelper = createColumnHelper();

export const columns = columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    header: 'Nome',
  }),
  columnHelper.accessor('email', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex items-center space-x-2 hover:bg-gray-100 p-1 rounded transition-colors"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <SortAscendingIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor('company.name', {
    header: 'Empresa',
  }),
]);

export default function UsersDataTable({ users }) {
  return <DataTable columns={columns} data={users} pageSize={5} />;
}
