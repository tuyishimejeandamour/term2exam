
export function generateMeterNumber () {
    return Math.floor(100000 + Math.random() * 900000);
  };
  
  export function getTokenExpirationDate (amount, expire) {
    const date = expire ? new Date(expire) : new Date();
    return new Date(date.setDate(date.getDate() + amount / 100));
  };
  
  export function validateUUID (str) {
    // Regular expression to check if string is a valid UUID
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  
    return regexExp.test(str);
  };
  
  export function getDaysDifference  (date) {
      //@ts-ignore
      const diffTime = Math.abs(new Date(date) - new Date());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 0
  };