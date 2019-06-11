import { observable, action, computed } from 'mobx';

import {
    BannaerList,
    ServiceCustomerList,
    getCaseListForPageSize,
    getClassListForPageSize,
    getAllCaseList,
    getCompanyInfo,
    getLinkAll,
    aboutUs,
    addInfo,
    getCaseDetail,
    getAllClassList,
    getClassDetail,
    getKeyWords
} from './../api/index.js';

export default class homeStore {
    @observable bannaerList = [];

    @observable routerId = 1;

    @observable homeCaseList = [];

    @observable homeClassList = [];

    @observable caseAllCount = 0;

    @observable classAllCount = 0;

    @observable linkAll = [];

    @observable compantInfo = {};

    @observable serviesList = [];

    @observable caseLists = [];

    @observable detail = {};

    @observable classLists = [];

    @observable classDetail = {};

    @action
    changeRoute(id) {
        this.routerId = id;
    }

    @action
    async BannaerList() {
        try {
            const res = await BannaerList();
            this.bannaerList = res.data.data;
        } catch (error) {
            return error.response;
        }
    }

    @action
    async ServiceCustomerList() {
        try {
            const res = await ServiceCustomerList()
            this.serviesList = res.data.data;
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getCaseListForPageSize(page, size) {
        try {
            const res = await getCaseListForPageSize(page, size);
            this.homeCaseList = res.data.data.content;
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getClassListForPageSize(page, size) {
        try {
            const res = await getClassListForPageSize(page, size);
            this.homeClassList = res.data.data.content;
        } catch (error) {
            
        }
    }

    @action 
    async getAllCaseList() {
        try {
            const res = await getAllCaseList();
            this.caseLists = res.data.data;
            this.caseAllCount = res.data.data.length;
        } catch (error) {
            console.log(error)
        }
    }

    @action 
    async getCompanyInfo() {
        try {
            const res = await getCompanyInfo();
            this.compantInfo = res.data.data[0];
        } catch (error) {
            console.log(error);
        }
    }

    @action
    async getLinkAll() {
        try {
            const res = await getLinkAll();
            this.linkAll = res.data.data;
        } catch (error) {
            console.log(error)
        }
    }

    @action 
    async aboutUs(id) {
        try {
            const res = await aboutUs(id);
            this.compantInfo = res.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    @action
    async addInfo(params) {
        try {
            const res = await addInfo(params)
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getCaseDetail(id) {
        try {
            const res = await getCaseDetail(id);
            this.detail = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getAllClassList() {
        try {
            const res = await getAllClassList();
            this.classLists = res.data.data;
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getClassDetail(id) {
        try {
            const res = await getClassDetail(id)
            this.classDetail = res.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    @action
    async getKeyWords(id) {
        try {
            const res = await getKeyWords(id);
            return res.data.data;
        } catch (error) {
            console.log(error)
        }
    }
}