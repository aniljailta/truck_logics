import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {AppDispatch, RootState} from '../app/store';
import {
  ParamListBase,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppNavigation: () => NavigationProp<ParamListBase> = () =>
  useNavigation();
