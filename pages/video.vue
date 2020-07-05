<template>
  <div class="category-page section-padding section-margin">
    <div class="section-title text-center">
      <p class="section-title-p">
        Cord
        <span class="title-span">Videos</span>
      </p>
    </div>

    <div class="seo-desc">
      <p
        class="seo-p"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores sit ipsum facilis earum? Corrupti eligendi, nisi, atque sed sit eum iste ab, distinctio debitis pariatur nam praesentium iure? Tenetur.</p>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="video">
          <iframe
            class="unclicked-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3h58b0D_WJg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="single-overlay-name">
            <nuxt-link to="/single-2">
              <span class="circle-name"></span>
              <span class="circle-name-link">
                <font-awesome-icon :icon="['far', 'hand-scissors']"></font-awesome-icon>New You
              </span>
            </nuxt-link>
          </div>

          <div class="single-overlay-actions">
            <nuxt-link to="/single-2">
              <span class="circle"></span>
              <span class="circle-link">
                <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="video">
          <iframe
            class="unclicked-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3h58b0D_WJg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="single-overlay-name">
            <nuxt-link to="/single-2">
              <span class="circle-name"></span>
              <span class="circle-name-link">
                <font-awesome-icon :icon="['far', 'hand-scissors']"></font-awesome-icon>New You
              </span>
            </nuxt-link>
          </div>

          <div class="single-overlay-actions">
            <nuxt-link to="/single-2">
              <span class="circle"></span>
              <span class="circle-link">
                <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="video">
          <iframe
            class="unclicked-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3h58b0D_WJg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="single-overlay-name">
            <nuxt-link to="/single-2">
              <span class="circle-name"></span>
              <span class="circle-name-link">
                <font-awesome-icon :icon="['far', 'hand-scissors']"></font-awesome-icon>New You
              </span>
            </nuxt-link>
          </div>

          <div class="single-overlay-actions">
            <nuxt-link to="/single-2">
              <span class="circle"></span>
              <span class="circle-link">
                <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="video">
          <iframe
            class="unclicked-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3h58b0D_WJg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="single-overlay-name">
            <nuxt-link to="/single-2">
              <span class="circle-name"></span>
              <span class="circle-name-link">
                <font-awesome-icon :icon="['far', 'hand-scissors']"></font-awesome-icon>New You
              </span>
            </nuxt-link>
          </div>

          <div class="single-overlay-actions">
            <nuxt-link to="/single-2">
              <span class="circle"></span>
              <span class="circle-link">
                <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
              </span>
            </nuxt-link>
          </div>
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
export default {};
</script>