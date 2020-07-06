<template>
  <div class="category-page section-padding section-margin">
    <div class="section-title text-center">
      <p class="section-title-p">
        Cord
        <span class="title-span">Logos</span>
      </p>
    </div>

    <div class="seo-desc text-center">
      <p
        class="seo-p"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores sit ipsum facilis earum? Corrupti eligendi, nisi, atque sed sit eum iste ab, distinctio debitis pariatur nam praesentium iure? Tenetur.</p>
    </div>

    <div class="row">
      <div class="col-md-4" v-for="(user, index) in users" :index="index" :key="user.id">
        <nuxt-link :to="'/posts/'+user.get_description[0].slug">
          <div class="cover-overlay-img">
            <div>
              <img
                :src="'https://corddigital.com/art/public/images/' + user.single_photo"
                :alt="user.get_description[0].main_img_alt"
                class="image-100"
              />
            </div>

            <div class="single-overlay-name">
              <span class="circle-name"></span>
              <span class="circle-name-link">
                <font-awesome-icon :icon="['far', 'hand-scissors']"></font-awesome-icon>
                {{ user.get_description[0].title }}
              </span>
            </div>

            <div class="single-overlay-actions">
              <span class="circle"></span>
              <span class="circle-link">
                <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- <div class="row">
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
    </div> -->

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
export default {
  data() {
    return {
      users: []
    };
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch() {
    const res = await this.$axios.post(
      "https://corddigital.com/art/public/api/all_data_in_cat",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    this.users = JSON.parse(JSON.stringify(res.data.Data));
    console.log(this.users);
  },

  methods: {}
};
</script>