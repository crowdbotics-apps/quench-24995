import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings214193Navigator from '../features/Settings214193/navigator';
import UserProfile214186Navigator from '../features/UserProfile214186/navigator';
import Settings214185Navigator from '../features/Settings214185/navigator';
import Settings214183Navigator from '../features/Settings214183/navigator';
import SignIn2214181Navigator from '../features/SignIn2214181/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings214193: { screen: Settings214193Navigator },
UserProfile214186: { screen: UserProfile214186Navigator },
Settings214185: { screen: Settings214185Navigator },
Settings214183: { screen: Settings214183Navigator },
SignIn2214181: { screen: SignIn2214181Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
