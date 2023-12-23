import {Box, useTheme} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {tokens} from '../../theme';
import Header from '../../components/Header';
import { mockDataContacts } from '../../data/dummyData';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'ID', flex: 0.5}, 
        {field:  'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        {field:  'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
        {field:  'phone', headerName: 'Phone', flex: 1 },
        {field:  'email', headerName: 'Email', flex: 1 },
        {field:  'address', headerName: 'Address', flex: 1 },
        {field:  'city', headerName: 'City', flex: 1 },
        {field:  'zipCode', headerName: 'ZipCode', flex: 1 },
    ]

    return (
        <Box m="20px">
            <Header title="Contacts"/> 
            <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
                '& .MuiDataGrid-root': {
                    border: 'none'
                },
                '& .MuiDatGrid-cell': {
                    borderBottom: 'none'
                },
                '& .name-column--cell': {
                    color: colors.accent[500]
                },
                '& .MuiDataGrid-columnHeaders': {
                    borderBottom: 'none'
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: 'none',
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: `${colors.gray[600]} !important`
                }
            }}
            >
                <DataGrid 
                    components={{Toolbar: GridToolbar}}
                    rows={mockDataContacts}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Contacts;