import app from './app';
const PORT: string = process.env.PORT || '8080';

app.listen(PORT, (): void => console.log(`Listening on port ${PORT}`))