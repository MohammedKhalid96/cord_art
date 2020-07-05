<template>
  <footer class="footer">
    <div class="primary-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4">
            <div class="unique-footer-div">
              <div class="footer-logo small-margin">
                <img src="https://corddigital.com/images/logo-footer.png" alt />
              </div>
              <p
                class="mb-3"
              >Cord Digital is a business services company mainly in digital marketing, multimedia solutions, web solutions, graphic designs & photography, outsourcing & franchising.</p>

              <a target="_blank" href="https://corddigital.com/en" class="visit-site">
                <font-awesome-icon icon="globe-africa"></font-awesome-icon>Visit Our Main Website
              </a>

              <div class="social-icons mt-5">
                <h4 class="title">Follow Us</h4>
                <ul class="list-inline">
                  <li>
                    <a
                      href="https://www.facebook.com/corddigital/"
                      target="_blank"
                      class="facebook"
                    >
                      <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/corddigital" target="_blank" class="twitter">
                      <font-awesome-icon :icon="['fab', 'twitter']" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/corddigital/"
                      target="_blank"
                      class="linkedin"
                    >
                      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/corddigital/"
                      target="_blank"
                      class="instagram"
                    >
                      <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/corddigitalmarketing?sub_confirmation=1"
                      target="_blank"
                      class="youtube"
                    >
                      <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/corddigital/"
                      target="_blank"
                      class="pinterest"
                    >
                      <font-awesome-icon :icon="['fab', 'pinterest']" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/cord-digital" target="_blank" class="behance">
                      <font-awesome-icon :icon="['fab', 'behance']" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8 footer-link">
            <div class="row">
              <div class="col-lg-6 col-md-6 footer-list">
                <h4 class="title">Portfolio links</h4>
                <div class="row">
                  <div class="col-sm-5">
                    <ul class="list-unstyled">
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Social Media</a>
                      </nuxt-link>
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Pay Per Click</a>
                      </nuxt-link>
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>SEO</a>
                      </nuxt-link>
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Web Development</a>
                      </nuxt-link>
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Mobile Application</a>
                      </nuxt-link>
                    </ul>
                  </div>

                  <div class="col-sm-7">
                    <ul class="list-unstyled">
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Graphics & Photography</a>
                      </nuxt-link>
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Video & Multimedia</a>
                      </nuxt-link>
                      <nuxt-link to="/category" tag="li" target="_blank">
                        <a>Outsourcing-Franchising</a>
                      </nuxt-link>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 sm-mt-5">
                <h4 class="title">Contact us</h4>
                <ul class="media-icon list-unstyled">
                  <li>
                    <p class="mb-0">19 El Gihad St, Lebanon Square, Mohandseen, Giza, Egypt</p>
                  </li>
                  <div class="footer-contact">
                    <a href="mailto:info@corddigital.com" tag="li">info@corddigital.com</a>
                    <a href="tel:+201022088753" tag="li">Phone +201022088753</a>
                    <a href="tel:+20233453074" tag="li">Landline +20233453074</a>
                  </div>
                </ul>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-10 col-md-12 mr-auto">
                <div class="align-items-center white-bg d-md-flex justify-content-between sub-form">
                  <h4 class="mb-0 sub">NewsLetter</h4>
                  <div class="subscribe-form sm-mt-2">
                    <form id="mc-form" class="group">
                      <input
                        type="email"
                        value
                        name="email"
                        class="email"
                        id="mc-email"
                        placeholder="Email Address"
                        required
                      />
                      <input class="btn btn-theme" type="submit" name="subscribe" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="secondary-footer">
      <div class="container">
        <div class="copyright text-center">
          <div class="row align-items-center">
            <div class="col-md-12">
              <span>All Rights Reserved | Cord Digital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
