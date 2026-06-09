function Footer() {
    return (
        <>
            <footer class="bg-dark text-light py-4 mt-5">
                <div class="container">

                    <div class="row">

                        <div class="col-md-4 mb-3">
                            <h5>AARVA Bike market place website</h5>
                            <p class="text-secondary">
                                "A website where anyone can buy or sell bikes anytime and anywhere"
                            </p>
                        </div>

                        <div class="col-md-4 mb-3">
                            <h5>Easy access :</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/" class="text-decoration-none text-light">Home</a>
                                </li>
                                <li>
                                    <a href="/about" class="text-decoration-none text-light">Edit</a>
                                </li>
                                <li>
                                    <a href="/services" class="text-decoration-none text-light">Profile</a>
                                </li>
                                <li>
                                    <a href="/contact" class="text-decoration-none text-light">About</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 mb-3">
                            <h5>Contact info :</h5>
                            <p class="mb-1">Email: jeeva.s.prashanth@gmail.com</p>
                            <p class="mb-1">Phone: +91 9380328307</p>
                        </div>

                    </div>

                    <hr class="border-secondary"></hr>

                    <div class="text-center">
                        <p class="mb-0">
                            © 2026 My Website. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer;