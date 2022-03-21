# Labenu Music Awards

### O que Funciona 

#### Endpoints  
<p>app.post('/user/signup', signupController)</p>
<p>app.post('/user/login', loginController)</p>
<p>app.post('/band/register', bandRegisterController)</p>
<p>app.get('/band/:id', getBandDetailController)</p>
<p>app.post('/show/register', addShowtoADayController)</p>

### O que não Funciona
app.get('/show', getShowsController) (não sei aonde está o erro, mas está a aplicação não recebe o dia para encontrar os shows)
##

