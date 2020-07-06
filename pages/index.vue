<template>
  <div class="home-page">
    <div class="big-slider">
      <div class="ag-format-container">
        <ul class="ag-glitch_list">
          <li class="ag-glitch_item"></li>
          <li class="ag-glitch_item"></li>
          <li class="ag-glitch_item"></li>
          <li class="ag-glitch_item"></li>
          <li class="ag-glitch_item"></li>
        </ul>
      </div>

      <div class="big-slider-overlay">
        <div class="big-slider-overlay-caption">
          <div class="glitch" data-text="Strobocops">
            <span class="glitch__color glitch__color--red">CORD GRAPHICS</span>
            <span class="glitch__color glitch__color--blue">CORD GRAPHICS</span>
            <span class="glitch__main">CORD GRAPHICS</span>
            <span class="glitch__line glitch__line--first"></span>
            <span class="glitch__line glitch__line--second"></span>
          </div>

          <p
            class="big-slider-disc"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores sit ipsum facilis earum? Corrupti eligendi, nisi, atque sed sit eum iste ab, distinctio debitis pariatur nam praesentium iure? Tenetur.</p>
        </div>
      </div>
    </div>

    <div
      class="home-category section-padding print first-home-secticategory"
      :style="{ backgroundImage: `url(${backgroundUrl0})` }"
    >
      <div class="row no-gutters">
        <div class="col-md-7">
          <div class="cover-img mobile-img">
            <img src="../assets/images/test3.png" alt class="image-100" />
            <div class="cover-overlay"></div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="home-category-caption">
            <h2 class="home-category-title">
              Cord
              <span class="title-span">Printing & Packaging</span>
            </h2>
            <p
              class="home-category-desc"
            >Lorem ipsum dolor sit litm. Debitis, esse facere neque luptas! Ipsa fugiat iste iusto quos ipsum maxime cum possimus? Sint.</p>
            <div class="single-overlay-actions">
              <nuxt-link to="/category">
                <span class="circle"></span>
                <span class="circle-link">
                  <font-awesome-icon icon="angle-double-right"></font-awesome-icon>View All Printing & Packaging Projects
                </span>
              </nuxt-link>
            </div>
            <div class="cover-img-overlay">
              <div class="row no-gutters">
                <div
                  class="col-md-4"
                  v-for="(category, index) in categories"
                  :index="index"
                  :key="category.id"
                >
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img
                        :src="'https://corddigital.com/art/public/images/' + category.single_photo"
                        alt
                        class="image-100"
                      />
                      <div class="single-overlay-name">
                        <span class="circle-name"></span>
                        <span class="circle-name-link">
                          <font-awesome-icon :icon="['far', 'hand-scissors']"></font-awesome-icon>
                          {{ category.get_description[0].title }}
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
                <!-- 
                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-5.jpg" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-8.jpg" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="r-shape-bg"></div>
    </div>

    <div
      class="home-category logos section-padding section-margin"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <div class="row">
        <div class="col-md-7">
          <div class="cover-img mobile-img">
            <img src="../assets/images/branding0.png" alt class="image-100" />
            <div class="cover-overlay"></div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="home-category-caption">
            <h2 class="home-category-title">
              Cord
              <span class="title-span">Branding & Logos</span>
            </h2>
            <p
              class="home-category-desc"
            >Lorem ipsum dolor sit litm. Debitis, esse facere neque luptas! Ipsa fugiat iste iusto quos ipsum maxime cum possimus? Sint.</p>
            <div class="single-overlay-actions">
              <nuxt-link to="/category">
                <span class="circle"></span>
                <span class="circle-link">
                  <font-awesome-icon icon="angle-double-right"></font-awesome-icon>View All Branding & Logos Projects
                </span>
              </nuxt-link>
            </div>
            <div class="cover-img-overlay">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-6.png" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-5.jpg" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-8.jpg" alt class="image-100" />
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
            </div>
          </div>
        </div>
      </div>
      <div class="l-shape-bg"></div>
    </div>

    <div
      class="home-category social section-padding section-margin"
      :style="{ backgroundImage: `url(${backgroundUrl2})` }"
    >
      <div class="row">
        <div class="col-md-7">
          <div class="cover-img mobile-img">
            <img src="../assets/images/socialmedia0.png" alt class="image-100" />
            <div class="cover-overlay"></div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="home-category-caption">
            <h2 class="home-category-title">
              Cord
              <span class="title-span">Social Media</span>
            </h2>
            <p
              class="home-category-desc"
            >Lorem ipsum dolor sit litm. Debitis, esse facere neque luptas! Ipsa fugiat iste iusto quos ipsum maxime cum possimus? Sint.</p>
            <div class="single-overlay-actions">
              <nuxt-link to="/category">
                <span class="circle"></span>
                <span class="circle-link">
                  <font-awesome-icon icon="angle-double-right"></font-awesome-icon>View All Social Media Projects
                </span>
              </nuxt-link>
            </div>
            <div class="cover-img-overlay">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-6.png" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-5.jpg" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-8.jpg" alt class="image-100" />
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
            </div>
          </div>
        </div>
      </div>
      <div class="r-shape-bg"></div>
    </div>

    <div
      class="home-category video section-padding section-margin"
      :style="{ backgroundImage: `url(${backgroundUrl3})` }"
    >
      <div class="row">
        <div class="col-md-7">
          <div class="cover-img mobile-img">
            <img src="../assets/images/video.png" alt class="image-100" />
            <div class="cover-overlay"></div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="home-category-caption">
            <h2 class="home-category-title">
              Cord
              <span class="title-span">Video & Multimedia</span>
            </h2>
            <p
              class="home-category-desc"
            >Lorem ipsum dolor sit litm. Debitis, esse facere neque luptas! Ipsa fugiat iste iusto quos ipsum maxime cum possimus? Sint.</p>
            <div class="single-overlay-actions">
              <nuxt-link to="/category">
                <span class="circle"></span>
                <span class="circle-link">
                  <font-awesome-icon icon="angle-double-right"></font-awesome-icon>View All Video & Multimedia Projects
                </span>
              </nuxt-link>
            </div>
            <div class="cover-img-overlay">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-6.png" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-5.jpg" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-8.jpg" alt class="image-100" />
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
            </div>
          </div>
        </div>
      </div>
      <div class="l-shape-bg"></div>
    </div>

    <div
      class="home-category photography section-padding section-margin"
      :style="{ backgroundImage: `url(${backgroundUrl4})` }"
    >
      <div class="row">
        <div class="col-md-7">
          <div class="cover-img mobile-img">
            <img src="../assets/images/video.png" alt class="image-100" />
            <div class="cover-overlay"></div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="home-category-caption">
            <h2 class="home-category-title">
              Cord
              <span class="title-span">Photography</span>
            </h2>
            <p
              class="home-category-desc"
            >Lorem ipsum dolor sit litm. Debitis, esse facere neque luptas! Ipsa fugiat iste iusto quos ipsum maxime cum possimus? Sint.</p>
            <div class="single-overlay-actions">
              <nuxt-link to="/category">
                <span class="circle"></span>
                <span class="circle-link">
                  <font-awesome-icon icon="angle-double-right"></font-awesome-icon>View All Photography Projects
                </span>
              </nuxt-link>
            </div>
            <div class="cover-img-overlay">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-6.png" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-5.jpg" alt class="image-100" />
                      <div class="single-overlay-actions">
                        <span class="circle"></span>
                        <span class="circle-link">
                          <font-awesome-icon icon="angle-double-right"></font-awesome-icon>More Details
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-4">
                  <nuxt-link to="/single">
                    <div class="cover-overlay-img">
                      <img src="../assets/images/port-8.jpg" alt class="image-100" />
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
            </div>
          </div>
        </div>
      </div>
      <div class="r-shape-bg"></div>
      <div class="l-shape-bg"></div>
    </div>

    <div
      class="home-category home-audio section-padding section-margin"
      :style="{ backgroundImage: `url(${backgroundUrl3})` }"
    >
      <div class="row">
        <div class="col-md-7">
          <div class="cover-img mobile-img">
            <img src="../assets/images/video.png" alt class="image-100" />
            <div class="cover-overlay"></div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="home-category-caption">
            <h2 class="home-category-title">
              Cord
              <span class="title-span">Audio</span>
            </h2>
            <p
              class="home-category-desc"
            >Lorem ipsum dolor sit litm. Debitis, esse facere neque luptas! Ipsa fugiat iste iusto quos ipsum maxime cum possimus? Sint.</p>
            <div class="single-overlay-actions">
              <nuxt-link to="/category">
                <span class="circle"></span>
                <span class="circle-link">
                  <font-awesome-icon icon="angle-double-right"></font-awesome-icon>View All Audio Projects
                </span>
              </nuxt-link>
            </div>
            <div class="cover-img-overlay">
              <div class="row">
                <div class="col-md-6">
                  <div class="audio">
                    <audio controls>
                      <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="audio">
                    <audio controls>
                      <source src="../assets/audio/blippy-trance.mp3" type="audio/mpeg" />Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="l-shape-bg"></div>
    </div>

    <div class="contact-section section-padding">
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
              <img src="../assets/images/final-map-small-size.png" alt class="image-100" />
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
  </div>
</template>

<script>
import backgroundUrl0 from "~/assets/images/test3.png";
import backgroundUrl from "~/assets/images/branding0.png";
import backgroundUrl2 from "~/assets/images/socialmedia0.png";
import backgroundUrl3 from "~/assets/images/video.png";
import backgroundUrl4 from "~/assets/images/photography0.png";

export default {
  data() {
    return {
      backgroundUrl0,
      backgroundUrl,
      backgroundUrl2,
      backgroundUrl3,
      backgroundUrl4,
      categories: []
    };
  },

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch() {
    const res = await this.$axios.post(
      "https://corddigital.com/art/public/api/all_cat",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    this.categories = JSON.parse(JSON.stringify(res.data.Data));
    console.log(this.categories);
  },

  methods: {
    mouseMove(e, scope) {
      scope.material.uniforms.uSpeed.value = (e.x + e.y) / 2500;
    }
  }
};
</script>

