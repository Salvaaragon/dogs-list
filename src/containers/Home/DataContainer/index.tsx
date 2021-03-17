import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import Gallery from './Gallery';
import StatusEmpty from './StatusEmpty';
import StatusError from './StatusError';
import StatusLoading from './StatusLoading';
import StatusSelectRequired from './StatusSelectRequired';
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
      {emptyResults && <StatusEmpty />}
      {loadingData && <StatusLoading />}
      {loadedData && <Gallery />}
      {error && <StatusError />}
      {!breedSelected && <StatusSelectRequired />}
    </DataContainerGrid>
  );
};

export default DataContainer;
