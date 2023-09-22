import multer from 'multer';
import multerConfig from '../config/multerConfig';
import { FotoController } from './FotoController.1';

export const upload = multer(multerConfig).single('foto');

export default new FotoController();
