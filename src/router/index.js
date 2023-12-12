import { createRouter } from "vue-router";
import UserList from "../components/UserList.vue";
import UserPagePosts from "../components/UserPagePosts.vue";
import UserPagePhotos from "../components/UserPagePhotos.vue";
import UserPage from "../components/UserPage.vue";
const routes = [
  {
    path: '/users/',
    name: "all_users",
    component: UserList,
  },
  {
    path: "/users/user_posts/:id",
    name: "user_posts",
    props: true,
    component: UserPagePosts,
  },
  {
    path: "/users/user_photos/:id",
    name: "user_photos",
    props: true,
    component: UserPagePhotos,
  },
  {
    path: "/users/user/:id",
    name: "user_page",
    props: true,
    component: UserPage,
  },
];
export default function (history) {
  return createRouter({
    history,
    routes
  })
}