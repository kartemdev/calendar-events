import React from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';
import Main from '../pages/Main';

export enum RouteNames {
  MAIN = '/',
  LOGIN = '/login',
  EVENT = '/event',
}
export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.LOGIN, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, component: Event },
];
