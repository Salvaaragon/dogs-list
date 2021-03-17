import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type StatusInfoProps = {
  color: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
  text: string;
};

export type StatusInfoGridProps = {
  color: string;
};
