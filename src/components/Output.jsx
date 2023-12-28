import {Box, useTheme, Typography} from '@mui/material';
import {DataGrid,} from '@mui/x-data-grid';
import {tokens} from '../theme';

const Output = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    
    const columnsN = [
        {field: 'year', headerName: 'Year', type: 'number', headerAlign: 'left', align: 'left', flex: 1}, 
        {field:  'total-savings', headerName: 'Total savings', type: 'number', headerAlign: 'left', align: 'left', flex: 1},
        {field:  'interest', headerName: 'Interest (Year)', type: 'number', headerAlign: 'left', align: 'left', flex: 1 },
        {field:  'total-interest', headerName: 'Total interest', type: 'number', headerAlign: 'left', align: 'left', flex: 1},
        {field:  'invested-capital', headerName: 'Invested Capital', type: 'number', headerAlign: 'left', align: 'left', flex: 1 },
    ]
    function generateID() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    return (
        <Box m="20px">
             <Typography variant="h5" color={colors.primary[200]}>
                 Output
            </Typography>
            <Box
            m="20px 0 0 0"
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
            }}>
                <DataGrid 
                    getRowId={() =>  generateID()}
                    rows={props.yearlyData.map((data) => {
                        return (
                            {
                            year: data.year,
                            "total-savings": formatter.format(data.savingsEndOfYear),
                            interest: formatter.format(data.yearlyInterest),
                            "total-interest": formatter.format(
                                data.savingsEndOfYear -
                                  props.initialInvestment -
                                  data.yearlySavings * data.year
                              ),
                              "invested-capital": formatter.format(
                                props.initialInvestment + data.yearlySavings * data.year)
                            }
                        
                        )
                    })}
                    columns={columnsN}
                />
            </Box>
        </Box>
    );
}

export default Output;