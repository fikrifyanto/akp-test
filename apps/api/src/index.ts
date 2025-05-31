import { Hono } from 'hono'
import postgres from 'postgres'

// Initialize PostgreSQL client
const sql = postgres(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres', {
  ssl: false, // Set to true if your PostgreSQL requires SSL
})

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Add a route to test PostgreSQL connection
app.get('/db-test', async (c) => {
  try {
    // Simple query to test the connection
    const result = await sql`SELECT current_timestamp as now`
    return c.json({
      status: 'success',
      message: 'Connected to PostgreSQL successfully',
      data: result[0]
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return c.json({
      status: 'error',
      message: 'Failed to connect to PostgreSQL',
      error: error.message
    }, 500)
  }
})

export default {
  port: 3001,
  fetch: app.fetch,
}
