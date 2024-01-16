import React, { useCallback, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import index from "./index";


const Stack = createStackNavigator();

const Layout = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={index} />
    </Stack.Navigator>
  );
};

export default Layout;
