<template>
  <div class="logos1-container1 thq-section-padding">
    <div class="logos1-max-width thq-section-max-width">
      <h2 class="logos1-text1 thq-heading-2">
        <slot name="heading1">
          <!--Default content for heading1-->
          <div class="logos1-fragment">
            <span class="logos1-text2">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </div>
        </slot>
      </h2>
      <div class="thq-grid-6">
        <img
          :alt="logo1Alt"
          :src="logo1Src"
          class="logos1-logo1 thq-img-ratio-16-9"
        />
        <img
          :alt="logo2Alt"
          :src="logo2Src"
          class="logos1-logo2 thq-img-ratio-16-9"
        />
        <img
          :alt="logo3Alt"
          :src="logo3Src"
          class="logos1-logo3 thq-img-ratio-16-9"
        />
        <img
          :alt="logo4Alt"
          :src="logo4Src"
          class="logos1-logo4 thq-img-ratio-16-9"
        />
        <img
          :alt="logo5Alt"
          :src="logo5Src"
          class="logos1-logo5 thq-img-ratio-16-9"
        />
        <img
          :alt="logo6Alt"
          :src="logo6Src"
          class="logos1-logo6 thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logos1',
  props: {
    logo5Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
    },
    logo3Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
    },
    logo6Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
    },
    logo2Alt: {
      type: String,
      default: 'Traditional Crafts Logo',
    },
    logo6Alt: {
      type: String,
      default: 'Support ICH Preservation Logo',
    },
    logo2Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
    },
    logo3Alt: {
      type: String,
      default: 'Performing Arts Logo',
    },
    logo5Alt: {
      type: String,
      default: 'Heritage Sites Logo',
    },
    logo4Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
    },
    logo1Alt: {
      type: String,
      default: 'Intangible Cultural Heritage Logo',
    },
    logo1Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
    },
    logo4Alt: {
      type: String,
      default: 'UNESCO Logo',
    },
  },
}
</script>

<style scoped>
.logos1-container1 {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.logos1-max-width {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.logos1-text1 {
  text-align: center;
}
 
.logos1-logo1 {
  object-fit: contain;
}
 
.logos1-logo2 {
  object-fit: contain;
}
 
.logos1-logo3 {
  object-fit: contain;
}
 
.logos1-logo4 {
  object-fit: contain;
}
 
.logos1-logo5 {
  object-fit: contain;
}
 
.logos1-logo6 {
  object-fit: contain;
}
 
.logos1-fragment {
  display: contents;
}
 
.logos1-text2 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .logos1-container1 {
    gap: var(--dl-layout-space-twounits);
  }
  .logos1-max-width {
    gap: var(--dl-layout-space-twounits);
  }
}
</style>
