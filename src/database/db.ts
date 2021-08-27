import { createConnection } from 'typeorm'

export const conn = async () => {
  const connection = await createConnection();
  console.log(`App connected to database ${connection.options.database}`)

  process.on('SIGINT', ()=> {
    connection.close().then(()=> console.log('Connection closed'))
  })
}