// assets
import { ChromeOutlined, QuestionOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined,
    ShoppingCartOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Ventas',
    type: 'group',
    children: [
        {
            id: 'Nueva_Venta',
            title: 'Venta Contado',
            type: 'item',
            url: '/venta',
            icon: icons.ShoppingCartOutlined,
            breadcrumbs: false
        },
        {
            id: 'historialVenta',
            title: 'Historial Venta',
            type: 'item',
            url: '/historialVenta',
            icon: icons.ShoppingCartOutlined,
            breadcrumbs: false
        },
        {
            id: 'reporteVentas',
            title: 'Reporte Venta',
            type: 'item',
            url: '/ReporteVenta',
            icon: icons.ShoppingCartOutlined,
            breadcrumbs: false
        }
    ]
};

export default support;
