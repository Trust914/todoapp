export default function CurrentDate() {
  const date = new Date();
  const day = date.getDay();
  const dayDate = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // const todayDate = `${dayDate}/${month}/${year}`;

  return { day, dayDate, month, year };
}
