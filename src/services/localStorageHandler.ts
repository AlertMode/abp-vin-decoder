export const saveToLocalStorage = (key: string, value: string): void => {
  try {
    if (key && value && typeof key === "string" && typeof value === "string") {
      localStorage.setItem(key, value);
    }
  } catch (error) {
    console.error(
      `ERROR >> saveToLocalStorage: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

export const getFromLocalStorage = (key: string): string | null => {
  try {
    if (key && typeof key === "string") {
      return localStorage.getItem(key);
    }
    return null;
  } catch (error) {
    console.error(
      `ERROR >> getFromLocalStorage: ${error instanceof Error ? error.message : String(error)}`,
    );
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    if (key && typeof key === "string") {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error(
      `ERROR >> removeFromLocalStorage: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(
      `ERROR >> clearLocalStorage: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

export const valueExistsInLocalStorage = (
  key: string,
  value: string,
): boolean => {
  let result: boolean = false;
  try {
    if (key && value && typeof key === "string" && typeof value === "string") {
      const storedValue = localStorage.getItem(key);
      result = !!(storedValue && storedValue.includes(value));
    }
    return result;
  } catch (error) {
    console.error(
      `ERROR >> valueExistsInLocalStorage: ${error instanceof Error ? error.message : String(error)}`,
    );
    return result;
  }
};
