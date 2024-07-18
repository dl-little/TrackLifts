import { Link } from "react-router-dom";

type Route = {
  title: string;
  path: string;
  icon: string;
  slug?: string;
};

interface INavigationBar {
  routes: Route[];
}

const NavigationBar: React.FC<INavigationBar> = ({ routes }) => {
  return (
    <ul className="flex fixed bottom-0 left-0 w-full justify-around">
      {routes.map((route) => {
        return (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationBar;
