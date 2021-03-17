import { FormControl, Grid } from '@material-ui/core';
import React from 'react';
import { CustomInputLabel, CustomMenuItem, CustomSelector } from './styles';
import { CustomSelectProps } from './types';

const CustomSelect: React.FC<CustomSelectProps> = (
  props: CustomSelectProps,
) => {
  const { label, onChange, options, placeholder, value } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <CustomInputLabel shrink>{label}</CustomInputLabel>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <CustomSelector
            value={value}
            onChange={onChange}
            displayEmpty
            placeholder={placeholder}
            className={value ? '' : 'empty'}
          >
            <CustomMenuItem className="empty" value="">
              {placeholder}
            </CustomMenuItem>
            {options.map(({ value, text }) => (
              <CustomMenuItem key={text} value={value}>
                {text}
              </CustomMenuItem>
            ))}
          </CustomSelector>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CustomSelect;
