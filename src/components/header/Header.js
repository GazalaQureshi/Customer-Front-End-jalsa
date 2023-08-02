import React, { useEffect, useState } from 'react'
import "./Header.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { VscAccount } from "react-icons/vsc"
import { GrNotification } from "react-icons/gr"
import { MdManageSearch } from "react-icons/md"
import insta from "../../images/logos/instagram.png"
import logo from "../../images/logos/fs-logo.png"
import flag from "../../images/flag.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCrossCircled } from 'react-icons/rx'


const Header = () => {

    const navigate = useNavigate()

    const [currentURL, setCurrentURL] = useState(window.location.pathname)
    console.log(currentURL);
    const [headactive, setHeadactive] = useState(currentURL);

    const [istoggle, setIstoggle] = useState(false)

    const toggleham = () => {
        return (
            setIstoggle((prev) => !prev)
        )
    }
    console.log(istoggle);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setIstoggle(true)
            }
            else {
                setIstoggle(false)
            }

        };

        handleResize();

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    const [sidebar, setsidebar] = useState(false)

    const opensidebar = () => {

        setsidebar(true)
        document.body.style.overflow = "hidden"

    }
    const closesidebar = () => {
        setsidebar(false)
        document.body.style.overflow = "scroll"

    }
    const headerArr = [
        {
            name: "Salwar Kameez",
            url: "/salwar-kameez"
        },
        {
            name: "Kurtis",
            url: "/kurtis"
        },
        {
            name: "Pret",
            url: "/Pret"
        },
        {
            name: "Blouses",
            url: "/Blouses"
        },
        {
            name: "Wedding",
            url: "/Wedding"

        },
        {
            name: "Men",
            url: "/mens"

        },
        {
            name: "Unstitched",
            url: "/Unstitched"
        },
        {
            name: "Kids",
            url: "/kids-boys"

        },
        {
            name: "Home & Living",
            url: "/home-living"

        },
        {
            name: "Sale",
            url: "/sale"

        },


    ]

    const backhome = () => {
        navigate("/")
    }

    return (
        <header className="header">

            {
                window.innerWidth > 1000 &&

                <div className="header-top">
                    <ul className='header-top-icons'>
                        <li ><FaFacebookF className='ic' /></li>
                        <li><FaInstagram className='ic' color="black"/></li>
                        <li ><FaTwitter className='ic' /></li>

                    </ul>
                    <div style={{ display: "flex" }}>
                        <div className='header-top-content'>
                            Offer: Buy 2 get 1 Free
                        </div>
                        <div className="header-top-flag-container">
                            <img src={flag} alt="Indian flag" className="header-top-flag" />
                        </div>
                    </div>

                </div>
            }
{/* header middle****************************************************************************** */}
            <div className="header-middle header-middle-section">
                <div className='header-middle-1 header-middle-head-logo'>
                    <img src={logo} className="header-middle-logo logo-mb" alt="fdf" onClick={() => backhome()} />
                </div>
                
                <ul className='only-mobile-nav'>
                    <li style={{display:"none" }} className='head-icons-6'><RxHamburgerMenu onClick={() => opensidebar()} color="black" /></li>
                </ul>


                <div className='header-middle-2'>
                    <div className='hm-input-search'>
                        <input type="text" className='hm-input' />
                        <MdManageSearch className='hm-search' />
                    </div>
                    <ul className='header-middle-icons header-middle-icons-for-mb'>
                        {/* <li><Link to="/wishlist" > <AiOutlineHeart color="black"/></Link></li> */}
                        <li className='head-icons-1'><Link to="/wishlist" ><AiOutlineHeart color="black" /></Link></li>
                        <li className='head-icons-2'><Link to="/set-profile" ><VscAccount color="black" /></Link></li>
                        <li className='head-icons-3'><Link to="/offers" ><GrNotification color="black" /></Link></li>
                        <li className='head-icons-4'><Link to="/cart" ><AiOutlineShoppingCart color="black" /></Link></li>
                        <li style={{ display: "none" }} className='head-icons-5'><MdManageSearch color="black" /></li>
                    </ul>
                </div>
            </div>
            {/* header middilw ends********************************************************************************** */}
            {
                istoggle ? <ul className="header-bottom header-links">

                    {
                        headerArr.map((singlehd, index) => {
                            const { name, url } = singlehd

                            return (
                                <li key={index}>
                                    <NavLink
                                        to={url}
                                        className={({ isActive }) => {
                                            return (
                                                (isActive) ? "header-bottom-active" : "header-bottom-nonactive"
                                            )
                                        }}

                                        style={{ textDecoration: "none" }}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })
                    }

                </ul> : ""

            }


            {
                sidebar ?
                    <div className={"header-link-part"}>
                        <div className='mobile-header-menu-part only-mobile-nav-mbsr' style={{ display: "none" }}>
                            <div className='menu-heading' style={{ display: "flex", padding: '0px 30px' }}>
                                <div className='menu-div' style={{ width: "50%", display: "flex", alignItems: 'center' }}>
                                    <span style={{ fontSize: '22px', textTransform: 'uppercase', fontWeight: '500', paddingLeft: '15px' }}>menu</span>
                                </div>
                                <ul className='only-mobile-nav-cross' style={{ width: "50%" }}>
                                    <li style={{ display: "none", textAlign: 'right', color: 'white' }} className='head-icons-6'><RxCrossCircled onClick={() => closesidebar()} color="white" /></li>
                                </ul>
                            </div>
                        </div>
                        {
                            istoggle ? "" : <ul className="header-bottom header-links">

                                {
                                    headerArr.map((singlehd, index) => {
                                        const { name, url } = singlehd

                                        return (
                                            <li key={index}>
                                                <NavLink
                                                    to={url}
                                                    className={({ isActive }) => {
                                                        return (
                                                            (isActive) ? "header-bottom-active" : "header-bottom-nonactive"
                                                        )
                                                    }}

                                                    style={{ textDecoration: "none" }}
                                                    onClick={() => closesidebar()}
                                                >
                                                    {name}
                                                </NavLink>
                                            </li>
                                        );
                                    })
                                }

                            </ul>
                        }




                        <hr className='only-mobile-nav-mbsr' style={{ margin: '25px 50px', display: 'none' }} />
                        <ul className='only-mobile-nav-mbsr' style={{ paddingBottom: "30px", display: 'none' }}>
                            <li onClick={() => closesidebar()} style={{ display: "block", fontSize: '1.1rem', marginBottom: ".5rem" }} className='head-icons-6'><Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Sign In</Link></li>
                            <li style={{ display: "block", fontSize: '1.1rem' }} className='head-icons-6'><>Help Center</></li>
                        </ul>
                    </div> : ""
            }

        </header>
    )
}

export default Header