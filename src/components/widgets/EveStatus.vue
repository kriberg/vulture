<template>
  <div>
    <span>{{eveTime}}</span> -
    <span class="has-text-success">{{status.players|intcomma}}</span> players online
  </div>
</template>

<script>
  import axios from 'axios'

  function pad (n) {
    return (new Array(2).join('0') + n).slice(-2)
  }

  export default {
    name: 'EveStatus',
    data () {
      return {
        status: {},
        eveTime: '',
        statusTimer: '',
        eveTimeTimer: ''
      }
    },
    created () {
      this.updateEveTime()
      this.updateStatus()
      this.statusTimer = setInterval(this.updateStatus, 20000)
      this.eveTimeTimer = setInterval(this.updateEveTime, 1000)
    },
    methods: {
      updateStatus () {
        axios.get('https://esi.tech.ccp.is/latest/status/?datasource=tranquility').then((res) => {
          this.status = res.data
        }).catch(error => {
          console.log(error)
        })
      },
      updateEveTime () {
        let now = new Date()
        this.eveTime = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}`
      }
    },
    beforeDestroy () {
      clearInterval(this.statusTimer)
      clearInterval(this.eveTimeTimer)
    }
  }
</script>

<style scoped="">
</style>
