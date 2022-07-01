import Axios, { apiVersion, userToken, processFault } from '@isyscore/axios';
import store from '@/store';
import router from '@/router';
import { app } from '@isyscore/messenger';

const axios = Axios.create();

axios.features
    .use(
        apiVersion({
            version: '2.0',
            successCode: [0, 200, 'success']
        })
    )
    .use(
        userToken({
            headerKey: 'token',
            tokenVal() {
                return store.state.sso ? store.state.sso.token : '';
            }
        })
    )
    .use(
        processFault({
            processor(fault) {
                const { code, status } = fault;
                if (status === 401) {
                    app.sessionStorage.clear();
                    const reten = encodeURIComponent(`${location.href}`);
                    location.assign(`${ENVS.ssoUrl}?return=${reten}`);
                }
            }
        })
    );

const userDefinedUse = (config) => {
    if (app.localStorage.getItem('currentProjectId')) {
        config.headers['project-id'] = app.localStorage.getItem('currentProjectId');
    }
    return config;
};
axios.interceptors.request.use((config) => userDefinedUse(config));
export default axios;
