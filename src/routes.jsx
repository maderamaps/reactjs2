import React from "react";

const Pesertas = React.lazy(() => import("./component/peserta/pesertas"));
const Peserta = React.lazy(() => import("./component/peserta/peserta"));
const Materis = React.lazy(() => import("./component/materi/materi"));
const MaterisAdd = React.lazy(() => import("./component/materi/materis"));
const Home = React.lazy(() => import("./component/home/home"));

const routes = [
  { path: "/home", exact: true, component: Home },
  { path: "/peserta", exact: true, component: Pesertas },
  { path: "/peserta/:action", exact: true, component: Peserta },
  { path: "/peserta/:action/:id", exact: true, component: Peserta },
  { path: "/materi", exact: true, component: Materis },
  { path: "/materi/:action", exact: true, component: MaterisAdd },
  { path: "/materi/:action/:id", exact: true, component: MaterisAdd },
];

export default routes;
