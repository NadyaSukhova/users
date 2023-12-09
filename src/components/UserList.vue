<script setup>
import { useUsersStore } from "./stores/users";

const usersStore = useUsersStore();
</script>

<template>
  <div v-if="user_id > 0">
    <router-view />
  </div>
  <div v-else>
    <div
      class="all_user"
      v-for="(user, index) in usersStore.users"
      :key="index"
    >
      <router-link
        @click="this.user_id = Number(user.id)"
        :to="{ name: 'user_page', params: { id: user.id } }"
      >
        <form class="user_card" onclick=" window.scrollTo(0, 0);">
          <img
            style="height: 12vh; border-radius: 50%; border-color: white"
            border="10vh"
            src="../assets/cat.png"
          />
          <div class="info" style="padding-top: 5vh; text-align: left; text-decoration: none;">
            <div
              style="font-size: 1.5vw; margin-bottom: 3vh;margin-top: 3vh; font-weight: bold"
            >
              Name: {{ user.name }} <br />
              Username: {{ user.username }} <br />
              Email: {{ user.email }} <br />
            </div>
              Phone: {{ user.phone }} <br />
              Website: {{ user.website }} <br />
            кнопка и кнопка
          </div>
        </form>
        <img id="ears" src="../assets/ears.png" />
        <img id="vibris_left1" src="../assets/vibris.png" />
        <img id="vibris_left2" src="../assets/vibris.png" />
        <img id="vibris_left3" src="../assets/vibris.png" />
        <img id="vibris_rigth1" src="../assets/vibris2.png" />
        <img id="vibris_rigth2" src="../assets/vibris2.png" />
        <img id="vibris_rigth3" src="../assets/vibris2.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      user_id: -1,
      usersObj: useUsersStore()
    };
  },
  beforeMount() {
    this.usersObj.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user_card {
  filter: grayscale(80%);
  position: relative;
  z-index: 5;
}

.user_card img {
  margin-bottom: 3vh;
}

.user_card:hover {
  filter: none;
}

#ears {
  width: 24.84%;
  height: 30vh;
  position: absolute;
  left: 37.58%;
  margin-top: -50vh;
  z-index: 1;
  filter: grayscale(80%);
  transition-property: margin-top;
  transition-duration: 0.3s;
}

#vibris_rigth1,
#vibris_rigth2,
#vibris_rigth3,
#vibris_left1,
#vibris_left2,
#vibris_left3 {
  width: 15%;
  position: absolute;
  z-index: 1;
  transition-property: left, transform;
  transform: rotate(25deg);
  left: 38%;
}

#vibris_rigth1,
#vibris_rigth2,
#vibris_rigth3{
  transform: rotate(-10deg);
  left: 50%;
}
#vibris_left1,
#vibris_rigth1 {
  width: 15%;
  margin-top: -22%;
  transition-duration: 0.5s;
}
#vibris_left2,
#vibris_rigth2 {
  width: 14%;
  margin-top: -20.7%;
  transition-duration: 0.7s;
}
#vibris_left3,
#vibris_rigth3 {
  width: 12%;
  margin-top: -19.5%;
  transition-duration: 1s;
}

.user_card:hover ~ #ears {
  margin-top: -72vh;
  filter: none;
}

.user_card:hover ~ #vibris_left1 {
  transform: rotate(-5deg);
  left: 28%;
}

.user_card:hover ~ #vibris_left2 {
  transform: rotate(-5deg);
  left: 30%;
}

.user_card:hover ~ #vibris_left3 {
  transform: rotate(-5deg);
  left: 32.5%;
}

.user_card:hover ~ #vibris_rigth1 {
  transform: rotate(5deg);
  left: 58%;
}

.user_card:hover ~ #vibris_rigth2 {
  transform: rotate(5deg);
  left: 57%;
}

.user_card:hover ~ #vibris_rigth3 {
  transform: rotate(5deg);
  left: 56.5%;
}
</style>
