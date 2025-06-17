import { useEffect, useRef, useState, type JSX } from 'react';
import Select, { type SingleValue } from 'react-select';

import { Images } from '@/assets';
import { MainLayout, PageContentContainer } from '@/components';
import { AppString, Cities } from '@/constants';
import { useSearchQuery } from '@/hooks';

import type { SelectItem } from '@/types';
import { useTheme } from 'styled-components';
import {
  ChooseValueButton,
  FilterInputContainer,
  SearchButton,
  type FilterInputType,
} from './components';
import { NonePriceRangeValue, PriceRanges } from './constants';
import {
  CitiesContainer,
  City,
  Container,
  LocationInput,
  MainImage,
  PopularCitiesHeader,
  PriceRangeImg,
  SearchFiltersContainer,
} from './styles';

export function SearchToursPage(): JSX.Element {
  const theme = useTheme();

  const [searchFiltersContainerHeight, setSearchFiltersContainerHeight] =
    useState(0);
  const [selectPriceRange, setSelectedPriceRange] =
    useState(NonePriceRangeValue);

  const { query, handleQueryValueChange } = useSearchQuery();

  const searchFiltersContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectionChange = (newValue: SingleValue<SelectItem>) => {
    setSelectedPriceRange(newValue?.value ?? '');
  };

  const renderInputs = (type: FilterInputType) => {
    if (type === 'location') {
      return (
        <LocationInput
          value={query}
          placeholder={AppString.LocationPlaceholder}
          onChange={(e) => handleQueryValueChange(e.target.value)}
        />
      );
    } else if (type === 'date') {
      return <ChooseValueButton placeholder={AppString.ChooseHere} />;
    } else {
      return (
        <Select
          isSearchable={false}
          options={PriceRanges}
          placeholder={AppString.ChooseHere}
          classNamePrefix={'react-select'}
          styles={{
            container: (base) => ({
              ...base,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }),
            control: () => ({
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: theme.spacing['2'],
              border: 0,

              opacity: 1,
              transition: 'opacity 0.3 ease',

              ':hover': {
                cursor: 'pointer',
                opacity: 0.7,
              },
            }),
            placeholder: (base) => ({
              ...base,
              display: 'flex',
              fontSize: theme.typography.fontSize.sm,
              margin: 0,
            }),
            singleValue: (base) => ({
              ...base,
              fontSize: theme.typography.fontSize.sm,
              margin: 0,
            }),
            option: (base, state) => ({
              ...base,
              background:
                state.isFocused || state.isSelected ? theme.colors.primary : '',
            }),
            valueContainer: () => ({
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              margin: 0,
            }),
            indicatorsContainer: () => ({ display: 'flex' }),
          }}
          components={{
            DropdownIndicator: () =>
              selectPriceRange === NonePriceRangeValue ? (
                <PriceRangeImg src={Images.chevronDownIcon} />
              ) : (
                <PriceRangeImg src={Images.chevronUpIcon} />
              ),
            IndicatorSeparator: null,
          }}
          onChange={handleSelectionChange}
        />
      );
    }
  };

  useEffect(() => {
    if (searchFiltersContainerRef.current) {
      setSearchFiltersContainerHeight(
        searchFiltersContainerRef.current.offsetHeight
      );
    }

    const handleResize = () => {
      if (searchFiltersContainerRef.current) {
        setSearchFiltersContainerHeight(
          searchFiltersContainerRef.current.offsetHeight
        );
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MainLayout addNavBarSpacing={false}>
      <MainImage src={Images.findToursMainImage} />

      <PageContentContainer>
        <Container>
          <form>
            <SearchFiltersContainer
              ref={searchFiltersContainerRef}
              style={{ marginTop: -(searchFiltersContainerHeight / 2) }}
              direction="row"
            >
              <FilterInputContainer
                showRightDivider
                type="location"
                renderInput={renderInputs}
              />
              <FilterInputContainer
                showRightDivider
                type="date"
                renderInput={renderInputs}
              />
              <FilterInputContainer type="price" renderInput={renderInputs} />

              <SearchButton />
            </SearchFiltersContainer>

            <CitiesContainer>
              <PopularCitiesHeader>
                {AppString.PopularCities}
              </PopularCitiesHeader>

              <div>
                {Cities.map((city, index) => (
                  <City key={`${city.value}-${index}`}>
                    <p>{city.title}</p>
                  </City>
                ))}
              </div>
            </CitiesContainer>
          </form>
        </Container>
      </PageContentContainer>
    </MainLayout>
  );
}
