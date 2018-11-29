## CARROSSEL - TESTE DE FRONT-END
#### Considerações sobre o projeto

------------

- o servidor ***" www.itelios.com.br/arquivos/imagens/ "*** esta fora do ar, portanto, as imagens retornam um 404. anexei uma imagem default para concluir o layout.

- assim que o serviço de hospedagem voltar a funcionar, basta alterar a **string** da imagem pela **variável dinâmica**

- Dentro da pasta controller existem dois arquivos que são responsáveis por fazer um **fetch** e retornar uma promisse com os produtos em seus devidos lugares. Será necessário alterar nesses dois arquivos.

++ **produtosCarrossel.js**
++ **produtoPrincipal.js**



###### *VERSÃO ATUAL COM URL CHUMBADA*
![enter image description here](https://lh3.googleusercontent.com/_Xey6_QjUQK8agqjkfG6y0YlFEFrhP1CjQD_CiPgtRqjlupOBbKOzycxARwrZWgoFl2wHdQwDqe3=s3000)

###### *VERSÃO FINAL COM VARIÁVEL DINÂMICA*
![enter image description here](https://lh3.googleusercontent.com/Scu9OUa2KGyZ7PaLYMvPslWiD_wLOiWs6azsGuhUKlFaM287m6XH6ty0AycyX1rKJ-c7RyO0Gpyc=s3000)

## # CRIANDO O PROJETO
###### Extraia o diretório do projeto em uma pasta de sua preferência. Caminhe até o diretório pelo seu terminal favorito, onde seu projeto foi extraído.
*Lembrando que você também pode clonar o repositório. Para isso, digite:*

`git clone git@github.com:rvitorelli/itelios-frontend-challenge.git`


------------


## # INICIANDO O PROJETO
###### Após entrar no diretório do projeto pelo terminal, basta digitar o comando abaixo e pronto. O node faz toda a mágica para nós.

`npm install` ou `npm i`. Ambos, fazem a mesma coisa.

obs: Para executar o comando acima, é necessário ter instalado o node.js em sua máquina. Mas caso não tenha, fique tranquilo, nesse link, os caras ensinam passo a passo e é bem simples.:

###### Instalação no windows

> https://medium.com/@adsonrocha/como-instalar-o-node-js-no-windows-10-cf2bd460b8a8

###### Instalação no mac Os

> https://receitasdecodigo.com.br/nodejs/instalacao-nodejs-no-mac

###### Instalação no Linux

> https://www.edivaldobrito.com.br/node-js-no-linux/

## # RODANDO NOSSO PROJETO
###### Vamos usar o webpack como nosso aliado nessa tarefa. Dentro do nosso arquivo **package.json** setamos tudo que é necessário para o npm instalar.

###### Em nosso arquivo **webpack.config.js** temos toda a lógica necessária para fazer a mágica. Lá ele ira transpilar nosso código para ser melhor aproveitado, minificar para colocarmos em produção, subir um servidor local, gerar o build e até mesmo mostrar erros, caso isso aconteça.
> "MAS NÃO QUEREMOS ISSO. RSRRS"

###### Nós temos três comandos que irão transpilar nosso projeto de acordo com a necessidade.
- **Modo desenvolvedor** com auto reload. Nossa aplicação recarrega conforme vamos atualizando.
> `npm run start`

![enter image description here](https://lh3.googleusercontent.com/TkCIPeTjqLKkQ8xsIXzb_SmkGqwdTvinrdoqp2YSIpr3aiDnmCpY6shtjcr2gzE2a2ThCpfA4P6i=s3000)

- **Modo desenvolvedor** com auto reload e **bundle.js** minificado. Nossa aplicação recarrega conforme vamos atualizando e conseguimos enxergar a velocidade **"quase"** como cliente final.
> `npm run server`

![enter image description here](https://lh3.googleusercontent.com/qvwDnzqpFvoS_tQSaUzSCcDnJ1N3C3ieNRWGCj9pI_QZRHWqhs-6WrS0SK-Uc1wAI5nSduqseJRe=s3000)

- **Modo Produção**. Esse modo gera nosso arquivo final, fazendo build minificado, transpilando para uma qualidade de código melhor e compatibilidade entre navegadores.
> `npm run build`

![enter image description here](https://lh3.googleusercontent.com/dBEAXRGETonKJmPegBjTpUgw6a94vaiTdHrzIJZVAmu7GdD0TxsOP6O4pb6Ojx2-_v8zlpSlEk_P=s3000)


------------

## # COMPILANDO NOSSO SASS VIA COMPASS
###### Vamos usar o compass para gerar nosso css, ou seja, transformar nossas variáveis, placeholders e etc, em nosso css final.

##### *Eu dei preferência para o compass por dois motivos.*
1.  Ele gera os sprites para mim, com muito mais facilidade, mais compacto e com perda menor de qualidade. E apesar de não precisar nesse projeto. Gosto muito mais dele, do que das noites que perdi para configurar isso com perfeição no webpack/gulp "**#ficaadica**"

3.  A configuração dele é extremamente simples e o css final sai com uma compactação impecável.

###### No nosso caso não vamos precisar rodar o compilador, pois já deixei isso pronto para nós. Mas aqui vai um link de como instalar o compass em sua maquina.
> http://compass-style.org/install/

###### E esses são os comandos para gerar nossos arquivos css.

- ######  compila todos os nossos arquivos scss com autoreload e marcação para manutenção 
`compass watch --force`
------------

![enter image description here](https://lh3.googleusercontent.com/ynNE2FjLGW7_4Z9moME51qbTBNub2PaaAk_K4TFytssH5vJOg1OqShxjzZLdiIeuh4jXJ1Mx0QJY=s3000)

- ######  compila todos os nossos arquivos scss com autoreload, minifica o css e remove todos os espaços vazios.
`compass watch --output-style=compressed`
------------
![enter image description here](https://lh3.googleusercontent.com/JTpnebeL2LJPWEKHuM9Zu02qwN4MGEZ8auoj7NPM434NYl7aDe9MRhTCcJyvRu_WzTiItLEL_DeM=s3000)


## # COMPOSIÇÃO DO PROJETO

- ###### Nosso projeto foi desenvolvido em javascript puro (Vanilla) e javascript funcional.
Usamos uma biblioteca para nos auxiliar no desenvolvimento do slide do carrossel. Apesar de,** eu Rodrigo**, adorar o slick.js, fui forçado a encontrar algo que **não depende do jquery** para rodar.

> Encontrei uma biblioteca que  roda nosso carrossel no Vanilla Javascript ("javascript moderno"), sem dor de cabeça, e apesar de ser mais complicada para estilizar, deu conta do recado e deixou nosso carrossel bem bacana.

##### - Tiny-Slider
> https://github.com/ganlanyuan/tiny-slider


------------


#### E essa é nossa composição final do nosso package.json
- ###### Temos o babel responsável pelo transpiler do nosso código.
- ###### O polyfill é nosso companheiro para melhorar a compatibilidade.
- ###### O Tiny Slider fica encarregado de dar vida ao nosso carrossel.
- ###### Nosso webpack-de-server sobe o servidor local.
- ###### E nosso webpack faz o biuld final da nossa aplicação.

------------



##### > 1. polyfill
##### > 2. webpack-dev-server
##### > 3. babel-core
##### > 4. babel-loader
##### > 5. babel-preset-env
##### > 6. babel-preset-es2015
##### > 7. babel-preset-stage-0
##### > 8. tiny-slider
##### > 9. webpack
##### > 10. webpack-cli