<template>
  <section class="hero is-bold is-dark nebula is-fullheight is-fullwidth">
    <div class="hero-body is-fullwidth">
      <div class="is-fullwidth columns ">
        <div class="column is-one-quarter is-offset-one-quarter is-vertical">
          <h1 class="title">Vulture</h1>
          <h2 class="subtitle">corporation management system</h2>
          <eve-status></eve-status>
        </div>
        <div class="column is-one-quarter has-text-centered">
          <h1 class="title is-5">activate module:</h1>
          <a class="module" href="https://login.eveonline.com">
            <img src="https://images.contentful.com/idjq7aai9ylm/4PTzeiAshqiM8osU2giO0Y/
5cc4cb60bac52422da2e45db87b6819c/EVE_SSO_Login_Buttons_Large_White.png?w=270&h=45" alt="EVE SSO login"/>
          </a>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container">
        <div class="content has-text-centered">
          <p class="has-text-weight-light">
            <strong>Vulture</strong> is part of the Armada suite of EVE tools, <i class="fa fa-code"></i> by Vittoros.
            Source code is <a href="https://github.com/kriberg/vulture/">available</a>
            under the <a href="https://github.com/kriberg/vulture/blob/master/LICENSE">AGPLv3 license</a>.<br>
            All
            <router-link to="/about">EVE related materials</router-link>
            are property of <a href="http://www.ccpgames.com/">CCP Games</a>.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import EveStatus from '@/components/widgets/EveStatus.vue'

  export default {
    name: 'Login',
    components: {
      EveStatus
    }
  }
</script>

<style scoped="">
  .nebula {
    background-image: url('../assets/images/login_background.jpg') !important;
    background-size: cover;
  }

  .hero-body {
    padding: 0;
  }

  .hero-body .columns {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    max-width: none;
    height: 15rem;
    margin: 0;
  }

  .hero-body .column {
    padding-top: 3rem;
  }

  .hero-foot .container {
    padding: 0;
    margin: 0;
    max-width: none;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .hero-foot .content {
    font-size: 0.7rem;
  }

  .hero-foot .content a {
    color: #7957d5;
  }

  @keyframes module-hot {
    from {
      box-shadow: 0 0 5px 0 hsl(141, 71%, 48%)
    }
    to {
      box-shadow: 0 0 5px 2px hsl(141, 71%, 48%)
    }
  }

  a.module img {
    animation: module-hot 0.8s infinite alternate;
  }

</style>
