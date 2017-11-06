import Vue from 'vue'

Vue.filter('deccomma', function (value) {
  let val = (value / 1).toFixed(2)
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.filter('intcomma', function (value) {
  let val = (value / 1)
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
