import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="p-6 shadow-[0px_2px_4px_0px_#0000000E] bg-myWhite dark:bg-myDark dark:text-myGray">
            <div className="container flex justify-between items-center">
                <a href="/" className="flex gap-3">
                    <img src="/icons/logo.svg" alt="logo" />
                    <h1 className="text-2xl font-semibold">Around The World</h1>
                </a>
                <ThemeSwitcher />
            </div>
        </header>
    )
}