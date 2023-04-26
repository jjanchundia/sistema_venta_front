import { useEffect, useState } from 'react';
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { Navigate } from 'react-router-dom';
// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { TableBody } from '../../../node_modules/@mui/material/index';
import { compact } from 'lodash';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];
// const data = [
//     {
//         name: {
//             firstName: 'John',
//             lastName: 'Doe'
//         },
//         address: '261 Erdman Ford',
//         city: 'East Daphne',
//         state: 'Kentucky'
//     },
//     {
//         name: {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         },
//         address: '769 Dominic Grove',
//         city: 'Columbus',
//         state: 'Ohio'
//     },
//     {
//         name: {
//             firstName: 'Joe',
//             lastName: 'Doe'
//         },
//         address: '566 Brakus Inlet',
//         city: 'South Linda',
//         state: 'West Virginia'
//     },
//     {
//         name: {
//             firstName: 'Kevin',
//             lastName: 'Vandy'
//         },
//         address: '722 Emie Stream',
//         city: 'Lincoln',
//         state: 'Nebraska'
//     },
//     {
//         name: {
//             firstName: 'Joshua',
//             lastName: 'Rolluffs'
//         },
//         address: '32188 Larkin Turnpike',
//         city: 'Charleston',
//         state: 'South Carolina'
//     }
// ];
//nested data is ok, see accessorKeys in ColumnDef below
// const datas = [
//     {
//         name: {
//             firstName: 'John',
//             lastName: 'Doe'
//         },
//         address: '261 Erdman Ford',
//         city: 'East Daphne',
//         state: 'Kentucky'
//     },
//     {
//         name: {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         },
//         address: '769 Dominic Grove',
//         city: 'Columbus',
//         state: 'Ohio'
//     },
//     {
//         name: {
//             firstName: 'Joe',
//             lastName: 'Doe'
//         },
//         address: '566 Brakus Inlet',
//         city: 'South Linda',
//         state: 'West Virginia'
//     },
//     {
//         name: {
//             firstName: 'Kevin',
//             lastName: 'Vandy'
//         },
//         address: '722 Emie Stream',
//         city: 'Lincoln',
//         state: 'Nebraska'
//     },
//     {
//         name: {
//             firstName: 'Joshua',
//             lastName: 'Rolluffs'
//         },
//         address: '32188 Larkin Turnpike',
//         city: 'Charleston',
//         state: 'South Carolina'
//     }
// ];
// const headCells = [
//     {
//         id: 'trackingNo',
//         align: 'left',
//         disablePadding: false,
//         label: 'Tracking No.'
//     },
//     {
//         id: 'name',
//         align: 'left',
//         disablePadding: true,
//         label: 'Product Name'
//     },
//     {
//         id: 'fat',
//         align: 'right',
//         disablePadding: false,
//         label: 'Total Order'
//     },
//     {
//         id: 'carbs',
//         align: 'left',
//         disablePadding: false,

