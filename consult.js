const consult = document.createElement('template');
consult.innerHTML = `

<!-- Consult Section -->
<div class="con-sec">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-7">
                <div class="content">
                    <h1>Start Planning and Implementing your IT Project</h1>
                    <p>Our expert full-stack development team can built you all type of industry specific web and
                        mobile applications. </p>
                </div>
            </div>
            <div class="col-12 col-lg-5 d-flex con-btn">
                <button onclick="location.href='contact-us.html';">Consult our Expert Developer</button>
            </div>
        </div>
    </div>
</div>
<!-- End Consult Section -->
`

document.body.appendChild(consult.content);
