import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { setAppWidthAction } from '../store/actions/app-actions';

const useEmitters = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => dispatch(setAppWidthAction(window.innerWidth)));
  }, [dispatch]);
};
export default useEmitters;
