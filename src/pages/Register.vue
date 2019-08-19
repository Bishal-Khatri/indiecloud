<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <form @submit.prevent="register()">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Full Name..." v-model="name"
            >
            </fg-input>
             <fg-input class="no-border input-lg"
                placeholder="Email Address..."
                type="email"
                v-model="email"
                addon-left-icon="now-ui-icons ui-1_email-85">
            </fg-input>
            <fg-input class="no-border input-lg"
                placeholder="Password"
                type="password"
                v-model="password"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open">
            </fg-input>
            <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
               <a
                href="#pablo"
                class="btn btn-neutral btn-google btn-icon btn-lg btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-twitter btn-icon btn-round"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button class="btn btn-primary btn-round btn-lg btn-block" >Register</button>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
          </form>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';

export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data(){
    return{
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    register(){
      var form = {
        'name':this.name,
        'email':this.email,
        'password':this.password,
      }
       this.$http.post(this.$baseURI+'register', {form})
      .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      console.log(this.$baseURI+'register')
    }
  }
};
</script>
<style></style>
