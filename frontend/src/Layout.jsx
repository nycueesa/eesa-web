import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPositionPage } from "./redux/commonSlice.js";
import styles from "./Layout.module.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { label: "系學會", icon: "/icons/user.svg", link: "/intro/eesa-intro" },
        { label: "系上活動", icon: "/icons/calendar.svg", link: "/event/event-intro" },
        { label: "學習資料", icon: "/icons/book-open.svg", link: "/resource/prevexam" },
        { label: "系隊", icon: "/icons/globe.svg", link: "/team" },
        { label: "其他資料", icon: "/icons/link.svg", link: "/file/calendar" },
    ];

    const handleMenuItemClick = (link) => {
        navigate(link);
        setMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && !e.target.closest(`.${styles.menuButton}`) && !e.target.closest(`.${styles.menuDropdown}`)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.logoSection} onClick={() => navigate("/")}>
                <img src="/icon.svg" alt="EESA Logo" className={styles.logo} />
                <span className={styles.logoText}>交大電機</span>
            </div>

            <button
                className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
            </button>

            <div className={`${styles.menuDropdown} ${menuOpen ? styles.open : ''}`}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={styles.menuItem}
                        onClick={() => handleMenuItemClick(item.link)}
                    >
                        <img src={item.icon} alt="" className={styles.menuItemIcon} />
                        {item.label}
                    </div>
                ))}
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactRow}>
                <span className={styles.contactItem}>| TEL | +886-3-xyz-xxxx</span>
                <span className={styles.contactItem}>| Email | AiSMARTLab@gmail.com</span>
                <span className={styles.contactItem}>| Address | 新竹市東區大學路1001號工程五館222室</span>
            </div>
            <hr className={styles.contactHr} />
            <div className={styles.contactCopyRight}>
                Copyright © Autonomous intelligent Sensory Microsystems with Analog Reconfigurable Technologies Laboratory
            </div>
        </footer>
    );
}

export default function Layout({ children }) {
    const location = useLocation();
    const dispatch = useDispatch();

    // Save current path to redux whenever location changes
    useEffect(() => {
        const currentPath = location.pathname;
        dispatch(setPositionPage(currentPath));
        localStorage.setItem('lastPath', currentPath);
    }, [location.pathname, dispatch]);

    const isMainPage = location.pathname === '/';

    return (
        <div>
            <Header />
            <main className={styles.mainContent}>{children}</main>
            {!isMainPage && <Footer />}
        </div>
    );
}
