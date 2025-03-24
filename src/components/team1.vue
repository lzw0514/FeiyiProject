<template>
  <div class="thq-section-padding">
    <div class="team1-max-width thq-section-max-width">
      <div class="team1-section-title">
        <span class="thq-body-small team1-text10">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="team1-fragment28">
              <span class="team1-text58">Join Our Team Today!</span>
            </div>
          </slot>
        </span>
        <div class="team1-content10">
          <h2 class="thq-heading-2 team1-text11">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="team1-fragment21">
                <span class="team1-text51">Meet Our Team</span>
              </div>
            </slot>
          </h2>
          <p class="thq-body-large team1-text12">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="team1-fragment16">
                <span class="team1-text46">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span v-html="rawp2wm"></span>
                </span>
              </div>
            </slot>
          </p>
        </div>
      </div>
      <div class="team1-content11">
        <div class="team1-content12">
          <div class="team1-row1">
            <div class="team1-container1">
              <div class="team1-card1">
                <img
                  :alt="member1Alt"
                  :src="member1Src"
                  class="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content13">
                  <div class="team1-title1">
                    <span class="team1-text13 thq-body-small">
                      <slot name="member1">
                        <!--Default content for member1-->
                        <div class="team1-fragment15">
                          <span class="team1-text45">Liu Wei</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text14 thq-body-small">
                      <slot name="member1Job">
                        <!--Default content for member1Job-->
                        <div class="team1-fragment30">
                          <span class="team1-text60">
                            Traditional Crafts Expert
                          </span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text15 thq-body-small">
                    <slot name="member1Content">
                      <!--Default content for member1Content-->
                      <div class="team1-fragment38">
                        <span class="team1-text68">
                          Liu Wei is a passionate advocate for preserving
                          China&apos;s traditional crafts. With over 20 years of
                          experience in woodworking and pottery, Liu Wei brings a
                          wealth of knowledge to our team.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="team1-card2">
                <img
                  :alt="member2Alt"
                  :src="member2Src"
                  class="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content14">
                  <div class="team1-title2">
                    <span class="team1-text16 thq-body-small">
                      <slot name="member2">
                        <!--Default content for member2-->
                        <div class="team1-fragment13">
                          <span class="team1-text43">Zhang Mei</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text17 thq-body-small">
                      <slot name="member2Job">
                        <!--Default content for member2Job-->
                        <div class="team1-fragment14">
                          <span class="team1-text44">
                            Chinese Opera Specialist
                          </span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text18 thq-body-small">
                    <slot name="member2Content">
                      <!--Default content for member2Content-->
                      <div class="team1-fragment39">
                        <span class="team1-text69">
                          Zhang Mei is a seasoned performer and researcher of
                          Chinese opera. Her dedication to promoting this ancient
                          art form is truly inspiring.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="team1-container2">
              <div class="team1-card3">
                <img
                  :alt="member3Alt"
                  :src="member3Src"
                  class="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content15">
                  <div class="team1-title3">
                    <span class="team1-text19 thq-body-small">
                      <slot name="member3">
                        <!--Default content for member3-->
                        <div class="team1-fragment31">
                          <span class="team1-text61">Wang Tao</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text20 thq-body-small">
                      <slot name="member3Job">
                        <!--Default content for member3Job-->
                        <div class="team1-fragment25">
                          <span class="team1-text55">Calligraphy Master</span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text21 thq-body-small">
                    <slot name="member3Content">
                      <!--Default content for member3Content-->
                      <div class="team1-fragment34">
                        <span class="team1-text64">
                          Wang Tao&apos;s calligraphy skills are unparalleled,
                          making him a revered figure in the world of Chinese
                          calligraphy. He is committed to passing on this
                          traditional art to future generations.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="team1-card4">
                <img
                  :alt="member4Alt"
                  :src="member4Src"
                  class="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content16">
                  <div class="team1-title4">
                    <span class="team1-text22 thq-body-small">
                      <slot name="member4">
                        <!--Default content for member4-->
                        <div class="team1-fragment36">
                          <span class="team1-text66">Li Hua</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text23 thq-body-small">
                      <slot name="member4Job">
                        <!--Default content for member4Job-->
                        <div class="team1-fragment32">
                          <span class="team1-text62">Traditional Musician</span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text24 thq-body-small">
                    <slot name="member4Content">
                      <!--Default content for member4Content-->
                      <div class="team1-fragment24">
                        <span class="team1-text54">
                          Li Hua&apos;s mastery of traditional Chinese musical
                          instruments is truly remarkable. She is dedicated to
                          preserving and sharing the beauty of traditional Chinese
                          music.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="team1-row2">
            <div class="team1-container3">
              <div class="team1-card5">
                <img
                  :alt="member5Alt"
                  :src="member5Src"
                  class="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content17">
                  <div class="team1-title5">
                    <span class="team1-text25 thq-body-small">
                      <slot name="member5">
                        <!--Default content for member5-->
                        <div class="team1-fragment35">
                          <span class="team1-text65">Full name</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text26 thq-body-small">
                      <slot name="member5Job">
                        <!--Default content for member5Job-->
                        <div class="team1-fragment11">
                          <span class="team1-text41">Job title</span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text27 thq-body-small">
                    <slot name="member5Content">
                      <!--Default content for member5Content-->
                      <div class="team1-fragment26">
                        <span class="team1-text56">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="team1-card6">
                <img
                  :alt="member6Alt"
                  :src="member6Src"
                  class="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content18">
                  <div class="team1-title6">
                    <span class="team1-text28 thq-body-small">
                      <slot name="member6">
                        <!--Default content for member6-->
                        <div class="team1-fragment27">
                          <span class="team1-text57">Full name</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text29 thq-body-small">
                      <slot name="member6Job">
                        <!--Default content for member6Job-->
                        <div class="team1-fragment19">
                          <span class="team1-text49">Job title</span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text30 thq-body-small">
                    <slot name="member6Content">
                      <!--Default content for member6Content-->
                      <div class="team1-fragment20">
                        <span class="team1-text50">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons6">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="team1-container4">
              <div class="team1-card7">
                <img
                  :alt="member7Alt"
                  :src="member7Src"
                  class="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content19">
                  <div class="team1-title7">
                    <span class="team1-text31 thq-body-small">
                      <slot name="member7">
                        <!--Default content for member7-->
                        <div class="team1-fragment12">
                          <span class="team1-text42">Full name</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text32 thq-body-small">
                      <slot name="member7Job">
                        <!--Default content for member7Job-->
                        <div class="team1-fragment18">
                          <span class="team1-text48">Job title</span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text33 thq-body-small">
                    <slot name="member7Content">
                      <!--Default content for member7Content-->
                      <div class="team1-fragment17">
                        <span class="team1-text47">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons7">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="team1-card8">
                <img
                  :alt="member8Alt"
                  :src="member8Src"
                  class="team1-placeholder-image8 thq-img-round thq-img-ratio-1-1"
                />
                <div class="team1-content20">
                  <div class="team1-title8">
                    <span class="team1-text34 thq-body-small">
                      <slot name="member8">
                        <!--Default content for member8-->
                        <div class="team1-fragment33">
                          <span class="team1-text63">Full name</span>
                        </div>
                      </slot>
                    </span>
                    <span class="team1-text35 thq-body-small">
                      <slot name="member8Job">
                        <!--Default content for member8Job-->
                        <div class="team1-fragment23">
                          <span class="team1-text53">Job title</span>
                        </div>
                      </slot>
                    </span>
                  </div>
                  <span class="team1-text36 thq-body-small">
                    <slot name="member8Content">
                      <!--Default content for member8Content-->
                      <div class="team1-fragment22">
                        <span class="team1-text52">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
                <div class="team1-social-icons8">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                    ></path></svg
                  ><svg
                    viewBox="0 0 950.8571428571428 1024"
                    class="thq-icon-small"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="team1-content21">
          <div class="team1-content22">
            <h2 class="thq-heading-2 team1-text37">
              <slot name="heading2">
                <!--Default content for heading2-->
                <div class="team1-fragment37">
                  <span class="team1-text67">We’re hiring!</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small team1-text38">
              <slot name="content3">
                <!--Default content for content3-->
                <div class="team1-fragment29">
                  <span class="team1-text59">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span v-html="rawtc9k"></span>
                  </span>
                </div>
              </slot>
            </span>
          </div>
          <button class="team1-button thq-button-filled">
            <span class="thq-body-small">
              <slot name="actionContent">
                <!--Default content for actionContent-->
                <div class="team1-fragment10">
                  <span class="team1-text40">Open positions</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team1',
  props: {
    member3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member2Alt: {
      type: String,
      default: 'Image of Zhang Mei, Chinese Opera Specialist',
    },
    member4Alt: {
      type: String,
      default: 'Image of Li Hua, Traditional Musician',
    },
    member3Alt: {
      type: String,
      default: 'Image of Wang Tao, Calligraphy Master',
    },
    member1Alt: {
      type: String,
      default: 'Image of Liu Wei, Traditional Crafts Expert',
    },
    member5Src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    member5Alt: {
      type: String,
      default: 'Member Alt',
    },
    member6Alt: {
      type: String,
      default: 'Member Alt',
    },
    member4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1611244420182-82cc3323eadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member8Alt: {
      type: String,
      default: 'Member Alt',
    },
    member6Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1631882456892-54a30e92fe4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member7Alt: {
      type: String,
      default: 'Member Alt',
    },
    member1Src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    member8Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1581182800629-7d90925ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member7Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1615538786254-ad8b50de17dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  data() {
    return {
      raw76ca: ' ',
      raw31br: ' ',
      rawp2wm: ' ',
      rawtc9k: ' ',
    }
  },
}
</script>

