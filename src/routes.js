import { Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";

export const routes = [
  { component: <Home />, title: "Home", path: "/home"}

];

export const AppRoutes = () => {
  return (
        <Routes>
        
        {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} exact/>
        ))}
        </Routes>
  );
};