export const formatDate = (date) => {
  const newDate = new Date(date);
  const formated = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;

  return formated;
};
