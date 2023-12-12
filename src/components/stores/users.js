import { defineStore } from "pinia";
import axios from "axios";

export const useUsersStore = defineStore({
  id: "UsersStore",
  state: () => ({
    users: [],
    posts: [],
    albums: [],
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
    pushPosts(posts_ids, id) {
      this.posts[id - 1] = posts_ids;
    },
    pushAlbums(album_ids, id) {
      this.albums[id - 1] = album_ids;
    },
  },
});
