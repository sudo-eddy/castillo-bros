import React, { useState } from "react";
import "./header.css";
import { BsWhatsapp } from "react-icons/bs";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from "../../assets/logo-long.png";

const Header = () => {
  const [showBasic, setShowBasic, showNavSecond, setShowNavSecond] =
    useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" className="custom-nav">
        <MDBContainer fluid className="custom-nav">
          <MDBNavbarBrand href="#" className="brand">
            <img src={logo} />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            // onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar>
            <MDBNavbarNav className="custom-nav">
              <MDBNavbarLink active aria-current="page" href="#about-us">
                About Us
              </MDBNavbarLink>
              <MDBNavbarLink href="#services">Services</MDBNavbarLink>
              <MDBNavbarLink
                className="nav-banner"
                href="https://api.whatsapp.com/send?phone=16307551481"
                target="_blank"
              >
                {" "}
                Hablamos español <BsWhatsapp className="wa-icon" />
              </MDBNavbarLink>
              <MDBNavbarLink href="tel:8156303149" className="contact-number">
                (815) 630-3149
              </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
          height: "600px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100 hero">
            <div>
              <h1 className="company-title">Castillos Brothers Auto Service</h1>
              <h5 className="mb-3 company-subtitle">
                Experts in precision emissions solutions.
              </h5>
              <h6 classsName="mb-3 company-subtitle">Joliet, IL</h6>
              <MDBBtn
                className="cta-button"
                tag="a"
                outline
                size="lg"
                href="#services"
              >
                Book your appointment
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
