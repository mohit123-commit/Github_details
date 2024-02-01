import React from "react";
import "./NavBarComp.css";

const NavBarComp = () => {
  return (
    <div>
      <div classname="container-xxl position-relative p-0">
        <nav classname="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href classname="navbar-brand p-0">
            <h1 classname="text-primary m-0">
              <i classname="fa fa-utensils me-3">Restoran</i>
            </h1>
            <i classname="fa fa-utensils me-3">
              <img src="img/logo.png" alt="Logo" />
            </i>
          </a>
          <i classname="fa fa-utensils me-3">
            <button
              classname="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span classname="fa fa-bars"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarCollapse">
              <div classname="navbar-nav ms-auto py-0 pe-4">
                <a href="index.html" classname="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" classname="nav-item nav-link">
                  About
                </a>
                <a href="service.html" classname="nav-item nav-link">
                  Service
                </a>
                <a href="menu.html" classname="nav-item nav-link">
                  Menu
                </a>
                <div classname="nav-item dropdown">
                  <a
                    href="#"
                    classname="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div classname="dropdown-menu m-0">
                    <a href="booking.html" classname="dropdown-item">
                      Booking
                    </a>
                    <a href="team.html" classname="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" classname="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <a href="contact.html" classname="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a href classname="btn btn-primary py-2 px-4">
                Book A Table
              </a>
            </div>
          </i>
        </nav>
        <i classname="fa fa-utensils me-3">
          <div classname="container-xxl py-5 bg-dark hero-header mb-5">
            <div classname="container my-5 py-5">
              <div classname="row align-items-center g-5">
                <div classname="col-lg-6 text-center text-lg-start">
                  <h1 classname="display-3 text-white animated slideInLeft">
                    Enjoy Our
                    <br />
                    Delicious Meal
                  </h1>
                  <p classname="text-white animated slideInLeft mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <a
                    href
                    classname="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Book A Table
                  </a>
                </div>
                <div classname="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img classname="img-fluid" src="img/hero.png" alt />
                </div>
              </div>
            </div>
          </div>
        </i>
      </div>
      <i classname="fa fa-utensils me-3"></i>
    </div>
  );
};

export default NavBarComp;
