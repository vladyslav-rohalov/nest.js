<h1>Rangein tech task </h1>
<h2> Swagger documentation available at localhost:${PORT}//swagger</h2>
<p>This repository is technical task for Rangein company</p>
<h3>Languages and Tools</h3>
<ul>
    <li>
        <span><a href="https://nodejs.org/" target="_blank" rel="noreferrer">NodeJS</a>, environment was used</span>
    </li>
    <li>
        <span><a href="https://nestjs.com/" target="_blank" rel="noreferrer">NestJS</a>, this framework was used to create the app</span>
    </li>
    <li>
        <span><a href="https://typeorm.io/" target="_blank" rel="noreferrer">TypeORM</a>, this ORM used to create relationships between the app and the database </span>
    </li>
    <li>
        <span><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a>, to store data. </span>
    </li>
    <li>
        <span><a href="https://github.com/kelektiv/node.bcrypt.js" target="_blank" rel="noreferrer">Bcrypt</a>, used to hash passwords</span>
    </li>
    <li>
        <span><a href="https://github.com/typestack/class-validator" target="_blank" rel="noreferrer">Class validator</a>, used to create validation based on decorators </span>
    </li>
    <li>
        <span><a href="https://swagger.io/" target="_blank" rel="noreferrer">Swagger</a>, to create documentation</span>
    </li>  
</ul>

<h3>Description</h3>
<p>The application is a backend part to register users and add products to the user and use other CRUD methods for the product</p>
<h3>User methods</h3>
<p>auth/registration or auth/login endpoints<p/>
 <ul>
        <li>Regestration using email and password. POST method</li>
        <li>Login using email and password. POST method</li>
 </ul>

 <p>/products endpoints<p/>
 <h3>Products methods</h3>
 <ul>
        <li>Add products, using title, description, price. POST method</li>
        <li>Get all products. GET method</li>
        <li>Get products by id.GET method</li>
        <li>Edit products. PATCH method</li>
        <li>Delete products. DELETE method</li>
 </ul>

<p>all methods are described in more detail in the swagger documentation</p>

<h3>Error handling </h3>
   <ul>
        <li>400: Bad Request</li>
        <li>401: Unauthorized</li>
        <li>402: Forbidden</li>
        <li>404: Not found</li>
        <li>409: Conflict</li>
   </ul>

<h3>Application installation</h3>   
<ol>
        <li>download the application using the command in your terminal:  gh repo clone vladyslav-rohalov/nest.js</li>
        <li>create an empty PostgreSQL database for the project</li>
        <li>create an .env file in the root of the project</li>
        <li>fill in the env file based on the .env.example file, where <br /><b>PORT</b> is the port on which you are running the database, for example 3000,<br /> <b>POSTGRES_HOST</b> is the hosting on which you are running the database, for example localhost,<br /> <b>POSTGRES_USER</b> is postgres,<br /><b>POSTGRES_DB</b> is the name of the database you created earlier,<br /><b>POSTGRES_PASSWORD</b> is the password you set for the database,<br /> <b>POSTGRES_PORT</b> is the port on which the database runs (5432),<br /><b>PRIVATE_KEY</b> is the secret key for encrypting user passwords.</li>
        <li>start the application with the command - npm run start</li>
        <li>Now you can open the documentation at http://localhost:PORT/swagger</li>
</ol>
