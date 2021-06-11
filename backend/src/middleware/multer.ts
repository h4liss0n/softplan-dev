import * as multer from 'multer';
import { extname, resolve } from 'path';



interface IMulterFile {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string
    destination: string
    filename: string
    path: string
    size: number
}


const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);



const MulterConfig = (folder: string) => {
    const config: multer.Options = {
        fileFilter: (req, file: Express.Multer.File, cb) => {
            if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
                return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Arquivo deve ser to tipo NPG/JPEG'))
            }
            return cb(null, true);
        },
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, resolve(__dirname, '..', '..', 'uploads', folder));

            },
            filename: (req, file, cb) => {
                cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
            }
        }),
    }

    return config;
}



export { MulterConfig, IMulterFile };

