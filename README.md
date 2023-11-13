ok, nao sou muito bom com textos mas vamos la kkk

## Dependências

Certifique-se de ter as seguintes dependências instaladas antes de executar o aplicativo:

- [Express](https://www.npmjs.com/package/express): Utilizado para criar o servidor web.
- [Body Parser](https://www.npmjs.com/package/body-parser): Middleware para processar dados de solicitação HTTP.
- [Path](https://nodejs.org/api/path.html): Módulo para manipulação de caminhos de arquivo e diretório.
- [SQLite3](https://www.npmjs.com/package/sqlite3): Driver para interagir com bancos de dados SQLite.

## Instalação

Siga estas etapas para instalar as dependências e executar o aplicativo:

1. Clone este repositório:

   ```bash
   git clone https://github.com/dedemalusco/musgas-ngrok.git
   
Navegue até o diretório do projeto:



cd seu-repositorio

Instale as dependências usando npm:

npm install

Execute o aplicativo:

    npm start

O aplicativo estará acessível em http://localhost:8000/.

# executar usando ngrok (localhost publico)

siga o manual de indstalaçao do ngrok 

https://ngrok.com/download

extraia o arquivo e navegue até a pagina necessária

cd ./Downloads/ngrok (ou algo do tipo)

em seguida, execute o ngrok

./ngrok http 8000

envie esse comando no terminal linux no diretorio do ngrok, em seguida ele enviara de volta uma url, parabens, seu servidor em nodejs está hospedado, em planos gratuitos, os servidores mudarao de subdominio em toda reinicializaçao que tiver e nao podera ser escolhido um dominio, entretanto, o site te da um subdominio deles gratuitamente. é util para nao ter que ficar acessando varias url diferentes toda vez que reinciar o processo, vá para

https://dashboard.ngrok.com/cloud-edge/domains

e siga os manuais, assim que eles entrarem um dominio a voce, entre novamente no diretorio do ngrok e envie o comando (linux)

./ngrok http -subdomain=seusubdominio 8000

seu servidor que está hospedado no localhost:8000 estará disponivel gratuitamente para todos que acessarem a url "seudominio.ngrok-free.app"

o ngrok funciona assim: ele pega oque estiver rodando na porta indicada na hora da execuçao e envia ele para uma url publica, ou seja, para iniciarmos o ngrok nao adianta só enviar 
./ngrok http -subdomain=seusubdominio 8000

precisamos primeiramente que estar rodando o arquivo server.js na porta 8000 para depois em outro aba do terminal enviar o 

./ngrok http -subdomain=seusubdominio 8000


# aviso!!
o servidor provavelmente (certeza) nao funcionara a nao ser que voce coloque o seu banco de dados sql lite linkado no arquivo
