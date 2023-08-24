const fs = require('fs').promises;
const path = require('path');
const { fileURLToPath } = require('url');

/*fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e));*/

async function readdir(rootDir) {   //<-- rootDir um diretorio raiz
    rootDir = rootDir || path.resolve(__dirname)  // se a rootdir for enviado irei usar ela senão usarei a path ( meio que um fallback)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);  // para falar se é um diretório
        if(/\.git/g.test(fileFullPath)) continue;  //para não ler as pastas git
        if(/node_modules/g.test(fileFullPath)) continue; // para não ler as pastas node_modules
        
        if(stats.isDirectory()) {   // vai lista todas as pastas se for diretorio ele vai volta e exibir os arquivos
            readdir(fileFullPath);
            continue;
        }

       if( !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath) ) continue; //seria para mostra as pastas css's e html

        console.log(file, stats.isDirectory());
    }
}

readdir('c:/CursoJS/')