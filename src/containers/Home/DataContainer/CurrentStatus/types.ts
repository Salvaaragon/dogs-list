export type StatusType = 'EmptyResult' | 'EmptySelect' | 'Error' | 'Loading';

export type CurrentStatusProps = {
  type: StatusType;
};
