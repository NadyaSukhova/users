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
        @click="user_id = Number(user.id)"
        :to="{ name: 'user_page', params: { id: user.id } }"
      >
        <form class="user_card" onclick=" window.scrollTo(0, 0);">
          <img
            id="cat_img"
            style="border-radius: 50%; border-color: white"
            border="10vh"
            src="../assets/cat.png"
          />
          <div
            class="info"
            style="padding-top: 5vh; text-align: left; text-decoration: none"
          >
            <div id="main_info">
              Name: {{ user.name }} <br />
              Username: {{ user.username }} <br />
              Email: {{ user.email }} <br />
            </div>
            Phone: {{ user.phone }} <br />
            Website: {{ user.website }} <br />
            <div class="buttons">
              <router-link
                @click="user_id = Number(user.id)"
                :to="{ name: 'user_posts', params: { id: user.id } }"
              >
                <button class="posts">User's posts</button>
              </router-link>
              <router-link
                @click="user_id = Number(user.id)"
                :to="{ name: 'user_photos', params: { id: user.id } }"
              >
                <button class="photos">User's albums</button>
              </router-link>
            </div>
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
      usersObj: useUsersStore(),
    };
  },
  beforeMount() {
    this.usersObj.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
  position: absolute;
  bottom: 0.5vh;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  width: 23vw;
}

.posts, .photos {
  background-color: #ffffff;
  border: 0;
  width: 11vw;
  padding: 1vw;
  font-family: Museo;
  border-radius: 10px;
  box-shadow: none;
  background-color: rgb(255, 171, 198);
}
.posts:hover, .photos:hover{
  animation-name: light;
  animation-duration: 0.325s;
}

@keyframes light {
  0% {
    background-color: rgb(255, 171, 198);
  }

  15% {
    background-image: linear-gradient(45deg, rgb(255, 171, 198) 80%,rgb(255, 195, 214) 90%);
  }

  40% {
    background-image: linear-gradient(45deg, rgb(255, 171, 198) 40%,rgb(255, 195, 214) 50%, rgb(255, 171, 198) 60%,rgb(255, 207, 222) 90%);
  }

  60% {
    background-image: linear-gradient(45deg, rgb(255, 195, 214) 10%, rgb(255, 171, 198) 15%, rgb(255, 171, 198) 20%,rgb(255, 207, 222) 50%, rgb(255, 171, 198) 80%);
  }

  80% {
    background-image: linear-gradient(45deg, rgb(255, 207, 222) 10%, rgb(255, 171, 198) 40%);
  }

  100% {
    background-color: rgb(255, 171, 198);
  }
}


.user_card {
  filter: grayscale(80%);
  position: relative;
  z-index: 5;
}

#cat_img {
  height: 12vh;
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
#vibris_rigth3 {
  transform: rotate(-10deg);
  left: 50%;
}
#vibris_left1,
#vibris_rigth1 {
  width: 15%;
  margin-top: -50vh;
  transition-duration: 0.5s;
}
#vibris_left2,
#vibris_rigth2 {
  width: 14%;
  margin-top: -48vh;
  transition-duration: 0.7s;
}
#vibris_left3,
#vibris_rigth3 {
  width: 12%;
  margin-top: -46vh;
  transition-duration: 1s;
}

.user_card:hover ~ #ears {
  margin-top: -78vh;
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

@media only screen and (max-width: 768px) {
  #cat_img {
    height: 11vh;
  }
  .user_card {
    filter: none;
  }
  #vibris_rigth1,
  #vibris_rigth2,
  #vibris_rigth3,
  #vibris_left1,
  #vibris_left2,
  #vibris_left3 {
    display: none;
  }

  #ears {
    width: 76vw;
    left: 12vw;
    filter: none;
    margin-top: -69vh;
  }
  .user_card:hover ~ #ears {
    margin-top: -59.7vh;
  }

  .posts, .photos {
    width: 20vw;
    margin-left: 10vw;
  }

  .buttons {
  width: 100vw;
  justify-content:flex-start;
  bottom: -1vw;
}
}

@media only screen and (min-width: 430px) and (max-width: 768px) {
  #vibris_rigth1,
  #vibris_rigth2,
  #vibris_rigth3,
  #vibris_left1,
  #vibris_left2,
  #vibris_left3 {
    transform: rotate(0);
    display: block;
  }

  #ears {
    margin-top: -68vw;
    width: 50%;
    left: 25%;
  }

  #vibris_left1,
  .user_card:hover ~ #vibris_left1 {
    transform: rotate(0);
    left: 1%;
  }
  #vibris_left2,
  .user_card:hover ~ #vibris_left2 {
    left: 2.5%;
    rotate: (15deg);
  }
  #vibris_left3,
  .user_card:hover ~ #vibris_left3 {
    left: 4%;
    rotate: (35deg);
  }

  #vibris_rigth1,
  .user_card:hover ~ #vibris_rigth1 {
    left: 85%;
  }
  #vibris_rigth2,
  .user_card:hover ~ #vibris_rigth2 {
    left: 84.5%;
    rotate: (-15deg);
  }
  #vibris_rigth3,
  .user_card:hover ~ #vibris_rigth3 {
    left: 84%;
    rotate: (-35deg);
  }

  #vibris_left1,
  #vibris_rigth1 {
    width: 15%;
    margin-top: -47vw;
  }
  #vibris_left2,
  #vibris_rigth2 {
    width: 14%;
    margin-top: -45.5vw;
  }
  #vibris_left3,
  #vibris_rigth3 {
    width: 12%;
    margin-top: -44vw;
  }
  .user_card:hover ~ #ears {
    margin-top: -70vw;
  }
}

@media only screen and (min-width: 430px) and (max-width: 768px) {
  .buttons {
  width: fit-content;
  justify-content:flex-end;
}

.user_card:hover ~ #ears {
    margin-top: -68vw;
  }

.posts, .photos {
  margin-left: 2vw;
  width: 30vw;
  padding: 2vw;
}
}

@media only screen and (max-width: 430px) {
  .user_card {
    height: 50vh;
  }
}
</style>
