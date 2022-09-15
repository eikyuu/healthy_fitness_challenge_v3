import { useNavigation, CommonActions } from '@react-navigation/native';
import { useEffect } from 'react';

export const useRemoveRouteFromState = (
  routeName: ReactNavigation.RootParamList
) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch((state) => {
      const routes = state.routes.filter(({ name }) => name !== routeName);

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }, [navigation]);
};
