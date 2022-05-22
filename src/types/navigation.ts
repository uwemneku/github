import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type repoType = "repos" | "orgs" | "starred";
export type HomeParams = {
  Profile: undefined;
  Repository: { type: repoType; username: string };
};

export interface StackScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}
