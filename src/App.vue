<template>
  <div class="container">
    <Loading v-if="userStore.isLoading"/>
    <ul>
      <h3>Lista de usuarios</h3>
      <li v-for="user in userStore.users" :key="user.id">
        <router-link :to="{name: 'details', params:{id: user.id} }">
          {{ user.first_name }}</router-link>
      </li>
    </ul>
    <div class="container__btn">
      <button @click="userStore.previousPage">Anterior</button>
      <button @click="userStore.nextPage">Siguiente</button>
    </div>
    <router-view />
  </div>  
</template>

<script>
import Loading from './components/loading.vue';
import { useUserStore } from '../src/stores/userStore.js';

export default {
  components: {
    Loading
  },
  setup() {
    const userStore = useUserStore();
    return {userStore}
  },
  async mounted () {
    await this.userStore.fetchApi() 
  },
}
</script>

<style lang="scss" scoped>
  .container{
    margin: 0 auto;
    padding: 0 20px;
    max-width: 800px;
    box-sizing: border-box;
    justify-content: center;
    ul{
      margin-bottom: 20px;
      margin-top: 80px;
      li{
        list-style: none;
        a{
          color: #dfdbdb;
          text-decoration: none;
          font-size: 18px;
          font-weight: 700;
          &:hover{
            color: aqua;
            border-bottom: 2px solid aqua;
            background-color: #525252;
            padding: 10px;
            border-radius: 15px;
          }
        }
      }
    }
    &__btn{
      max-width: 500px;
      display: flex;
      gap: 18px;
      button{
        color: rgb(197, 190, 190);
        padding: 10px;
        border-radius: 16px;
        background-color: aqua;
        border: none;
        font-weight: 700;
        font-size: 13px;
        &:hover{
          background-color: hwb(180 25% 31%);
          color: white;
        }
      }
    }
  }
</style>