//         label: 'Status'
//     },
//     {
//         id: 'protein',
//         align: 'right',
//         disablePadding: false,
//         label: 'Total Amount'
//     }
// ];
// console.log(headCells);
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    let token = sessionStorage.getItem('token');
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name'
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name'
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address'
            },
            {
                accessorKey: 'city',
                header: 'City'
            },
            {
                accessorKey: 'state',
                header: 'State'
            }
        ],
        []
    );
    const [Producto, setProducto] = useState(0);
    const [Compras, setCompras] = useState(0);
    const [Ventas, setVentas] = useState(0);
    const [Usuarios, setUsuarios] = useState(0);
    const [Ganancias, setGanancias] = useState(0);
    const [Mes, setMes] = useState('');

    const cantidadProductos = async () => {
        let response = await fetch('http://localhost:5158/api/dashboard/Productos');
        if (response.ok) {
            let data = await response.json();
            setProducto(data);
        }
    };

    const cantidadCompras = async () => {
        let response = await fetch('http://localhost:5158/api/dashboard/Compras');
        if (response.ok) {
            let data = await response.json();
            setCompras(data);
        }
    };

    const cantidadVentas = async () => {
        let response = await fetch('http://localhost:5158/api/dashboard/Ventas');
        if (response.ok) {
            let data = await response.json();
            setVentas(data);
        }
    };

    const cantidadUsuarios = async () => {
        let response = await fetch('http://localhost:5158/api/dashboard/Usuarios');
        if (response.ok) {
            let data = await response.json();
            setUsuarios(data);
        }
    };

    const cantidadGanancias = async () => {
        debugger;
        let response = await fetch('http://localhost:5158/api/dashboard/VentasPorMes');
        if (response.ok) {
            let data = await response.json();
            const valor = data[0].total;
            const formatoMoneda = valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            setGanancias(formatoMoneda);
            setMes(data[0].mes);
        }
    };

    useEffect(() => {
        cantidadProductos();
        cantidadCompras();
        cantidadUsuarios();
        cantidadVentas();
        cantidadGanancias();
    }, []);

    return (
        <>
            {!token && <Navigate to="/login" />}

            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* row 1 */}
                {/* <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={headCell.align}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            {headCell.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead> */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total Usuarios" count={Usuarios} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total de Productos" count={Producto} percentage={59.3} extra={'35,000'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total de Compras" count={Compras} percentage={27.4} isLoss color="warning" extra="1,943" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total de Ventas" count={Ventas} percentage={27.4} isLoss color="warning" extra="$20,395" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title={`Total de Ganancias en Ventas: ${Mes}`} count={Ganancias} />
                </Grid>
                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
                {/* row 2 */}
                {/* <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Unique Visitor</Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={0}>
                                <Button
                                    size="small"
                                    onClick={() => setSlot('month')}
                                    color={slot === 'month' ? 'primary' : 'secondary'}
                                    variant={slot === 'month' ? 'outlined' : 'text'}
                                >
                                    Month
                                </Button>
                                <Button
                                    size="small"
                                    onClick={() => setSlot('week')}
                                    color={slot === 'week' ? 'primary' : 'secondary'}
                                    variant={slot === 'week' ? 'outlined' : 'text'}
                                >
                                    Week
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ mt: 1.5 }}>
                        <Box sx={{ pt: 1, pr: 2 }}>
                            <IncomeAreaChart slot={slot} />
                        </Box>
                    </MainCard>
                </Grid> */}
                {/* <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Income Overview</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <Box sx={{ p: 3, pb: 0 }}>
                            <Stack spacing={2}>
                                <Typography variant="h6" color="textSecondary">
                                    This Week Statistics
                                </Typography>
                                <Typography variant="h3">$7,650</Typography>
                            </Stack>
                        </Box>
                        <MonthlyBarChart />
                    </MainCard>
                </Grid> */}
                {/* row 3 */}
                {/* <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Recent Orders</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}></MainCard>
                </Grid> */}
                {/* <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Analytics Report</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
                            <ListItemButton divider>
                                <ListItemText primary="Company Finance Growth" />
                                <Typography variant="h5">+45.14%</Typography>
                            </ListItemButton>
                            <ListItemButton divider>
                                <ListItemText primary="Company Expenses Ratio" />
                                <Typography variant="h5">0.58%</Typography>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Business Risk Cases" />
                                <Typography variant="h5">Low</Typography>
                            </ListItemButton>
                        </List>
                        <ReportAreaChart />
                    </MainCard>
                </Grid> */}
                {/* row 4 */}
                {/* <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Sales Report</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-select-currency"
                                size="small"
                                select
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                            >
                                {status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <MainCard sx={{ mt: 1.75 }}>
                        <Stack spacing={1.5} sx={{ mb: -12 }}>
                            <Typography variant="h6" color="secondary">
                                Net Profit
                            </Typography>
                            <Typography variant="h4">$1560</Typography>
                        </Stack>
                        <SalesColumnChart />
                    </MainCard>
                </Grid> */}
                <Grid item xs={12} md={5} lg={4}>
                    {/* <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Transaction History</Typography>
                        </Grid>
                        <Grid item />
                    </Grid> */}
                    {/* <MainCard sx={{ mt: 2 }} content={false}>
                        <List
                            component="nav"
                            sx={{
                                px: 0,
                                py: 0,
                                '& .MuiListItemButton-root': {
                                    py: 1.5,
                                    '& .MuiAvatar-root': avatarSX,
                                    '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                                }
                            }}
                        >
                            <ListItemButton divider>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'success.main',
                                            bgcolor: 'success.lighter'
                                        }}
                                    >
                                        <GiftOutlined />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Order #002434</Typography>}
                                    secondary="Today, 2:00 AM"
                                />
                                <ListItemSecondaryAction>
                                    <Stack alignItems="flex-end">
                                        <Typography variant="subtitle1" noWrap>
                                            + $1,430
                                        </Typography>
                                        <Typography variant="h6" color="secondary" noWrap>
                                            78%
                                        </Typography>
                                    </Stack>
                                </ListItemSecondaryAction>
                            </ListItemButton>
                            <ListItemButton divider>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'primary.main',
                                            bgcolor: 'primary.lighter'
                                        }}
                                    >
                                        <MessageOutlined />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                    secondary="5 August, 1:45 PM"
                                />
                                <ListItemSecondaryAction>
                                    <Stack alignItems="flex-end">
                                        <Typography variant="subtitle1" noWrap>
                                            + $302
                                        </Typography>
                                        <Typography variant="h6" color="secondary" noWrap>
                                            8%
                                        </Typography>
                                    </Stack>
                                </ListItemSecondaryAction>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'error.main',
                                            bgcolor: 'error.lighter'
                                        }}
                                    >
                                        <SettingOutlined />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Order #988784</Typography>}
                                    secondary="7 hours ago"
                                />
                                <ListItemSecondaryAction>
                                    <Stack alignItems="flex-end">
                                        <Typography variant="subtitle1" noWrap>
                                            + $682
                                        </Typography>
                                        <Typography variant="h6" color="secondary" noWrap>
                                            16%
                                        </Typography>
                                    </Stack>
                                </ListItemSecondaryAction>
                            </ListItemButton>
                        </List>
                    </MainCard> */}
                    {/* <MainCard sx={{ mt: 2 }}>
                        <Stack spacing={3}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Stack>
                                        <Typography variant="h5" noWrap>
                                            Help & Support Chat
                                        </Typography>
                                        <Typography variant="caption" color="secondary" noWrap>
                                            Typical replay within 5 min
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item>
                                    <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                        <Avatar alt="Remy Sharp" src={avatar1} />
                                        <Avatar alt="Travis Howard" src={avatar2} />
                                        <Avatar alt="Cindy Baker" src={avatar3} />
                                        <Avatar alt="Agnes Walker" src={avatar4} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                                Need Help?
                            </Button>
                        </Stack>
                    </MainCard> */}
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardDefault;
