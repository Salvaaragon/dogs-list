export const normalizeBreedList = (breedList: { [key: string]: string[] }) => {
  const newBreedList: string[] = [];
  const keysList = Object.keys(breedList);

  keysList.forEach((key) => {
    if (breedList[key].length > 0) {
      breedList[key].forEach((breed: string) => {
        newBreedList.push(key + '-' + breed);
      });
    } else newBreedList.push(key);
  });

  return newBreedList;
};
