
import app from './app';
import connection from './connection';

connection.create().then(
    () => {
        app.listen('8090');
        console.log(`localhost:8090`);
    }
)






