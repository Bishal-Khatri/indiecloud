<template>
  <navbar 
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img width="25" style="margin-top:-15px;" src="img/now-logo.png">  Indie Cloud ™
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          <img style="margin-top:-15px;background-color:#f96332;margin-top:5px;padding:10px;border-radius:15px;" width="150" src="img/now-logo.png">
          <!-- Designed by Invision. Coded by Creative Tim -->
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link" href="" target="">
          <i class="now-ui-icons arrows-1_cloud-download-93"></i>
          <p>Download</p>
        </a>
      </li>
      <drop-down tag="li" title="Explore">
        <nav-link class="dropdown-item">
          <i class="now-ui-icons shopping_box"></i> Artists
        </nav-link>
        <nav-link class="dropdown-item">
          <i class="now-ui-icons tech_headphones"></i> Sounds
        </nav-link>
      </drop-down>
      <span class="nav-space-right">|</span>
      <li class="nav-item float-right">
        <a class="nav-link" href="" target="" >
          <i class="now-ui-icons users_single-02"></i>
          <p>Login</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" target="" >
          <i class="now-ui-icons ui-1_lock-circle-open"></i>
          <p>Register</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.nav-space-right{
  margin-top: 8px;
  color: aliceblue;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
