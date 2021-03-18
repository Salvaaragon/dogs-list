import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import CurrentStatus from './CurrentStatus';
import Gallery from './Gallery';
import { DataContainerGrid } from './styles';

const DataContainer: React.FC = () => {
  const fetching = useSelector(
    (state: RootState) => state.dogsReducer.isFetching,
  );
  const failed = useSelector((state: RootState) => state.dogsReducer.isFailed);
  const breedSelected = useSelector(
    (state: RootState) => state.dogsReducer.breedSelected,
  );
  const breedImages = useSelector(
    (state: RootState) => state.dogsReducer.breedImages,
  );

  const loadingData = !failed && fetching && breedSelected;
  const loadedData = !failed && !fetching && breedSelected;
  const emptyResults = loadedData && breedImages.length === 0;
  const error = failed && !fetching && breedSelected;

  return (
    <DataContainerGrid>
      {emptyResults && <CurrentStatus type="EmptyResult" />}
      {loadingData && <CurrentStatus type="Loading" />}
      {error && <CurrentStatus type="Error" />}
      {!breedSelected && <CurrentStatus type="EmptySelect" />}
      {loadedData && <Gallery />}
    </DataContainerGrid>
  );
};

export default DataContainer;
