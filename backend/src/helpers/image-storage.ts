import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');

export const saveImageToStorage = (pathName = 'users') => {
  return {
    storage: diskStorage({
      destination: `uploads/${pathName}`,
      filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = uuidv4() + fileExtension;
        cb(null, fileName);
      },
    }),
  };
};

export const saveImageInventario = {
  storage: diskStorage({
    destination: `uploads/inventario`,
    filename: (req, file, cb) => {
      console.log(file);
      const fileExtension = path.extname(file.originalname);
      const fileName = uuidv4() + fileExtension;
      cb(null, fileName);
    },
  }),
};
