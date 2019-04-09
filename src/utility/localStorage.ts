export const loadToken = (): string | undefined => {
  try {
    let token = localStorage.getItem('token');
    if (token === null) return undefined;
    return token;
  } catch (error) {
    return undefined;
  }
};

export const saveToken = (token: string) => {
  try {
    localStorage.setItem('token', token);
  } catch (error) {
    return undefined;
  }
};
