<template>
  <div class="hello">
    <h1>Usuarios API</h1>
    <p v-if="isRequesting">Cargando....</p>
    <button @click="$actions.loadUsers" style="margin-right: 5px;">Cargar Usuarios</button>
    <button @click="$actions.cleanUsers">Limpiar usuarios</button>
    <h3>Nombre de usuarios</h3>
    <ul v-if="!isRequesting" style="display: flex; flex-direction: column;">
      <li v-for="user in users" v-bind:key="user.id" style="margin: 5px;">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { connect } from "redux-connect-vue";
import { selectUsers } from "../../../selectors/users/UsersSelector";
import { selectRequesting } from "../../../selectors/requesting/RequestingSelector";
import * as UsersAction from "../../../stores/users/UsersAction";

const state = (state) => ({
  users: selectUsers(state),
  isRequesting: selectRequesting(state, [UsersAction.REQUEST_USERS]),
});

const actions = {
  loadUsers: UsersAction.getUsers,
  cleanUsers: UsersAction.cleanUsers
};

export default connect(
  state,
  actions
)({
  name: "HomePage",
  data: () => ({
    count: 0,
  }),
  watch: {
    users: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
    isRequesting: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
