<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <h3><button class="btn btn-success" @click="loginAction">LINEログイン</button></h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created () {
    this.initializeLiff()
  },
  methods: {
    initializeLiff: function () {
      var me = this
      liff.init(
        {
          liffId: process.env.VUE_APP_LIFF_ID
        },
        data => {
          if (liff.isLoggedIn()) {
            // ログイン済み
            me.$router.push({ name: 'form' })
          }
        },
        err => {
          console.log('LIFF initialization failed', err)
        }
      )
    },
    loginAction: function () {
      // ログインまだ
      if (!liff.isLoggedIn()) {
        liff.login()
      }
    }
  }
}
</script>
