import { observable, action, computed } from 'mobx';

import {
    BannaerList
} from './../api/index.js';

export default class homeStore {
    @action
    async BannaerList() {
        try {
            const res = await BannaerList();
            console.log(res);
            // this.msg = res.data.msg;
        } catch (error) {
            return error.response;
        }
    }
}