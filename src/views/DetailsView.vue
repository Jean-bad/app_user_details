<template>
    <DetailsUser :user="user" />
</template>

<script>
import DetailsUser from '@/components/DetailsUser.vue';
import { useUserStore } from '../stores/userStore.js';

  export default {
    components: {
      DetailsUser,
    },
    setup(){
      return {userStore:useUserStore()}
    },
    data() {
      return {
        user: null
      }
    },
    async mounted () {
        this.user = await this.userStore.findUserById(this.userId)
    },
    computed: {
      userId() {
        return this.$route.params.id 
      }
    },
    watch:{
      async userId(value){
        this.user = await this.userStore.findUserById(value)
        
      }
    }
  }
</script>
