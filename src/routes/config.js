/**Pages */
import {
  HomePage,
  InfrastructuresPage,
  LeakSearchPage,
  EnergeticEfficiencyPage,
  SelectCompanyPage
} from "pages";
/**Containers */
import OperationState from "containers/OperationState/OperationState";
import DetailedOverview from "containers/DetailedOverview/DetailedOverview";
import WildcardContainer from "containers/WildcardContainer/WildcardContainer";

const routes = [
  {
    path: "/select-company",
    component: SelectCompanyPage,
    breadcrumbs: [{ url: "", label: "Select Company" }],
    exact: false
  },
  {
    path: "/home",
    component: HomePage,
    breadcrumbs: [{ url: "", label: "Home" }],
    exact: false
  },
  {
    path: "/infraestructures",
    component: InfrastructuresPage,
    breadcrumbs: [{ url: "", label: "Infraestructures" }],
    exact: false
  },
  {
    path: "/energetic-efficiency",
    component: EnergeticEfficiencyPage,
    breadcrumbs: [{ url: "", label: "Energetic_Efficiency" }],
    exact: false
  },
  {
    path: "/leakSearch",
    component: LeakSearchPage,
    breadcrumbs: [{ url: "", label: "Leak_Search" }],
    exact: false
  },
  {
    path: "/portal-users",
    component: HomePage,
    exact: false,
    breadcrumbs: [
      { url: "/home/operation-state", label: "Home" },
      { url: "", label: "Administration Panel" },
      { url: "", label: "Users" }
    ]
  },
  {
    path: "/",
    redirect: true,
    redirectTo: '/home/operation-state',
  }
];

const nestedRoutes = {
  "/home": [
    {
      path: "/home/operation-state",
      component: OperationState,
      label: "Operation_State",
      breadcrumbs: [
        { url: "/", label: "Home" },
        { url: "", label: "Operation_State" }
      ],
      exact: true
    },
    {
      path: "/home/detailed-overview",
      component: DetailedOverview,
      label: "Detailed_Overview",
      breadcrumbs: [
        { url: "/", label: "Home" },
        { url: "/", label: "Detailed_Overview" }
      ],
      exact: true
    }
  ],
  "/infraestructures": [
    {
      path: "/infraestructures",
      component: WildcardContainer,
      breadcrumbs: [{ url: "", label: "Infraestructures" }],
      exact: false
    }
  ],
  "/energetic-efficiency": [
    {
      path: "/energetic-efficiency",
      component: WildcardContainer,
      breadcrumbs: [{ url: "", label: "Energetic_Efficiency" }],
      exact: true
    }
  ],
  "/leakSearch": [
    {
      path: "/leakSearch",
      component: WildcardContainer,
      breadcrumbs: [{ url: "", label: "Leak_Search" }],
      exact: true
    }
  ]
};

export { routes, nestedRoutes };
