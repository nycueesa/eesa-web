import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setPositionPage } from "./redux/commonSlice.js";
import "./Layout.css";


function TopNavbar() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Navbar variant="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid className = "custom-container">
        <Navbar.Brand as={Link} to="/" className = "main-logo">
          <div>
            AiSMART Lab        
          </div>      
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className = "nav-main-page" as={Link} to="/" >首頁</Nav.Link>
            <Nav.Link as={Link} to="/projects">研究計劃</Nav.Link>
            <Nav.Link as={Link} to="/research_area">研究成果</Nav.Link>
              <NavDropdown  title="成員介紹" 
                            id="basic-nav-dropdown"
                            className="nav-dropdown-members"
                            show={show1}
                            onMouseEnter={() => setShow1(true)}
                            onMouseLeave={() => setShow1(false)}> 
                <NavDropdown.Item as={Link} to="/professor">教授</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/members"> 其他成員</NavDropdown.Item>
              </NavDropdown>
            <NavDropdown  title="相關資訊" 
                          id="basic-nav-dropdown"
                          className='nav-dropdown-related'
                          show={show2}
                          onMouseEnter={() => setShow2(true)}
                          onMouseLeave={() => setShow2(false)}> 
              <NavDropdown.Item as={Link} to="/awards">獲獎資訊</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/news"> 相關新聞</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lectures">演講與課程</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function Footer() {

    return(
        <footer className="navbar-footer">
            <div className="contactRow">
            <span className="contactItem">| TEL | +886-3-xyz-xxxx</span>
            <span className="contactItem">| Email | AiSMARTLab@gmail.com</span>
            <span className="contactItem">| Address | 新竹市東區大學路1001號工程五館222室</span>
            </div>
            <hr className="contactHr" />
            <div className="contactCopyRight">
            Copyright © Autonomous intelligent Sensory Microsystems with Analog Reconfigurable Technologies Laboratory
            </div>
        </footer>      
    )
}

export default function Layout({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const positions = useSelector((state) => state.positionPage);

    // 頁面一載入就紀錄位置
    useEffect(() => {
      const currentPath = window.location.pathname;
      console.log("Current path:", currentPath);
      dispatch(setPositionPage(currentPath));
      // 存 localStorage
      localStorage.setItem('lastPath', currentPath);
    }, []);

    // 刷新自動 navigate
    useEffect(() => {
      console.log(positions);
    if (positions !== window.location.pathname) {
      navigate(positions, { replace: true });
    }
    }, [navigate]);  

  return (
    <div>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}