export interface HumanNumberOptions {
  lastNameUpperCase?: boolean;
}

export function humanNumber(firstName: string, lastName: string, options?: HumanNumberOptions) {
  if (options?.lastNameUpperCase) {
    return `${firstName} ${lastName.toLocaleUpperCase()}`;
  }
  return `${firstName} ${lastName}`;
}
