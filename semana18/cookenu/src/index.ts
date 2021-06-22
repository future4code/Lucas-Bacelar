import app from './app'
import recipeRoute from './routes/Recipes'
import userRoute from './routes/Users'
import { errorHandler } from './utils/middleware'

app.use('/user', userRoute)
app.use('/recipe', recipeRoute)
app.use(errorHandler)
