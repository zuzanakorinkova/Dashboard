import {Typography, Box} from '@mui/material';

const Header = ({title}) => {
    return( 
    <Box mb="30px">
        <Typography variant="h2" sx={{mb: "10px"}}>{title}</Typography>
    </Box>
    )
}


export default Header;