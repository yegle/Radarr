import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { useCallback } from 'react';
import { SelectActionType, useSelect } from 'App/SelectContext';
import PageToolbarButton from 'Components/Page/Toolbar/PageToolbarButton';

interface MovieIndexSelectModeButtonProps {
  label: string;
  iconName: IconDefinition;
  isSelectMode: boolean;
  overflowComponent: React.FunctionComponent;
  onPress: () => void;
}

function MovieIndexSelectModeButton(props: MovieIndexSelectModeButtonProps) {
  const { label, iconName, isSelectMode, onPress } = props;
  const [, selectDispatch] = useSelect();

  const onPressWrapper = useCallback(() => {
    if (isSelectMode) {
      selectDispatch({
        type: SelectActionType.Reset,
      });
    }

    onPress();
  }, [isSelectMode, onPress, selectDispatch]);

  return (
    <PageToolbarButton
      label={label}
      iconName={iconName}
      onPress={onPressWrapper}
    />
  );
}

export default MovieIndexSelectModeButton;
