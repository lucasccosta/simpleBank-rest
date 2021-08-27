
import { app } from "./app";

const PORT = 3001
const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

process.on('SIGINT', ()=> {
  server.close();
  console.log('The app was finished successfully')
})