import { createRouter } from "vue-router";
import UserList from "../components/UserList.vue";
import UserPage from "../components/UserPage.vue";
const routes = [
  {
    path: '/users/',
    name: "all_users",
    component: UserList,
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