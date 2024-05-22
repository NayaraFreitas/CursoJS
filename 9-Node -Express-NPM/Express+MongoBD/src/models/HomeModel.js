const mongoose = require('mongoose');

//Isso é para organizar seu dados no mongodb pois ele vai salvar de qualquer jeito (tratando os dados)
const HomeSchema = new mongoose.Schema({ // moldando o estilo do esquema
    titulo: {type: String, require:true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {
    
}

module.exports = Home; 