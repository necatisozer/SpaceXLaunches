import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Loading from "./Loading";
import SignUp from "./SignUp";
import Login from "./Login";
import List from "./List";
import Detail from "./Detail";

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      SignUp: SignUp,
      Login: Login,
      Main: createStackNavigator({
        List: List,
        Detail: Detail
      })
    },
    {
      initialRouteName: "Loading"
    }
  )
);
