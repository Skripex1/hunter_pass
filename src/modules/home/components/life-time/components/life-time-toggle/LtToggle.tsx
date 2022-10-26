import { LftButton, LftHover, LfToggleContainer } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import { appSliderSelector } from '../../../../../../store/selectors/app-selectors';
import { setAppSliderNextAction, setAppSliderSlidingAction, setAppSliderPrevAction } from '../../../../../../store/actions/app-actions';

const LtToggle = (): JSX.Element => {
  const sliderInfo = useAppSelector(appSliderSelector);
  const { pos } = sliderInfo;
  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    if (pos === id) {
      return;
    }
    if (id > pos) {
      if (id - pos >= 2) {
        dispatch(setAppSliderNextAction());
        dispatch(setAppSliderNextAction());
      } else {
        dispatch(setAppSliderNextAction());
      }
    } else if (pos - id >= 2) {
      dispatch(setAppSliderPrevAction());
      dispatch(setAppSliderPrevAction());
    } else {
      dispatch(setAppSliderPrevAction());
    }
    setTimeout(() => {
      dispatch(setAppSliderSlidingAction(false));
    }, 50);
  };
  const spring = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  return (
    <LfToggleContainer>
      <LftButton isActive={pos === 0} onClick={() => handleClick(0)}>
        Alpha
      </LftButton>
      <LftButton isActive={pos === 1} onClick={() => handleClick(1)}>
        Genesis
      </LftButton>
      <LftButton isActive={pos === 2} onClick={() => handleClick(2)}>
        Free
      </LftButton>
      <LftHover position={pos} layout transition={spring} />
    </LfToggleContainer>
  );
};

export default LtToggle;
