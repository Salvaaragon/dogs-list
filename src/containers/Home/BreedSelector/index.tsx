import CustomSelect from '@Components/CustomSelect';
import {
  FETCH_ALL_BREEDS,
  FETCH_BREED_IMAGES,
  SELECT_BREED,
} from '@Store/constants/dogs';
import { RootState } from '@Store/reducers';
import { normalizeSelectOptions } from '@Utils/normalizeSelectOptions';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const BreedSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const options = useSelector((state: RootState) => state.dogsReducer.breeds);
  const breedSelected = useSelector(
    (state: RootState) => state.dogsReducer.breedSelected,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SELECT_BREED, payload: event.target.value });
    if (event.target.value) {
      dispatch({ type: FETCH_BREED_IMAGES, payload: event.target.value });
    }
  };

  useEffect(() => {
    if (options.length === 0) dispatch({ type: FETCH_ALL_BREEDS });
  }, []);

  return (
    <CustomSelect
      label={i18n.t('home:selector.label')}
      placeholder={i18n.t('home:selector.placeholder')}
      onChange={handleChange}
      options={normalizeSelectOptions(options)}
      value={breedSelected}
    />
  );
};

export default BreedSelector;
