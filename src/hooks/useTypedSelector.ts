import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppStateType } from '../redux/reduxStore';

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;
