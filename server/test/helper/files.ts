const fs = require('fs');
const path = require('path');

export class FileHelper {
    folderPath = "";
    deleteFolderFiles() {
        fs.readdir(this.folderPath, (err, files) => {
            if (err) {
                throw err;
            }
            for (const file of files) {
                fs.unlink(path.join(this.folderPath, file), err => {
                    if (err) throw err;
                });
            }
        });
    }
    saveToFile(file, data) {
        var options = { encoding: 'utf-8', flag: 'w' };
        fs.writeFileSync(file, data, options);
    }
}



