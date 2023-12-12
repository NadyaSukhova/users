<script setup>
import { useUsersStore } from "./stores/users";
</script>

<template>
  <HeaderComp />
  <form class="user_card" style="filter: none">
    <img border="10vh" src="../assets/cat.png" />
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
      <div class="part_name">Posts:</div>
      <div class="posts" v-for="(post, index) in postId" :key="index">
        <div style="padding-left: 2vw">
          {{ post.id }}. «{{ post.title.toUpperCase() }}»
        </div>
        <br />
        <div class="post_body">{{ post.body }}</div>
        <br />
      </div>
    </div>
  </form>
  <br />
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";

export default {
  name: "UserPagePosts.vue",
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
      postId: [],
      photos: [],
    };
  },
  beforeMount() {
    this.item = this.usersObj.users[Number(this.$route.params.id) - 1];
    if (!this.usersObj.posts[Number(this.$route.params.id) - 1]) {
      try {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/?userId=" +
              this.$route.params.id
          )
          .then((response) => {
            this.postId = response.data;
            this.usersObj.pushPosts(this.postId, Number(this.$route.params.id));
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.postId = this.usersObj.posts[Number(this.$route.params.id) - 1];
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part_name {
  font-size: 4vh;
  text-align: center;
}

img {
  height: 20vh;
  border-color: white;
}

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

@media only screen and (max-width: 768px) {
  .main_info {
    font-size: 5vw;
  }
  img {
    height: 20vw;
  }
  .user_card {
    font-size: 4vw;
  }
  hr:after {
    content: "";
    padding: 0;
  }
}

@media only screen and (max-width: 430px) {
  .part_name {
    font-size: 5vw;
    font-weight: bold;
  }
  .post_body {
    font-size: 3.5vw;
  }
}

@media only screen and (min-width: 430px) and (max-width: 768px) {
  .all_characters {
    text-align: center;
  }
  hr:after {
    content: url("../assets/icons8-paw-64.png");
    padding: 0 4px;
  }
}
</style>
