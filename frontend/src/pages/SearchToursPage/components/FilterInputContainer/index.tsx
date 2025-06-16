import { useMemo, type JSX } from 'react';

import { Images } from '@/assets';
import { Stack } from '@/components';
import { AppString } from '@/constants';

import { Container, Divider, MainContainer } from './styles';
import type { FilterInputContainerProps } from './types';

export function FilterInputContainer(
  { type, showRightDivider, renderInput }: FilterInputContainerProps
): JSX.Element {
  const labelText = useMemo(() => {
    if (type === 'location') {
      return AppString.Location;
    } else if (type === 'date') {
      return AppString.ChooseDate;
    } else {
      return AppString.PriceRange;
    }
  }, [type]);

  const Icon = useMemo(() => {
    if (type === 'location') {
      return <img src={Images.locationIcon} alt="location icon" />;
    } else if (type === 'date') {
      return <img src={Images.dateIcon} alt="choose date icon" />;
    } else if (type === 'price') {
      return <img src={Images.pricenIcon} alt="choose price icon" />;
    }
  }, [type]);

  return (
    <MainContainer direction="row">
      <Container direction="row">
        {Icon}

        <Stack>
          <p>{labelText}</p>

          {renderInput && renderInput(type)}
        </Stack>
      </Container>
      {showRightDivider && <Divider />}
    </MainContainer>
  );
}

export * from './types';
