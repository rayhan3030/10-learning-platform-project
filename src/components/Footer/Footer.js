import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400 border">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-slate-800-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <Link rel="noopener noreferrer" to={'../faq'}>Frequently Asked Questions</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to={'../blog'}>Visit Blog Section</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <Link rel="noopener noreferrer" href="#">Instagram</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href="#">Facebook</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href="#">Twitter</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;