const footer = document.createElement('template');
footer.innerHTML = `

<!-- Footer -->

<div class="footer">
    <div class="links">
        <div class="container">
        <div class="row ">
            <div class=" col-12 col-lg-5" style="padding-right:15px">
                <a href="/"><img  height="50px" src="./images/logo-footer-v1.png"></a>
                <p>We are creative geeks, passionate for designing well crafted, simple and functional web and
                    mobiles apps.</p>
                <h3>CONNECT</h3>
                <nav class="f-icon">
                    <ul>
                    <li><a href="https://www.facebook.com/theworkingtown"><span><i class="fab fa-facebook-f"></i></span></a></li>
                    <li><a href="https://twitter.com/town_working"><span><i class="fab fa-twitter"></i></span></a></li>
                    <li><a href="https://www.instagram.com/theworkingtown/"><span><i class="fab fa-instagram"></i></span></a></li>
                    <li><a href="https://www.linkedin.com/company/working-town"><span><i class="fab fa-linkedin-in"></i></span></a></li>
                
                    </ul>
                </nav>
            </div>
            <div class="col-6 col-lg-2">
                <h3>SERVICES</h3>
                <ul>
                    <li><a href="custom-development.html">Custom Development</a></li>
                    <li><a href="mobile-development.html">Mobile Development</a></li>
                    <li><a href="sap-services.html">SAP Services</a></li>
                    <li><a href="ecommerce-services.html">ECommerce Services</a></li>
                    <li><a href="cloud-services.html">Cloud Services</a></li>
                    <li><a href="testing-services.html">Testing & QA Services</a></li>

                </ul>
            </div>
            <div class="col-lg-2 industry">
                <h3>INDUSTRIES</h3>
                <ul>
                    <li><a href="industries.html">Healthcare</a></li>
                    <li><a href="industries.html">Chemical</a></li>
                    <li><a href="industries.html">Manufacturing</a></li>
                    <li><a href="industries.html">Food &amp; Beverage</a></li>
                    <li><a href="industries.html">Hospitality</a></li>
                

                </ul>
            </div>
            <div class="col-6 col-lg-2">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="https://webmail.theworkingtown.com/" target="_blank">Employee Portal</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>

                </ul>
            </div>
        </div>
        </div>
    </div>
    <div class="copyrt-bar">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7">
                    <p> © 2022, The Working Town. All Rights Reserved</p>
                </div>
                <div class="col-12 col-lg-5 d-flex justify-content-center">
                    <span>
                        <a href="privacy-policy.html">Privacy Policy</a>
                        <a href="term-condition.html">Terms and Condition</a>
                    </span>
                </div>

            </div>
        </div>
    </div>
</div>


<!-- End Footer -->


`

document.body.appendChild(footer.content);
