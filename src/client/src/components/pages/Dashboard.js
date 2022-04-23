import React, { Fragment } from 'react';
import Ingredients from '../main/Ingredients';
import Recipes from '../main/Recipes';

//component for dashboard page
const Dashboard = () => {
  return (
    <Fragment>
      <Ingredients />
      <Recipes></Recipes>
    </Fragment>
  );
};

export default Dashboard;
