const getTime = new Intl.DateTimeFormat('eb',{
timeZone:'UTC',
hour:'2-digit',
minute:'2-digit',
hour12:false,
})
export const getGreenwichTime = date => getTime.format(date);
console.log(getGreenwichTime(new Date()))