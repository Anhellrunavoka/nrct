import React from 'react';
import { NavLink } from 'react-router';

const ProdMenu = () => {
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
                    to="/products"
                    className={({ isActive }) =>
                        `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
                            isActive
                                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`
                    }
                >
                    Osnovne
                </NavLink>

                <NavLink
                    to="/prodPage"
                    className={({ isActive }) =>
                        `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
                            isActive
                                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`
                    }
                >
                    Dop
                </NavLink>

            </nav>
        </div>
    );
}

export default ProdMenu;