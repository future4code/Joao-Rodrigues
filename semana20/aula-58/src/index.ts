import { app } from "./app"
import { getTaskById } from './endpoints(old_arch)/getTaskById'
import { login } from './endpoints(old_arch)/login'
import { createTaskController } from "./controller/tasks/createTaskController"
import { signupController } from "./controller/users/signupController"

app.post('/user/signup', signupController)
app.post('/user/login', login)

app.put('/task', createTaskController)
app.get('/task/:id', getTaskById)

