import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

// react icons
import {FaXmark, FaBars} from "react-icons/fa6"

import logo from '../../public/logos/logo-bg.png';

export default function Header() {
    const  [isMenuOpen, setIsMenuOpen] = useState(false)
    const  [isSticky, setIsSticky] = useState(false)

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.addEventListener('scroll', handleScroll)
            }
        }
    })

    // navitems array
    const navItems = [
        {link: "Home" , path: "/"},
        {link: "News" , path: "news"},
        {link: "Athletes" , path: "athletes"},
        {link: "Service" , path: "services"},
        {link: "Competitions" , path: "competitions"},
        {link: "Rank" , path: "rank"},
    ]
    // Theme
    const [theme, setTheme] = useState('light');
    
    const toggleMode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    
    <header className="w-full bg-brandPrimary  fixed top-0 left-0 right-0">  
        <nav className={`py-4 lg:px-15 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-brandPrimary duration-300": ""}`}>
            <div className="flex justify-between items-center text-base gap-8">
                <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
                    <img src={logo} alt="logo" className="w-10 inline-block items-center" />
                    <span className="text-white">egycanoepaddlers</span>
                </Link>


                {/* nav items for large devices */}
                <ul className="md:flex space-x-12 hidden">
                    {
                        navItems.map(({link , path}) => <Link to={path}  offset={-100} key={path} className="block text-base text-white hover:text-primaryBeige first:font-medium" >{link}</Link>)
                    }
                </ul>
                {/* btn for large devices  */}
                <div className="space-x-12 hidden lg:flex items-center">
                    <a href="#1" className="hidden lg:flex items-center text-white hover:text-primaryBeige">Login</a>
                    <button className="bg-primaryBeige text-black py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey hover:text-white" >Sign up</button>
                    <button  className="bg-black text-primaryBeige py-2 px-4 transition-all duration-300 rounded-full hover:bg-neutralGrey hover:text-white" ><span className="icon-moon-o"></span></button>
                </div>
                {/* menu btn for only mobile devices */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-white focus:outline-none focus:text-primaryBeige ">
                        {
                            isMenuOpen ? (<FaXmark  className="h-6 w-6 "/>) : (<FaBars  className="h-6 w-6 "/>)
                        }
                    </button>
                </div>
            </div>
        </nav>  
        {/* nav items for mobile devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
            {
                navItems.map(({link , path}) => <Link to={path} onClick={toggleMenu} offset={-100} key={path} className="block text-base text-white hover:text-primaryBeige first:font-medium" >{link}</Link>)
            }
        </div>
        
    </header>


  )
}
