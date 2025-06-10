export const safeParseNumber = (numStr: string, fallbackNum = -1) => {
  try {
    const parsedNum = Number(numStr);

    return isNaN(parsedNum) ? fallbackNum : parsedNum;
  } catch (error) {
    console.log('Unable to parse num string', error);
    return fallbackNum;
  }
};

export const calculateSkip = (page: number, limit: number) =>
  (page - 1) * limit;
export const calculateTotalPages = (totalItems: number, limit: number) =>
  Math.ceil(totalItems / limit);
