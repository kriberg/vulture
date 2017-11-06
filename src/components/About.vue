<template>
  <section class="hero is-bold is-dark nebula is-fullheight is-fullwidth">
    <div clasS="hero-body">
      <div class="columns">
        <div class="column is-offset-one-quarter is-one-quarter">
          <h1 class="title">Vulture</h1>
          <h2 class="subtitle">corporation management system</h2>
          <router-link class="button" to="/">Login</router-link>
        </div>
        <div class="column is-one-quarter">
          <h1 class="title">Legal</h1>

          <h2 class="title is-4">CCP</h2>
          <p>
            EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide.
            All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all
            associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters,
            vehicles, storylines, world facts or other recognizable features of the intellectual property relating to
            these trademarks are likewise the intellectual property of CCP hf. CCP hf. has granted permission to Armada
            Industrie to use EVE Online and all associated logos and designs for promotional and information purposes on
            its website but does not endorse, and is not in any way affiliated with, Armada Industries. CCP is in no way
            responsible for the content on or functioning of this website, nor can it be liable for any damage arising
            from the use of this website.
          </p>

          <h2 class="title is-4">License</h2>
          <p>
            Vulture, and the underlying backend service <a href="https://github.com/kriberg/stationspinner">
            stationspinner</a>, uses the AGPLv3 license. The
            <a href="https://github.com/kriberg/vulture/blob/master/LICENSE">license</a> is included with the
            <a href="https://github.com/kriberg/vulture">source code</a> and more details can be found
            <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">here</a> at the GNU organization's website.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped="">
  .nebula {
    background-image: url('../assets/images/login_background.jpg') !important;
    background-size: cover;
  }

  .column {
    background: rgba(0, 0, 0, 0.7);
  }

  .hero.is-dark a:not(.button), .hero.is-dark strong {
    color: #7957d5;
  }
  p {
    margin-bottom: 2rem;
  }
</style>
