<template>
  <div class="thq-section-padding">
    <div class="thq-section-max-width">
      <div class="heritage-accent2-bg">
        <div class="heritage-accent1-bg">
          <div class="heritage-container">
            <div class="heritage-content">
              <span class="thq-heading-2">
                <div class="heritage-fragment">
                  <span class="heritage-title">中国入选联合国教科文组织非物质文化遗产名录（名册）项目</span>
                </div>
              </span>
            </div>
            <div class="heritage-display">
              <iframe
                  src="/HTML/lianheguo.html"
                  frameborder="0"
                  class="heritage-iframe"
                  loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heritage-list',
}
</script>

<style scoped>
/* 基础布局变量继承 */
.heritage-accent2-bg {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
  rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: #6b88a5;
}

.heritage-accent2-bg:hover {
  transform: scale3d(1.02, 1.02, 1.02);
}

.heritage-accent1-bg {
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
  rotateX(0deg) rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent1);
}

.heritage-container {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  flex-direction: column;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-layout-space-fourunits);
  padding-left: var(--dl-layout-space-threeunits);
  border-radius: var(--dl-layout-radius-cardradius);
  padding-right: var(--dl-layout-space-threeunits);
  padding-bottom: var(--dl-layout-space-fourunits);
  background-color: #f5f7fa;
}

/*点击背景*/
.heritage-container:hover {
  background-color: rgba(40, 70, 110, 0.9);
}

.heritage-content {
  width: 100%;
  text-align: center;
}

.heritage-title {
  color:  #102840;
/*  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.3;
  display: inline-block;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);*/
  display: inline-block;
}

.heritage-display {
  width: 100%;
  min-height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
}

.heritage-iframe {
  width: 100%;
  height: 700px;
  border: none;
  background: white;
  transition: all 0.3s ease;
}

.heritage-iframe:hover {
  transform: scale(1.005);
}

/* 响应式设计 */
@media (max-width: 991px) {
  .heritage-title {
    font-size: 1.6rem;
  }

  .heritage-iframe {
    height: 500px;
  }
}

@media (max-width: 767px) {
  .heritage-container {
    gap: var(--dl-layout-space-unit);
    padding: var(--dl-layout-space-twounits);
  }

  .heritage-title {
    font-size: 1.4rem;
  }

  .heritage-iframe {
    height: 400px;
  }
}

@media (max-width: 479px) {
  .heritage-title {
    font-size: 1.2rem;
  }

  .heritage-iframe {
    height: 350px;
  }
}
</style>