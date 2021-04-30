const timePassed = (createdAt) => {
  const date = Date.now() - new Date(createdAt);
  const seconds = date / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;

  if (months > 1) {
    return `${months.toFixed()} mon`;
  } else if (weeks > 1) {
    return `${weeks.toFixed()} w`;
  } else if (days > 1) {
    return `${days.toFixed()} d`;
  } else if (hours > 1) {
    return `${hours.toFixed()} h`;
  } else if (minutes > 1) {
    return `${minutes.toFixed()} min`;
  } else {
    return `${seconds.toFixed()} s`;
  }
};

export default timePassed;
