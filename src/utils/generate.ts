export const generateId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

export const generateSlug = (length: number) =>
  Array(length)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
