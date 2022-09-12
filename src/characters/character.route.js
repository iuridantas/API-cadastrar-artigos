const route = require('express').Router();
const character = require('./character.controller');
const {validId,validobjectBody,} = require('../middleware/character.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/characters',character.FindALLCharacterController,);
route.get('/characters/find/:id',validId,character.FindByIdCharacterController,);
route.post('/characters/create',validobjectBody,character.CreateCharacterController,);
route.put('/characters/update/:id',validId,validobjectBody,character.UpdateCharacterController,);
route.delete('/characters/delete/:id',validId,character.DeleteCharacterController,);

module.exports = route;
