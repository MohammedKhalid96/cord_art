<template>
  <div class="contact-page section-padding section-margin">
    <div class="section-title text-center">
      <p class="section-title-p">
        Contact
        <span class="title-span">Us</span>
      </p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="contact-info">
          <a
            target="_blank"
            href="https://www.google.com/maps?ll=30.060219,31.19157&z=14&t=m&hl=en-GB&gl=EG&mapclient=embed&cid=10221371947719016578"
          >19 El Gihad St, Lebanon Square, Mohandseen, Giza, Egypt</a>

          <a href="mailto:info@corddigital.com" tag="li">info@corddigital.com</a>
          <a href="tel:+201022088753" tag="li">Phone +201022088753</a>
          <a href="tel:+20233453074" tag="li">Landline +20233453074</a>
        </div>

        <div class="contact-map">
          <a
            target="_blank"
            href="https://www.google.com/maps?ll=30.060219,31.19157&z=14&t=m&hl=en-GB&gl=EG&mapclient=embed&cid=10221371947719016578"
          >
            <img src="../assets/images/map-small-2.png" alt class="image-100" />
          </a>
        </div>
      </div>

      <div class="col-md-8">
        <div class="contact">
          <div class="contact-form">
            <form action="#" method="post">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="form-name"
                      aria-describedby="name"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control"
                      id="form-phone"
                      aria-describedby="phone"
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="form-email"
                  aria-describedby="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div class="form-group">
                <textarea
                  type="text"
                  class="form-control"
                  rows="4"
                  id="form-msg"
                  aria-describedby="msg"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn action-btn">
                  <i class="fas fa-paper-plane"></i>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>