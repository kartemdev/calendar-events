/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
import React from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}
export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, component: Event },
];
