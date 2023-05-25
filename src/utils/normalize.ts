import { Request } from 'express';
import { generateId } from './generate';

export const normalizeFileName = (
  req: Request,
  file: Express.Multer.File,
  callback: (error: Error, filename: string) => void,
): void => {
  const fileExtName = file.originalname.split('.').pop();
  callback(null, `${generateId()}.${fileExtName}`);
};
