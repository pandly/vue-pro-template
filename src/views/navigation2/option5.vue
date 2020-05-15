<template>
  <div class="view">
    \{{ userName }}
  </div>
</template>

<script>
import { API_USER } from '@/api'
export default {
  name: '',
  data () {
    return {
      userName: ''
    }
  },
  mounted () {
    this.$_get(API_USER).then(res => {
      this.userName = res.userName
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
