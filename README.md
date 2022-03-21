# Labenu Music Awards

### O que Funciona 

#### Endpoints  
app.post('/user/signup', signupController)
app.post('/user/login', loginController)
app.post('/band/register', bandRegisterController)
app.get('/band/:id', getBandDetailController)
app.post('/show/register', addShowtoADayController)
### O que não Funciona
app.get('/show', getShowsController) (não sei aonde está o erro, mas está a aplicação não recebe o dia para encontrar os shows)
##

