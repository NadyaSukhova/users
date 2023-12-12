<script setup>
import UserList from "./components/UserList.vue";
</script>

<template>
  <UserList />
</template>

<style>
@font-face {
  font-family: Alumni;
  src: url("./assets/AlumniSans-VariableFont_wght.ttf");
}

@font-face {
  font-family: Museo;
  src: url("./assets/MuseoModerno-Light.ttf");
}

a {
  text-decoration: none;
}
.info {
  position: absolute;
  bottom: 4vh;
  margin-left: 1vw;
  top: 15vh;
}
.user_card {
  background: linear-gradient(rgb(255, 171, 198) 25%, white 25%);
  color: midnightblue;
  height: 60vh;
  border-radius: 30px;
  padding-top: 8vh;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12vh;
  width: 25vw;
  font-size: 1.3vw;
}

body {
  background-image: url("./assets/cat_background.png"),
    linear-gradient(to bottom right, rgb(63, 57, 99), rgb(231, 114, 255));
  background-size: auto, cover;
  background-attachment: fixed, fixed;
  background-repeat: space, no-repeat;
  font-family: Museo;
  height: 100vh;
  color: white;
}

#main_info {
  font-size: 1.5vw;
  margin-bottom: 3vh;
  margin-top: 3vh;
  font-weight: bold;
}

@media only screen and (max-width: 768px) {
  .user_card {
    width: 80%;
    font-size: 3vw;
    height: 43vh;
  }
  #main_info {
    font-size: 4vw;
  }
}

@media only screen and (min-width: 430px) and (max-width: 768px) {
  .user_card {
    height: 54vw;
  }
}


</style>
