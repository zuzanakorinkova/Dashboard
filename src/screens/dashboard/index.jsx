import { Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/PersonAdd';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";




const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" />
                <Box>
            </Box>
            </Box>
            
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                <Box gridColumn="span 6" gridRow="span 2">
                    <Box mt="25px" p="0 30px"> 
                            <Typography variant="h5" color={colors.primary[200]}>
                                Revenue Generated
                            </Typography>
                            <Typography variant="h3" color={colors.accent[500]}>
                                $75,323
                            </Typography>
                           
                    </Box>
                    <Box height="250px" ml="-20px">
                            <LineChart isDashboard={true} />
                    </Box>
                   
                </Box>
                <Box gridColumn="span 6" gridRow="span 2">
                    <Box mt="25px" p="0 30px"> 
                            <Typography variant="h5" color={colors.primary[200]}>
                                Sales quantity
                            </Typography>
                            <Typography variant="h3" color={colors.primary[500]}>
                                    $75,323
                            </Typography>
                        </Box>
                        
                        <Box height="270px" mt="-20px">
                            <BarChart isDashboard={true} />
                        </Box>
                    
                </Box>

            </Box>
    </Box>
        )

}

export default Dashboard;