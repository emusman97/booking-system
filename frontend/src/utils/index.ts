export const delay = (duration = 600) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });

export const isError = (error: unknown) => error instanceof Error;

export const safeParseNumber = (value: string, defaultValue = -1) => {
  try {
    const parsedValue = Number(value);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
  } catch (error) {
    console.log('Unable to parse ', value, error);
    return defaultValue;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createPredicatePair<T extends (...args: any[]) => boolean>(
  predicate: T
): {
  positive: (...args: Parameters<T>) => boolean;
  negative: (...args: Parameters<T>) => boolean;
} {
  return {
    positive: predicate,
    negative: (...args: Parameters<T>) => !predicate(args),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDefined = (value: any) => value !== undefined && value !== null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotDefined = (value: any) =>
  value === undefined || value === null;

export const { positive: isObjectEmpty, negative: isObjectNotEmpty } =
  createPredicatePair((obj: object) => {
    if (isNotDefined(obj)) {
      return true;
    }

    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }

    return true;
  });
