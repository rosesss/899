import request from './../util/request';

export const BannaerList = () => request.get('/banner/find/all');