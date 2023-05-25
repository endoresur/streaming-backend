import { diskStorage } from 'multer';
import { normalizeFileName } from 'src/utils/normalize';

export const videoStorage = diskStorage({
  destination: './video_uploads',
  filename: normalizeFileName,
});
