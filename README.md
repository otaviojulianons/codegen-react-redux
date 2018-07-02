# codegen-react-redux

## Overview

O projeto Codegen-Rect-Redux serve para gerar um Client API de projetos que utilizam o [Swagger](https://github.com/swagger-api/). Sua implementação é realizada sobre o projeto [Swagger-Codegen](https://github.com/swagger-api/swagger-codegen).


## React-Redux-Client

```
.
|- core
|-- api
|-- model
|-- service
|- store
|-- actions
|-- reducers
```

## Gerar Client API

Utilize o comando a baixo para gerar o client

```
java -cp codegen-react-redux.jar;swagger-codegen-cli.jar io.swagger.codegen.SwaggerCodegen generate -l react-redux -i http://localhost:5000/swagger/v1/swagger.json -o react-app-test\src
```