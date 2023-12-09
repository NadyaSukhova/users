import { defineStore } from "pinia";
import axios from "axios";

export const useUsersStore = defineStore({
  id: "UsersStore",
  state: () => ({
    users: [],
    posts: [],
    albums: [],
    photos: [],
  }),
  persist: true,
  actions: {
    getUsers() {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            this.users = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    getPosts() {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => (this.posts = response.data));
      } catch (error) {
        console.log(error);
      }
    },
    getPhotos() {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/photos")
          .then((response) => (this.photos = response.data));
      } catch (error) {
        console.log(error);
      }
    },
    pushAlbums(album_ids, id) {
      this.albums[id - 1] = album_ids;
      console.log(this.albums)
    },
  },
});
