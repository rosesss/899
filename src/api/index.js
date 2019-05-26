import request from './../util/request';

export const BannaerList = () => request.get('/banner/find/all');

export const ServiceCustomerList = () => request.get('/service_customer/find/all');

export const getCaseListForPageSize = (page, size) => request.get(`/cases/list?page=${page}&&size=${size}`)

export const getClassListForPageSize = (page, size) => request.get(`/forum/list?page=${page}&&${size}`);

export const getAllCaseList = () => request.get('/cases/find/all');

export const getAllClassList = () => request.get('/forum/find/all');

export const getCompanyInfo = () => request.get('/company_info/find/all');

export const getLinkAll = () => request.get('/link/find/all');

export const aboutUs = (id) => request.get(`/company_info/find/${id}`);

export const addInfo = (params) => request.post('/requester_info/add', params);

export const getCaseDetail = (id) => request.get(`/cases/find/${id}`);

export const getClassDetail = (id) => request.get(`/forum/find/${id}`);