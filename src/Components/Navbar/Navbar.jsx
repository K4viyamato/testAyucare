

import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import logo from '../../images/logo/SVG/black.svg'

import './navbar.css'

import { Turn as Hamburger } from 'hamburger-react'


 const MainNavbar = () => {

    const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  
    const links = [
      { id: 0, name: 'Home', path: '/' },
      { id: 1, name: 'About', path: '/about' },
      { id: 2, name: 'Services', path: '/services' },
      { id: 3, name: 'Contact', path: '/contact' },
      { id: 4, name: 'Location', path: '/location' },
    ];
 



  return (
    
    
      <Navbar className="sticky top-0 z-10 h-max max-w-full  py-1 px-4 lg:px-6 lg:py-2  bg-black border-0 ">
        <div className="flex items-center justify-between text-blueGray-900">
          <Typography
            as="span"
            href="#"
            className="cursor-pointer  text-2xl text-black duration-500 "
          >
            <NavLink to='/' className='flex'>
            <img src={logo} className="h-[70px] p-0 m-0"></img>
            {/* <span className=" px-2 pb-2 font-bold font-stylish text-[45px]">Ayu Care</span> */}
            </NavLink>
            
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
                <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

                    {links.map(link => (
                        <Typography 
                        key={link.id}
                        as="li"
                        variant="small"
                        
                        className={("p-1 text-xl font-semibold text-gray-950") } >
                        <NavLink to={link.path} className={({ isActive}) =>isActive ? "text-green-500 link-underline link-underline-black" : " link-underline link-underline-black"}>
                            {link.name}
                        </NavLink>
                        </Typography>
                    ))}

                    </ul>
            </div>
            
            <div className="text-2xl cursor-pointer block lg:hidden"
              
              onClick={() => setOpenNav(!openNav)}
            >
              <Hamburger toggled={openNav} toggle={setOpenNav} size={20} />
            </div>


          </div>
        </div>
        <Collapse open={openNav} className="fixed  bg-white w-full ml-[-16px]  mt-[2px] pb-[6px] rounded-b-[10px]">
        {links.map(link => (
                        <Typography 
                        key={link.id}
                        as="li"
                        variant="small"
                        
                        className="p-5 text-xl list-none text-gray-950 font-semibold">
                        <NavLink to={link.path} className={({ isActive}) =>isActive ? "text-green-500 link-underline link-underline-black" : "link-underline link-underline-black"}>
                            {link.name}
                        </NavLink>
                        </Typography>
                    ))}
          
        </Collapse>
      </Navbar>
      
    
  )
}

export default MainNavbar;