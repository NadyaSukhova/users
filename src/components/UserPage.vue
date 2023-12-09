<script setup>
import { useUsersStore } from "./stores/users";
</script>

<template>
      <HeaderComp />
  <form class="user_card" style="filter: none">
    <img
      style="height: 20vh; border-radius: 50%; border-color: white;"
      border="10vh"
      src="../assets/cat.png"
    />
    <br />
    <div style="text-align: left;margin-left:3%; padding-bottom: 3vh;">
      <div style="font-size: 4vh; margin-bottom: 4vh; font-weight: bold; ">
        Name: {{ item.name }} <br />
        Username: {{ item.username }} <br />
        Email: {{ item.email }} <br />
      </div>
      Phone: {{ item.phone }} <br />
      Website: {{ item.website }} <br /><br />
    
    <div style="font-size: 2.8vh; ">Albums:</div>

    <div class="all_characters" v-for="(album, index) in albumId" :key="index">
      {{ album.id }} {{ album.title }} <br />
    </div></div>
  </form>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";

export default {
  name: "UserPage",
  components: {
   HeaderComp
  },
  props: {
    id: String,
  },
  
  data() {
    return {
      usersObj: useUsersStore(),
      item: null,
      albumId: [],
    };
  },
  beforeMount() {
    this.item = this.usersObj.users[Number(this.$route.params.id) - 1];
    if (!this.usersObj.albums[Number(this.$route.params.id) - 1]) {
      try {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/albums/?userId=" +
              this.$route.params.id
          )
          .then((response) => {
            this.albumId = response.data;
            this.usersObj.pushAlbums(
              this.albumId,
              Number(this.$route.params.id)
            );
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.albumId = this.usersObj.albums[Number(this.$route.params.id) - 1];
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user_card {
  margin-top: 3vh;
  padding-top: 6vh;
  height: fit-content;
  width: 80%;
  background: linear-gradient(rgb(255, 171, 198) 15%, white 15%);
  font-size:3.5vh;
}
</style>
