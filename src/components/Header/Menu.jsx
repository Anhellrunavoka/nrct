import React from 'react';
import { NavLink } from 'react-router';

const Menu = () => {
    return (
        <div>
            <nav className="flex items-center gap-1 h-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
              isActive
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`
          }
        >
          Home
        </NavLink>
 
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
              isActive
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`
          }
        >
          About
        </NavLink>
 
        <NavLink
          to="/todo"
          className={({ isActive }) =>
            `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
              isActive
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`
          }
        >
          ToDo
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
              isActive
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`
          }
        >
          Users
        </NavLink>
      </nav>
        </div>
    );
}   
export default Menu;