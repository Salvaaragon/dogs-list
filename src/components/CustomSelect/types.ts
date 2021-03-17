type SelectOptionType = {
  value: string;
  text: string;
};

export type CustomSelectProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void;
  options: SelectOptionType[];
  placeholder: string;
  value: string;
};
