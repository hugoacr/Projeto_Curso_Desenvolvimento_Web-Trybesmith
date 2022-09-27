 
# Bem vindo ao repositório do projeto Trybesmith!

Este projeto faz parte do curso de FullStack da Trybe. Este projeto teve como objetivo fixar o aprendizado do bloco de TypeScript. Com ele tive que praticar a sintaxe nova, bem como a tipar variáveis e funções, deixando o código mais compreensível e robusto.


# 👨‍💻 **Qual o objetivo do projeto?!?!**


  Este projeto cria uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.
  
  Desenvolvendo todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) no código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados:
  Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜 - _Create, Read, Update_ e _Delete_).

  Será disponibilizado alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

  ⚠️ **Ponto Importante** ⚠️:

  - Não haverá front-end neste projeto, apenas as funcionalidades e organização do código;
  ---

# Recursos

## 1 - Endpoint para a listagem de produtos

- O endpoint é acessível através do caminho (`/products`);

<details close>
  <summary>As seguintes respostas são esperadas para uma chamada GET deste endpoint:</summary>

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  
  - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
</details>

##
## 2 - Endpoint para o cadastro de produtos

- O endpoint é acessível através do caminho (`/products`);

- Os produtos enviados são salvos na tabela `Products` do banco de dados;

- O endpoint deve receber no _body_ a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

<details close>
  <summary>As seguintes respostas são esperadas para uma chamada POST deste endpoint:</summary>

  <br>

  > 👉 Para name
  
  - Se o campo "name" não for informado, o resultado retornado deverá ser um  _status http_ `400` e
    ```json
      { "message": "\"name\" is required" }
    ```

  - Se o campo "name" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" must be a string" }
    ```

  - Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para amount

  - Se o campo "amount" não for informado, o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"amount\" is required" }
    ```

  - Se o campo "amount" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" must be a string" }
    ```

  - Se o campo "amount" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente

  - O resultado retornado para cadastrar o produto com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
      }
    ```

</details>

##
## 3 - Endpoint para o cadastro de pessoas usuárias

- O endpoint é acessível através do caminho (`/users`);

- As informações de pessoas usuárias cadastradas são salvas na tabela `Users` do banco de dados;

- O endpoint deve receber no _body_ a seguinte estrutura:
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```

<details close>
  <summary>As seguintes respostas são esperadas para uma chamada POST deste endpoint:</summary>

  <br>

  > 👉 Para username

  - Se a requisição não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```

  - Se o campo "username" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" must be a string" }
    ```

  - Se o campo "username" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para classe

  - Se a requisição não tiver o campo "classe", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"classe\" is required" }
    ```

  - Se o campo "classe" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" must be a string" }
    ```

  - Se o campo "classe" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para level

  - Se a pessoa usuária não tiver o campo "level", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"level\" is required" }
    ```

  - Se o campo "level" não for do tipo `number`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be a number" }
    ```

  - Se o campo "level" não for do tipo `number` maior que 0, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be greater than or equal to 1" }
    ```

  <br>

  > 👉 Para password

  - Se a requisição não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"password\" is required" }
    ```

  - Se o campo "password" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" must be a string" }
    ```

  - Se o campo "password" não for do tipo `string` com mais de 8 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" length must be at least 8 characters long" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente

  - Se a pessoa usuária for cadastrada com sucesso, o resultado deverá ser conforme o exibido abaixo, com um _status http_ `201` e retornando um _token_:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```

</details>

##
## 4 - Endpoint para listar todos os pedidos

- O endpoint é acessível através do caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.

<details close>
  <summary>As seguintes respostas são esperadas para uma chamada GET deste endpoint:</summary>

  <br>

  > 👉 Para orders

  - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
      [
        {
          "id": 1,
          "userId": 2,
          "productsIds": [1, 2]
        },
        {
          "id": 2,
          "userId": 2,
          "productsIds": [3, 4]
        }
      ]
    ```
</details>


##
## 5 - Endpoint para o login de pessoas usuárias

- O endpoint é acessível através do caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos são validados no banco de dados.

- Um token `JWT` é gerado e retornado caso haja sucesso no _login_. 

- O endpoint deve receber no _body_ a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```


<details close>
 <summary>As seguintes respostas são esperadas para uma chamada POST deste endpoint:</summary>

  <br>

  > 👉 Para caso haja problemas no login

  - Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```

  - Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400`
    ```json
      { "message": "\"password\" is required" }
    ```

  - Se o _login_ tiver o username inválido, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  - Se o login tiver a senha inválida, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente

  - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```
</details>

---
