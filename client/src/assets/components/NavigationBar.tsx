import Icons from './Icons';
import { NavLink } from 'react-router-dom';
import data from '../routes.json';
const routes = data.routes as Route[];

type Route = {
  title: string;
  path: string;
  icon: keyof typeof Icons;
  slug?: string;
};

const NavigationBar: React.FC = () => {
  return (
    <ul className="inline-flex fixed bottom-0 left-0 w-full min-h-[4%]">
      {routes.map((route: Route) => {
        return (
          <li
            className="flex-1 [&:not(:last-child)]:border-r-neutral-100 [&:not(:last-child)]:border-r-2"
            key={route.title}
          >
            <NavLink
              className="group [&.active]:dark:bg-neutral-900 [&.active]:pointer-events-none [&.active>svg]:dark:fill-blue-300 [&.active>svg]:fill-blue-500 w-full dark:bg-neutral-800 dark:hover:bg-neutral-900 dark:text-neutral-100 bg-neutral-300 hover:bg-neutral-400 text-neutral-900 py-2 px-4 text-center h-full flex justify-center"
              to={route.path}
              title={route.title}
            >
              <p className="screen-reader-text">{route.title}</p>
              {Icons[route.icon]}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationBar;
