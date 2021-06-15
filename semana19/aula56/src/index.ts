import { app } from './controller/app'
import { taskRoute, userRoute } from './routes'

app.use('/user', userRoute)
app.use('/task', taskRoute)
