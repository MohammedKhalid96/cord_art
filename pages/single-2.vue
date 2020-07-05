<template>
  <div class="singl-category-page">
    <div id="scroll-to"></div>
    <div class="category-head">
      <img src="../assets/images/cover.png" alt class="width-100" />
    </div>

    <div class="single-category-body section-padding">
      <div class="single-category-caption">
        <div class="row">
          <div class="col-md-5">
            <div class="img-rel">
              <div class="single-img single-video-page">
                <iframe
                  class="unclicked-iframe"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3h58b0D_WJg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <div class="appreciate text-center">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" class="like" />
                  <font-awesome-icon :icon="['fas', 'grin-hearts']" class="happy none" />
                  <p class="appreciate-like small-margin">Appreciate</p>
                  <p class="appreciate-thanks small-margin none">Thank You</p>
                </div>
              </div>

              <div class="single-caption">
                <p class="single-title small-margin">Lorem Ipsum</p>
                <div class="line-1"></div>
                <div class="line-2"></div>
                <p
                  class="single-desc"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos, magni quia quisquam id sapiente cupiditate libero nisi minus sequi? Veritatis quas qui odio molestiae ullam asperiores sint, recusandae blanditiis.</p>
              </div>
            </div>
          </div>

          <div class="col-md-7">
            <div class="single-wrap">
              <h2 class="single-wrap-h2">Lorem Ipsum</h2>
              <p
                class="single-wrap-p"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.enim fugiat illum sed voluptatibus ullam officia veniam quae rerum, corporis ipsam minima iure modi repellat quam.</p>
              <div class="single-images">
                <div class="single-image single-video">
                  <iframe
                    class="unclicked-iframe"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3h58b0D_WJg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="single-images">
                <div class="single-image single-video">
                  <iframe
                    class="unclicked-iframe"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3h58b0D_WJg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="r-single-shape"></div>
    <div class="l-single-shape"></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted: () => {
    $(".appreciate").click(function() {
      $(this).css("background", "#fff");
      $(this).css("cursor", "unset");
      $(".appreciate svg").css("color", "#c3622a");
      $(".appreciate svg").css("transform", "rotate(0)");
      $(".appreciate-like").addClass("none");
      $(".appreciate-thanks").removeClass("none");
      $(".like").addClass("none");
      $(".happy").removeClass("none");
      $(".happy").addClass("animated fadeInUp");
      $(".appreciate-thanks").addClass("animated fadeInUp");
    });
  }
};
</script>