import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const GamesList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'game', flex: 1, headerName: 'Games List', width: 130 },
        {
            field: 'code',
            headerName: 'Jan 26th',
            sortable: false,
            type: 'number',
            width: 120,
        }
    ];

    const rows = [
        { id: 1, game: 'Old Gaziyabad', code: 35 },
        { id: 2, game: 'Desawer', code: 42 },
        { id: 3, game: 'Old Gaziyabad', code: 35 },
        { id: 4, game: 'Desawer', code: 42 },
        { id: 5, game: 'Old Gaziyabad', code: 35 },
        { id: 6, game: 'Desawer', code: 42 },
        { id: 7, game: 'Old Gaziyabad', code: 35 },
        { id: 8, game: 'Desawer', code: 42 },
    ];

    return (
        <DataGrid
            className='games-list'
            sx={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 600 }}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection={false}
            disableRowSelectionOnClick
        />
    )
}

export default GamesList