import express, {Request, Response} from 'express';
//Import dotenv para uso das variáveis de ambiente
import dotenv from 'dotenv';
//Import do path para uso de caminho absoluto de pastas e arquivos
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/mainRoutes';

//Carregamento da configuração do dotenv
dotenv.config();

//Criação do server através do express
const server = express();

//Definindo mustache como view engine
server.set('view engine', 'mustache');

//Definindo a pasta das views
server.set('views', path.join(__dirname, 'views'));

//Definindo o mustache como engine
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// Tornando os dados da requisição acessíveis para método POST
server.use(express.urlencoded({extended: true}));

//definição do arquivo de rotas
server.use(mainRoutes);

//Definição do retorno de página inexistente
server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada');
});

//Escuta do server usando variável de ambiente PORT
server.listen(process.env.PORT);