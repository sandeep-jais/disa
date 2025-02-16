export const getGreetingTime = (): string => {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 16) {
      return 'Good afternoon';
    } else if (currentHour >= 16 && currentHour < 20) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  };
  