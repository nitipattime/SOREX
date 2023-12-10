import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu } = props;

    const location = useLocation();

    const [home, setHome] = useState(false)
	const [about, setAbout] = useState(false)
	const [service, setService] = useState(false)
	const [page, setPage] = useState(false)
	const [blog, setBlog] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setAbout(false)
			setService(false)
			setPage(false)
			setBlog(false)
		}
		else if (menu === 'about') {
			setHome(false)
			setAbout(!about)
			setService(false)
			setPage(false)
			setBlog(false)
		}
		else if (menu === 'service') {
			setHome(false)
			setAbout(false)
			setService(!service)
			setPage(false)
			setBlog(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setAbout(false)
			setService(false)
			setPage(!page)
			setBlog(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setAbout(false)
			setService(false)
			setPage(false)
			setBlog(!blog)
		}
	};

    return (
        <>
            <li className={parentMenu === 'home' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/">Home</Link>
                <ul className={home ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Creative Agency</Link></li>
                    <li className={location.pathname === "/home-2" ? "active" : ""}><Link to="/home-2">Personal Portfolio</Link></li>
                    <li className={location.pathname === "/home-3" ? "active" : ""}><Link to="/home-3">Startup Business</Link></li>
                    <li className={location.pathname === "/home-4" ? "active" : ""}><Link to="/home-4">Digital Agency</Link></li>
                    <li className={location.pathname === "/home-5" ? "active" : ""}><Link to="/home-5">IT Service Agency</Link></li>
                </ul>
                <a className={home ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('home'); }}><i className="fal fa-plus"></i></a>
            </li>
            <li className={parentMenu === 'about' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/about-us">About</Link>
                <ul className={about ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/about-me" ? "active" : ""}><Link to="/about-me">About Me</Link></li>
                    <li className={location.pathname === "/about-us" ? "active" : ""}><Link to="/about-us">About US</Link></li>
                </ul>
                <a className={about ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('about'); }}><i className="fal fa-plus"></i></a>
            </li>
            <li className={parentMenu === 'service' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/service-details">Service</Link>
                <ul className={service ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/service-1" ? "active" : ""}><Link to="/service-1">Service 01</Link></li>
                    <li className={location.pathname === "/service-2" ? "active" : ""}><Link to="/service-2">Service 02</Link></li>
                    <li className={location.pathname === "/service-3" ? "active" : ""}><Link to="/service-3">Service 03</Link></li>
                    <li className={location.pathname === "/service-details" ? "active" : ""}><Link to="/service-details">Service Details</Link></li>
                </ul>
                <a className={service ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('service'); }}><i className="fal fa-plus"></i></a>
            </li>
            <li className={parentMenu === 'page' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/#">Page</Link>
                <ul className={page ? "submenu has-megamenu submenu-open" : "submenu has-megamenu"}>
                    <li className={location.pathname === "/project" ? "active" : ""}><Link to="/project">Portfolio</Link></li>
                    <li className={location.pathname === "/project-1" ? "active" : ""}><Link to="/project-1">Portfolio Filter 1</Link></li>
                    <li className={location.pathname === "/project-2" ? "active" : ""}><Link to="/project-2">Portfolio Filter 2</Link></li>
                    <li className={location.pathname === "/project-masonary" ? "active" : ""}><Link to="/project-masonary">Portfolio Masonry</Link></li>
                    <li className={location.pathname === "/project-details" ? "active" : ""}><Link to="/project-details">Portfolio Details</Link></li>
                    <li className={location.pathname === "/product" ? "active" : ""}><Link to="/product">Product</Link></li>
                    <li className={location.pathname === "/product-details" ? "active" : ""}><Link to="/product-details">Product Details</Link></li>
                    <li className={location.pathname === "/testimonial" ? "active" : ""}><Link to="/testimonial">Testimonial</Link></li>
                    <li className={location.pathname === "/job" ? "active" : ""}><Link to="/job">Job</Link></li>
                    <li className={location.pathname === "/job-details" ? "active" : ""}><Link to="/job-details">Job Details</Link></li>
                    <li className={location.pathname === "/faq" ? "active" : ""}><Link to="/faq">Faq</Link></li>
                    <li className={location.pathname === "/price" ? "active" : ""}><Link to="/price">Price</Link></li>
                    <li className={location.pathname === "/cart" ? "active" : ""}><Link to="/cart">Cart</Link></li>
                    <li className={location.pathname === "/checkout" ? "active" : ""}><Link to="/checkout">Checkout</Link></li>
                    <li className={location.pathname === "/login" ? "active" : ""}><Link to="/login">Login</Link></li>
                    <li className={location.pathname === "/register" ? "active" : ""}><Link to="/register">Register</Link></li>
                    <li className={location.pathname === "*" ? "active" : ""}><Link to="/404">404</Link></li>
                </ul>
                <a className={page ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('page'); }}><i className="fal fa-plus"></i></a>
            </li>
            <li className={parentMenu === 'blog' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/blog-details">Blog</Link>
                <ul className={blog ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/blog" ? "active" : ""}><Link to="/blog">Blog Sidebar</Link></li>
                    <li className={location.pathname === "/blog-details" ? "active" : ""}><Link to="/blog-details">Blog Details</Link></li>
                </ul>
                <a className={blog ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('blog'); }}><i className="fal fa-plus"></i></a>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
        </>
    );
}

export default MenuItems;