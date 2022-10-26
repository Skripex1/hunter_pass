import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { setAppIsScrolledAction, setAppWidthAction } from '../store/actions/app-actions';

const useEmitters = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => dispatch(setAppWidthAction(window.innerWidth)));
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        dispatch(setAppIsScrolledAction(true));
      } else {
        dispatch(setAppIsScrolledAction(false));
      }
    });
  }, [dispatch]);
};
export default useEmitters;
