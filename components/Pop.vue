<template>
  <div class="popup section-padding none">
    <p class="close-popup">
    <font-awesome-icon icon="times"></font-awesome-icon>
    Close</p>
    <div class="contact">
      <div class="section-title text-center">
        <p class="section-title-p">
          Send
          <span class="title-span">Message</span>
        </p>
      </div>
      <div class="contact-form">
        <form action="#" method="post">
          <div class="row">
            <div class="col-6">
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

            <div class="col-6">
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
</template>

<script>
import $ from "jquery";
export default {
  mounted: () => {
    $(".popup").click(function(e) {
      if ($(e.target).closest(".contact-form").length === 0) {
        $(".popup").toggleClass("none");
      }
    });
  }
};
</script>