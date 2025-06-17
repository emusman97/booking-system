import { useEffect, useRef, useState, type JSX } from 'react';

import { Images } from '@/assets';
import { MainLayout, PageContentContainer } from '@/components';
import { AppString, Cities } from '@/constants';
import { useSearchQuery } from '@/hooks';

import {
  ChooseValueButton,
  FilterInputContainer,
  PriceRangeSelect,
  SearchButton,
  type FilterInputType,
} from './components';
import { NonePriceRangeValue } from './constants';
import {
  CitiesContainer,
  City,
  Container,
  LocationInput,
  MainImage,
  PopularCitiesHeader,
  SearchFiltersContainer,
} from './styles';

export function SearchToursPage(): JSX.Element {
  const [searchFiltersContainerHeight, setSearchFiltersContainerHeight] =
    useState(0);
  const [selectPriceRange, setSelectedPriceRange] =
    useState(NonePriceRangeValue);

  const { query, handleQueryValueChange } = useSearchQuery();

  const searchFiltersContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectionChange = (newValue: string) => {
    setSelectedPriceRange(newValue);
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
        <PriceRangeSelect
          value={selectPriceRange}
          onValueChange={handleSelectionChange}
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
