import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  
  ProductList as ProductListView,  
  Maps as MapsView,
  Typography as TypographyView,//typography  
  Account as AccountView,
  
  Settings as SettingsView,
 CustomerSupport as CustomerSupportView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={MapsView}
        exact
        layout={MainLayout}
        path="/maps"
      />
      
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/services"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/aboutus"
      />
      
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={CustomerSupportView}
        exact
        layout={MainLayout}
        path="/support"
      />
       
    
    
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
