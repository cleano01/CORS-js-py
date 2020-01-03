# CROS-js-py
Estudo sobre o CROS


Instalando bibliotecas no diretório CORS-JS
-----------------


    npm install
    
    

Instalando bibliotecas no diretório CORS-PY
-----------------


    pip install -r requirements.txt
    
    

Executando o CORS-JS
-----------------
Entre no diretório do rojeto e crie um segundo diretório */dist* no projeto


    npm run watch


*Em outro terminal execute o camando abaixo*

    npm run start
    
    

Executando o CORS-PY
-----------------
Entre no diretório do projeto 


    source cros-py/bin/activate

*E em seguida execute o comando abaixo*

    uvicorn main:app --reload



Estrutura 
-----------------
::

    CORS-JS
    ├── src              - estrutura do codigo fonte.
    │   ├── modules      - armazenamento de rotas.
    │   ├── config       - configurações do projeto.
    ├── router           - arquivo onde possui todas as rotas da API
    ├── server           - aquivo onde executamos o projet
    ├── .babelrc         - arquivo de configuração ES6
    
    
    CORS-PY
    ├── routers          - armazenamento de rotas.
    ├── cros-py          - diretório do vitualenv
    ├── main             - aquivo onde executamos o projeto
    ├── .babelrc         - arquivo de configuração ES6

    
    

    
   
