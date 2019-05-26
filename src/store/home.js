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
    getClassDetail
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
            console.log(res,'servues');
            this.serviesList = res.data.data;
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getCaseListForPageSize(page, size) {
        try {
            const res = await getCaseListForPageSize(page, size);
            console.log(res);
            this.homeCaseList = res.data.data.content;
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getClassListForPageSize(page, size) {
        try {
            const res = await getClassListForPageSize(page, size);
            console.log(res);
            this.homeClassList = res.data.data.content;
        } catch (error) {
            
        }
    }

    @action 
    async getAllCaseList() {
        try {
            const res = await getAllCaseList();
            console.log(res);
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
            console.log(res,'company');
            this.compantInfo = res.data.data[0];
        } catch (error) {
            console.log(error);
        }
    }

    @action
    async getLinkAll() {
        try {
            const res = await getLinkAll();
            console.log(res);
            this.linkAll = res.data.data;
        } catch (error) {
            console.log(error)
        }
    }

    @action 
    async aboutUs(id) {
        try {
            const res = await aboutUs(id);
            console.log(res);
            this.compantInfo = res.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    @action
    async addInfo(params) {
        try {
            const res = await addInfo(params)
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getCaseDetail(id) {
        try {
            const res = await getCaseDetail(id);
            console.log(res)
            this.detail = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getAllClassList() {
        try {
            const res = await getAllClassList();
            console.log(res)
            this.classLists = res.data.data;
        } catch (error) {
            console.log(error)
        }
    }

    @action
    async getClassDetail(id) {
        try {
            const res = await getClassDetail(id)
            console.log(res,'detailsss');
            this.classDetail = res.data.data;
        } catch (error) {
            console.log(error);
        }
    }
}