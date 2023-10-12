const header = document.createElement('template');
header.innerHTML = `


<!-- Header -->
<div class="header">
    <div class="contact-bar">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ul>
                        <li><a href="mailto:info@theworkingtown.com"><span><i class="fas fa-envelope"></i></span>info@theworkingtown.com</a></li>
                        <li><a href="tel:+92-348-755-5556"><span><i class="fas fa-phone-alt"></i></span>+92-348-755-5556 
                        </a></li>
                        <li>
                            <div class="sm-icon">
                                <a href="https://www.facebook.com/theworkingtown"><span><i class="fab fa-facebook-f"></i></span></a>
                                <a href="https://twitter.com/town_working"><span><i class="fab fa-twitter"></i></span></a>
                                <a href="https://www.instagram.com/theworkingtown/"><span><i class="fab fa-instagram"></i></span></a>
                                <a href="https://www.linkedin.com/company/working-town"><span><i class="fab fa-linkedin-in"></i></span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="nav-sec">
        <div class="container">
            <div class="row">
                <div class="col-9 col-lg-3">
                    <div class="logo">
                        
                    <a title="The Working Town" href="/"><img src="./images/twt-logo-new.png"></a>
                    </div>
                </div>
                <div class="col-3 col-lg-9">
                    <div class="nav-bar">
                        <nav class="navbar">
                            <div>
                                <ul id="main-menu" class="sm sm-menu">
                                    <!-- navbar-nav -->
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about-us.html">Company</a></li>
                                    <li><a href="#">Service</a>
                                        <ul class="sub-menu">
                                        <li><a href="sap-services.html">SAP Services</a></li>
                                        <li><a href="testing-services.html">Testing & QA Services</a></li>
                                            <li><a href="custom-development.html">Custom Development</a></li>
                                            <li><a href="mobile-development.html">Mobile Development</a></li>
                                            <li><a href="ecommerce-services.html">Ecommerce Services</a></li>
                                            <li><a href="cloud-services.html">Cloud Services</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="industries.html">Industries</a>
                                       
                                    </li>
                                    <li><a href="#">Training</a></li>
                                    <li><a href="career.html">Careers</a></li>
                                    
                                </ul>
                            </div>
                        </nav>
                        <div class="nav-btn">
                            <button onclick="location.href='contact-us.html';" class="btn-yellow">CONTACT US</button>
                        </div>
                    </div>

                    <!-- Offcanvas Menu -->
                    <div class="nav-mob">

                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas" aria-controls="offcanvas">
                            <span><i class="fas fa-bars"></i></span>
                        </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas"
                            aria-labelledby="offcanvas">

                            <button type="button" class="btn-x" data-bs-dismiss="offcanvas"
                                aria-label="Close"><span><i class="fas fa-times"></i></span></button>

                            <div class="offcanvas-body">
                                <ul id="sub-menu" class="sm sm-menu">
                                    <!-- navbar-nav -->
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about-us.html">Company</a></li>
                                    <li><a href="#">Service</a>
                                        <ul class="sub-menu">
                                        <li><a href="sap-services.html">SAP Services</a></li>
                                        <li><a href="testing-services.html">Testing & QA Services</a></li>
                                            <li><a href="custom-development.html">Custom Development</a></li>
                                            <li><a href="mobile-development.html">Mobile Development</a></li>
                                            <li><a href="ecommerce-services.html">Ecommerce Services</a></li>   
                                            <li><a href="cloud-services.html">Cloud Services</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="industries.html">Industries</a>
                                       
                                    </li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <span><a href="#" class="btn-mobmenu">Let's Talk</a></span>
                                    <div class="contact-info">
                                    <li><a href="#"><span><i class="fas fa-envelope"></i></span>info@theworkingtown.com</a></li>
                                    <li><a href="#"><span><i class="fas fa-phone-alt"></i></span>+92-348-755-5556 </a></li>
                                    </div>
                                </ul>
                                
                            </div>
                        </div>
                
                    </div>

                    <!-- End Offcanvas -->
                </div>
            </div>
        </div>
    </div>




</div>

<!-- End Header -->



`


document.body.appendChild(header.content);