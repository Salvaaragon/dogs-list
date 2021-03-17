import CustomSelect from '@Components/CustomSelect';
import { Container } from '@material-ui/core';
import { FETCH_BREED_IMAGES, SELECT_BREED } from '@Store/constants/dogs';
import { RootState } from '@Store/reducers';
import { normalizeSelectOptions } from '@Utils/normalizeSelectOptions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import DataContainer from './DataContainer';

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const options = useSelector((state: RootState) => state.dogsReducer.breeds);
  const breedSelected = useSelector(
    (state: RootState) => state.dogsReducer.breedSelected,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      dispatch({ type: SELECT_BREED, payload: event.target.value });
      dispatch({ type: FETCH_BREED_IMAGES, payload: event.target.value });
    }
  };

  return (
    <Container disableGutters>
      <CustomSelect
        label={i18n.t('home:selector.label')}
        placeholder={i18n.t('home:selector.placeholder')}
        onChange={handleChange}
        options={normalizeSelectOptions(options)}
        value={breedSelected}
      />
      <DataContainer />
    </Container>
  );
};

export default Home;
