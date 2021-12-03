import app from './shared/express/app'
const port = process.env.NODE_LOCAL_PORT
const host = 'http://localhost'


app.listen(port, async () => {
    console.log(`Listen on ${host}:${port}`);
})
