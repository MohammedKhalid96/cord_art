<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    class="navbar-expand-lg navbar-light bg-light fixed-top slideInDown"
  >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <div class="m-auto">
      <nuxt-link to="/" class="phone-navbrand">
        <img src="../assets/images/logo.png" alt />
      </nuxt-link>
    </div>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <nuxt-link to="/" class="nav-link">
          Home
          <span class="sr-only">(current)</span>
        </nuxt-link>
        <b-nav-item-dropdown text="Graphics" left>
          <b-dropdown-item to="/category">Logos</b-dropdown-item>
          <b-dropdown-item to="/category">Motion graphic</b-dropdown-item>
          <b-dropdown-item to="/category">Photography</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Photography" left>
          <b-dropdown-item to="/category">Logos</b-dropdown-item>
          <b-dropdown-item to="/category">Motion graphic</b-dropdown-item>
          <b-dropdown-item to="/category">Photography</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Video" left>
          <b-dropdown-item to="/video">Logos</b-dropdown-item>
          <b-dropdown-item to="/video">Motion graphic</b-dropdown-item>
          <b-dropdown-item to="/video">Photography</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Audio" left>
          <b-dropdown-item to="/audio">Logos</b-dropdown-item>
          <b-dropdown-item to="/audio">Motion graphic</b-dropdown-item>
          <b-dropdown-item to="/audio">Photography</b-dropdown-item>
        </b-nav-item-dropdown>
        <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
      </b-navbar-nav>

      <b-navbar-brand class="m-auto">
        <nuxt-link to="/" class="navbar-brand">
          <img src="../assets/images/logo.png" alt />
        </nuxt-link>
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="mr-auto">
        <b-nav-item class="pop-link" href="javaScript:void(0)">Send Message</b-nav-item>
        <b-nav-item href="tel:+201022088753">Call Us</b-nav-item>
        <!-- <b-nav-item
          target="_blank"
          href="https://www.google.com/maps?ll=30.060219,31.19157&z=14&t=m&hl=en-GB&gl=EG&mapclient=embed&cid=10221371947719016578"
        >Location</b-nav-item> -->
        <b-nav-item href="mailto:info@corddigital.com">info@corddigital.com</b-nav-item>
        <b-nav-item>info@corddigital.com</b-nav-item>
        <nuxt-link to="/" class="nav-link lang ar-lang">
          ع
        </nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import $ from "jquery";
export default {
  mounted: () => {
    $(".pop-link").click(function(e) {
      $(".popup").removeClass("none");
      $(".popup").addClass("animated zoomIn");
    });

    $(".dropdown").hover(
      function() {
        $(this)
          .find(".dropdown-menu")
          .stop(true, true)
          .delay(100)
          .fadeIn(500);
      },
      function() {
        $(this)
          .find(".dropdown-menu")
          .stop(true, true)
          .delay(100)
          .fadeOut(500);
      }
    );
  }
};
</script>