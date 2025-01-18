import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="py-6 shadow-myShadow bg-gray-50 dark:bg-gray-800 dark:text-gray-100 mb-12 md:mb-6">
            <div className="container flex justify-between items-center">
                <Link to={"/"} className="flex gap-3">
                    <img className="w-5 h-full md:w-6 " src="/icons/logo.svg" alt="logo" />
                    <h1 className="text-base md:text-2xl font-semibold">Around The World</h1>
                </Link>
                <ThemeSwitcher />
            </div>
        </header>
    )
}