<style scoped>
.team1-max-width {
  gap: var(--dl-layout-space-fiveunits);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.team1-section-title {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-content10 {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-content11 {
  gap: var(--dl-layout-space-sixunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-content12 {
  gap: 64px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.team1-row1 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
 
.team1-container1 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.team1-card1 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image1 {
  width: 80px;
  height: 80px;
}
 
.team1-content13 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title1 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text13 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text14 {
  text-align: center;
}
 
.team1-text15 {
  text-align: center;
}
 
.team1-social-icons1 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-card2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image2 {
  width: 80px;
  height: 80px;
}
 
.team1-content14 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title2 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text16 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text17 {
  text-align: center;
}
 
.team1-text18 {
  text-align: center;
}
 
.team1-social-icons2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-container2 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.team1-card3 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image3 {
  width: 80px;
  height: 80px;
}
 
.team1-content15 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title3 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text19 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text20 {
  text-align: center;
}
 
.team1-text21 {
  text-align: center;
}
 
.team1-social-icons3 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-card4 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image4 {
  width: 80px;
  height: 80px;
}
 
.team1-content16 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title4 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text22 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text23 {
  text-align: center;
}
 
.team1-text24 {
  text-align: center;
}
 
.team1-social-icons4 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-row2 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
 
.team1-container3 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.team1-card5 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image5 {
  width: 80px;
  height: 80px;
}
 
.team1-content17 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title5 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text25 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text26 {
  text-align: center;
}
 
.team1-text27 {
  text-align: center;
}
 
.team1-social-icons5 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-card6 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image6 {
  width: 80px;
  height: 80px;
}
 
.team1-content18 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title6 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text28 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text29 {
  text-align: center;
}
 
.team1-text30 {
  text-align: center;
}
 
.team1-social-icons6 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-container4 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.team1-card7 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image7 {
  width: 80px;
  height: 80px;
}
 
.team1-content19 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title7 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text31 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text32 {
  text-align: center;
}
 
.team1-text33 {
  text-align: center;
}
 
.team1-social-icons7 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-card8 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-placeholder-image8 {
  width: 80px;
  height: 80px;
}
 
.team1-content20 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-title8 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.team1-text34 {
  font-style: normal;
  font-weight: 600;
}
 
.team1-text35 {
  text-align: center;
}
 
.team1-text36 {
  text-align: center;
}
 
.team1-social-icons8 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.team1-content21 {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-direction: column;
}
 
.team1-content22 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.team1-button {
  width: 100%;
  max-width: 300px;
}
 
.team1-fragment10 {
  display: contents;
}
 
.team1-text40 {
  display: inline-block;
}
 
.team1-fragment11 {
  display: contents;
}
 
.team1-text41 {
  display: inline-block;
}
 
.team1-fragment12 {
  display: contents;
}
 
.team1-text42 {
  display: inline-block;
}
 
.team1-fragment13 {
  display: contents;
}
 
.team1-text43 {
  display: inline-block;
}
 
.team1-fragment14 {
  display: contents;
}
 
.team1-text44 {
  display: inline-block;
}
 
.team1-fragment15 {
  display: contents;
}
 
.team1-text45 {
  display: inline-block;
}
 
.team1-fragment16 {
  display: contents;
}
 
.team1-text46 {
  display: inline-block;
}
 
.team1-fragment17 {
  display: contents;
}
 
.team1-text47 {
  display: inline-block;
}
 
.team1-fragment18 {
  display: contents;
}
 
.team1-text48 {
  display: inline-block;
}
 
.team1-fragment19 {
  display: contents;
}
 
.team1-text49 {
  display: inline-block;
}
 
.team1-fragment20 {
  display: contents;
}
 
.team1-text50 {
  display: inline-block;
}
 
.team1-fragment21 {
  display: contents;
}
 
.team1-text51 {
  display: inline-block;
}
 
.team1-fragment22 {
  display: contents;
}
 
.team1-text52 {
  display: inline-block;
}
 
.team1-fragment23 {
  display: contents;
}
 
.team1-text53 {
  display: inline-block;
}
 
.team1-fragment24 {
  display: contents;
}
 
.team1-text54 {
  display: inline-block;
}
 
.team1-fragment25 {
  display: contents;
}
 
.team1-text55 {
  display: inline-block;
}
 
.team1-fragment26 {
  display: contents;
}
 
.team1-text56 {
  display: inline-block;
}
 
.team1-fragment27 {
  display: contents;
}
 
.team1-text57 {
  display: inline-block;
}
 
.team1-fragment28 {
  display: contents;
}
 
.team1-text58 {
  display: inline-block;
}
 
.team1-fragment29 {
  display: contents;
}
 
.team1-text59 {
  display: inline-block;
}
 
.team1-fragment30 {
  display: contents;
}
 
.team1-text60 {
  display: inline-block;
}
 
.team1-fragment31 {
  display: contents;
}
 
.team1-text61 {
  display: inline-block;
}
 
.team1-fragment32 {
  display: contents;
}
 
.team1-text62 {
  display: inline-block;
}
 
.team1-fragment33 {
  display: contents;
}
 
.team1-text63 {
  display: inline-block;
}
 
.team1-fragment34 {
  display: contents;
}
 
.team1-text64 {
  display: inline-block;
}
 
.team1-fragment35 {
  display: contents;
}
 
.team1-text65 {
  display: inline-block;
}
 
.team1-fragment36 {
  display: contents;
}
 
.team1-text66 {
  display: inline-block;
}
 
.team1-fragment37 {
  display: contents;
}
 
.team1-text67 {
  display: inline-block;
}
 
.team1-fragment38 {
  display: contents;
}
 
.team1-text68 {
  display: inline-block;
}
 
.team1-fragment39 {
  display: contents;
}
 
.team1-text69 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .team1-content11 {
    gap: var(--dl-layout-space-fourunits);
  }
}
 
@media(max-width: 767px) {
  .team1-row1 {
    align-items: center;
    flex-direction: column;
  }
  .team1-row2 {
    align-items: center;
    flex-direction: column;
  }
}
 
@media(max-width: 479px) {
  .team1-text10 {
    text-align: center;
  }
  .team1-text11 {
    text-align: center;
  }
  .team1-text12 {
    text-align: center;
  }
  .team1-container1 {
    flex-direction: column;
  }
  .team1-container2 {
    flex-direction: column;
  }
  .team1-container3 {
    flex-direction: column;
  }
  .team1-container4 {
    flex-direction: column;
  }
  .team1-text37 {
    text-align: center;
  }
  .team1-text38 {
    text-align: center;
  }
  .team1-button {
    width: 100%;
  }
}
</style>
