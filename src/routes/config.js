import { HomePage,  InfrastructuresPage, LeakSearchPage, EnergeticEfficiencyPage} from "pages";
import OperationState from "containers/OperationState/OperationState";
import DetailedOverview from "containers/DetailedOverview/DetailedOverview";
import WildcardContainer from "containers/WildcardContainer/WildcardContainer";


const routes = [
  {
    path: "/infraestructures",
    component: InfrastructuresPage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Infraestructures' }],
    exact: false,
  },
  {
    path: "/energetic-efficiency",
    component: EnergeticEfficiencyPage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Energetic Efficiency' }],
    exact: false,
  },
  {
    path: "/leakSearch",
    component: LeakSearchPage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Leak Search' }],
    exact: false,
  },
  {
    path: "/portal-users",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Administration Panel' }, { url: '', label: 'Users' }],
  },
  {
    path: "/",
    component: HomePage,
    breadcrumbs: [{ url: '/', label: 'Home' }],
    exact: false,
  },
];

const nestedRoutes = {
  "/": [
    {
      path: "/operation-state",
      component: OperationState,
      label: 'Operation State',
      breadcrumbs: [{ url: '/', label: 'Home' }, { url: '', label: 'Operation State' }],
      exact: false,
    },
    {
      path: "/detailed-overview",
      component: DetailedOverview,
      label: 'Detailed Overview',
      breadcrumbs: [{ url: '/', label: 'Home' }, { url: '/', label: 'Detailed Overview' }],
      exact: false,
    },
    {
      path: "/",
      component: OperationState,
      breadcrumbs: [{ url: '/', label: 'Home' }],
      exact: true,
    },
  ],
  "/infraestructures": [
    {
      path: "/infraestructures/detailed-overview",
      component: DetailedOverview,
      label: 'Detailed Overview',
      breadcrumbs: [{ url: '/infraestructures', label: 'Infraestructures' }, { url: '/', label: 'Detailed Overview' }],
      exact: false,
    },
    {
      path: "/infraestructures",
      component: WildcardContainer,
      breadcrumbs: [{ url: '/', label: 'Infrastructures' }],
      exact: true,
    },
  ],
  "/energetic-efficiency": [
    {
      path: "/energetic-efficiency",
      component: WildcardContainer,
      breadcrumbs: [{ url: '/', label: 'Energetic Efficiency' }],
      exact: true,
    },
  ],
  "/leakSearch": [
    {
      path: "/leakSearch",
      component: WildcardContainer,
      breadcrumbs: [{ url: '/', label: 'Leak Search' }],
      exact: true,
    },
  ],

}

export { routes, nestedRoutes };
