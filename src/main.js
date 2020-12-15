import { createApp } from 'vue'
import { bindActionCreators } from 'redux';
import ReduxConnectVue from 'redux-connect-vue';
import rootStore from './stores/rootStore';
import App from './App.vue';

const initialState = {};
const store = rootStore(initialState);

const reduxConfig = {
    store,
    mapDispatchToPropsFactory: (actionCreators) => (dispatch) => bindActionCreators(actionCreators, dispatch),
}

createApp(App)
    .use(ReduxConnectVue, reduxConfig)
    .mount('#app')