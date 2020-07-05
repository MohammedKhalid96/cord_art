<template>
  <div class="category-page audio-page section-padding section-margin">
    <div class="section-title text-center">
      <p class="section-title-p">
        Cord
        <span class="title-span">Audios</span>
      </p>
    </div>

    <div class="row text-center">
      <div class="col-md-4">
        <div class="audio">
          <audio controls>
            <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div class="col-md-4">
        <div class="audio">
          <audio controls>
            <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div class="col-md-4">
        <div class="audio">
          <audio controls>
            <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div class="col-md-4">
        <div class="audio">
          <audio controls>
            <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div class="col-md-4">
        <div class="audio">
          <audio controls>
            <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div class="col-md-4">
        <div class="audio">
          <audio controls>
            <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>

    <div class="other-categories category-slider">
      <div class="other-categories-titles">
        <p class="other-categories-titles-p">
          Other
          <span class="title-span">Categories</span>
        </p>
      </div>
      <carousel
        :perPageCustom="[[320, 1], [768, 2], [1024, 4]]"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :scrollPerPage="false"
        :mouseDrag="false"
      >
        <slide>
          <div class="other-category">
            <nuxt-link to="/category">
              <div class="other-category-img">
                <img src="../assets/images/art.png" alt class="image-100" />
              </div>
            </nuxt-link>
          </div>
        </slide>

        <slide>
          <div class="other-category">
            <nuxt-link to="/category">
              <div class="other-category-img">
                <img src="../assets/images/digital.jpg" alt class="image-100" />
              </div>
            </nuxt-link>
          </div>
        </slide>
        <slide>
          <div class="other-category">
            <nuxt-link to="/category">
              <div class="other-category-img">
                <img src="../assets/images/port-7.jpg" alt class="image-100" />
              </div>
            </nuxt-link>
          </div>
        </slide>
        <slide>
          <div class="other-category">
            <nuxt-link to="/category">
              <div class="other-category-img">
                <img src="../assets/images/port-6.png" alt class="image-100" />
              </div>
            </nuxt-link>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {

};
</script>