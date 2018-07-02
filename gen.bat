@echo off
echo GERANDO CODIGO...
copy codegen-react-redux\target\codegen-react-redux-1.0.0.jar codegen-react-redux.jar
::http://localhost:5000/swagger/v1/swagger.json
::http://petstore.swagger.io/v2/swagger.json
java -cp codegen-react-redux.jar;swagger-codegen-cli.jar io.swagger.codegen.SwaggerCodegen generate -l react-redux -i http://localhost:5000/swagger/v1/swagger.json -o react-app-test\src

