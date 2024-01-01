export const calculateTimeRemaining = ({date}: {date: string}) => {
  // const endDate = new Date();
  // endDate.setDate(endDate.getDate() + 60); // Set the end date to 60 days from now

  const totalSeconds = (Date.parse(date) - new Date().getTime()) / 1000;
  // console.log(totalSeconds);
  

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  

  return { days, hours, minutes, seconds };
};

// export const calculateTimeRemaining = () => {
//   const endDate = new Date();
//   endDate.setDate(endDate.getDate() + 60); // Set the end date to 60 days from now

//   const totalSeconds = (endDate.getTime() - new Date().getTime()) / 1000;
  
  
//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const seconds = Math.floor(totalSeconds % 60);

//   return { days, hours, minutes, seconds };
// };