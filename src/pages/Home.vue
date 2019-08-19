<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Indie Cloud ™</h1>
          <h3>Connect on IndieCloud</h3>
          <div class="col text-center">
        <button type="button" @click="getRegister" class="btn btn-primary btn-lg">Sign up for free</button>
      </div>
        </div>
        <h6 class="category category-absolute">
          Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
        </h6>
      </div>
    </div>
    <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="img/hero-image-1.png" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/hero-image-2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/hero-image-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tranding-sound></tranding-sound>
    <new-sound></new-sound>
    <popular-sound></popular-sound>
    <signup-form></signup-form>
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax, Button } from '@/components';
import TrandingSound from './components/TrandingSound';
import NewSound from './components/NewSound';
import PopularSound from './components/PopularSound';
import SignupForm from './components/SignupForm';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    TrandingSound,
    NewSound,
    PopularSound,
    SignupForm,
    DownloadSection
  },
  methods:{
    getRegister(){
      this.$router.push({ path:'/register' })
    }
  }
};
</script>
<style></style>
