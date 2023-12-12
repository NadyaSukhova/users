<script setup>
import { useUsersStore } from "./stores/users";
</script>

<template>
  <HeaderComp />
  <form class="user_card" style="filter: none">
    <img
      style="height: 20vh; border-color: white"
      border="10vh"
      src="../assets/cat.png"
    />
    <br />
    <div style="text-align: left; padding-bottom: 3vh">
      <div class="main_info">
        Name: {{ item.name }} <br />
        Username: {{ item.username }} <br />
        Email: {{ item.email }} <br />
      </div>
      <div style="margin-left: 2vw; margin-right: 2vw">
        Phone: {{ item.phone }} <br />
        Website: {{ item.website }} <br />
        <hr class="paws" />
        <br />
      </div>
      <div style="font-size: 4vh; text-align: center">Albums:</div>

      <div
        class="all_characters"
        v-for="(album, index) in albumId"
        :key="index"
      >
        <div style="font-size: 3.5vh">Albums:</div>
        {{ album.id }} {{ album.title }} <br />
        <div v-for="(photo, index) in photos[album.id]" :key="index">
            {{ photo }}
        </div>
      </div>
      <br />
    </div>
  </form>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";

export default {
  name: "UserPagePhotos.vue",
  components: {
    HeaderComp,
  },
  props: {
    id: String,
  },

  data() {
    return {
      usersObj: useUsersStore(),
      item: null,
      albumId: [],
      photos: [],
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
    for (let album of this.albumId) {
      try {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/photos?albumId=" + album.id
          )
          .then((response) => (this.photos[album.id] = response.data.slice(0, 5)));
      } catch (error) {
        console.log(error);
      }
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
  background: white;
  font-size: 3.5vh;
}

.post_body {
  opacity: 0.9;
  text-align: right;
  margin: 0;
  font-size: 3vh;
  background-color: rgba(137, 43, 226, 0.101);
  background-size: cover 100%;
  padding-top: 1vh;
  padding-bottom: 2vh;
  padding-right: 3vw;
  padding-left: 2vw;
}
.main_info {
  font-size: 4vh;
  margin-bottom: 4vh;
  font-weight: bold;
  padding-left: 2vw;
}
hr {
  border: none;
  border-top: 3px dotted #db8dff;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr:after {
  background: #fff;
  content: url("../assets/icons8-paw-64.png");
  padding: 0 4px;
  position: relative;
  top: -13px;
}
</style>
