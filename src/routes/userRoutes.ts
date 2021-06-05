import { Router } from "express";
import { userController } from "../application/controller/user/implementation";

const userRoutes = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - id
 *          - email
 *          - password
 *        properties:
 *          id:
 *            type: string
 *            description: The auto-generated id of the user.
 *          email:
 *            type: string
 *            description: The email of user.
 *          password:
 *            type: string
 *            description: password of user
 *        example:
 *           id: d3951579-c132-449b-b5a2-e4c323de1162
 *           email: willian@willian.com
 *           password: 123
 * 
 */
  
 /**
 @swagger
* tags:
*   name: User
*   description: API to manage Users.
*/

/**
* @swagger
*  /user/:
*    post:
*      summary: Creates a new user
*      tags: [User]
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      responses:
*        "201":
*          description: The created user.
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/User'
*/
userRoutes.post('/user', (request, response) => {
    return userController.create(request, response);
});


/**
* @swagger
*  /user/:
*    get:
*      summary: List all users
*      tags: [User]
*      responses:
*        "200":
*          description: The users list.
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/User'
*/
userRoutes.get('/user', (request, response) => {
    return userController.findAll(request, response);
});

/**
* @swagger
*  /user/{id}:
*    get:
*      summary: List user by id
*      tags: [User]
*      parameters:
*         - in: path
*           name: id
*           schema:
*             type: string
*           required: true
*           description: The user id
*      responses:
*        "200":
*          description: The user by id.
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/User'
*/
userRoutes.get('/user/:id', (request, response) => {
    return userController.findById(request, response);
});

/**
* @swagger
*  /user/:
*    put:
*      summary: Update user
*      tags: [User]
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      responses:
*        "200":
*          description: The update user.
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/User'
*/
userRoutes.put('/user', (request, response) => {
    return userController.update(request, response);
});

export {userRoutes}