export const normalizeSelectOptions = (options: string[]) => {
  return options.map((option) => ({
    value: option.includes('-')
      ? option.split('-')[0] + '/' + option.split('-')[1]
      : option,
    text: option.includes('-')
      ? option.split('-')[0] + ' ' + option.split('-')[1]
      : option,
  }));
};
