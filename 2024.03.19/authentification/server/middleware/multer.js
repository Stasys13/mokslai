import multer from 'multer';
import { access, mkdir } from 'node:fs/promises';


//Multer diskstorage iniciavimas
const storage = multer.diskStorage({
    //Nurodymas kur failai bus saugomi
    destination: async (req, file, next) => {
      const fileDir = './uploads'
      // Nurodomas direktorijos pavadinimas kur failai bus saugomi
      try {
        // Tikrinam ar ivyks klaida
        await access(fileDir);
  
      } catch(error) {
        // Vykdome veiksmus ivykus klaidai
        // Sukuriam direktorija jei ji neegzistuoja
        mkdir(fileDir);
      }  
  
        next(null, fileDir);
    },
    filename: (req, file, next) => {
      // isskaidom originalaus failo pavadinima i masyva pagal tasko simboli
      const fileSplit = file.originalname.split('.');
      // Pasiimame paskutini elementa is masyvo
      const format = fileSplit[fileSplit.length - 1];
      // Generuojamas unikalus failo pavadinimas siekient isvengti failu perrasymo
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      // Failo pavadinimo pervadinimas
    next(null, uniqueSuffix + '.' + format);
    }
  })

  //MULTER MODULIO INICIAVIMAS
const upload = multer({
    
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, next) => {
      const formats = [
        'image/jpeg',
        'image/png',
        'image/svg+xml'
      ];
      if(formats.includes(file.mimetype)) {
        next(null, true);
      } else {
        next(null, false);
      }
    //   console.log(file)
    },
    storage: storage
  });

  export default upload;