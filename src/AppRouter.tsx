import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from './routes';

const AppRouter = () => {
  const auth = true;
  return (
    auth
      ?
      <Routes>
        {privateRoutes.map((route) => 
          <Route path={route.path}
                 element={<route.component />}
                 key={route.path}
          />
        )}
        <Route path='*' element={<Navigate to={RouteNames.EVENT} replace />}/>
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route) => 
          <Route path={route.path}
                 element={<route.component />}
                 key={route.path}
          />
        )}
        <Route path='*' element={<Navigate to={RouteNames.LOGIN} replace />}/>
      </Routes>
  )
}

export default AppRouter
