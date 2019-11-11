import { HomePage } from "../containers/HomePage";
import MapPage from "../containers/MapPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }],
  },
  {
    path: "/map",
    component: MapPage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '/', label: 'Map' }],
  },
  {
    path: "/infraestructures",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Infraestructures' }],
  },
  {
    path: "/energetic-efficiency",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Energetic Efficiency' }],
  },
  {
    path: "/leakSearch",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Leak Search' }],
  },
  {
    path: "/portal-users",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Administration Panel' }, { url: '', label: 'Users' }],
  }
];

export default routes;
