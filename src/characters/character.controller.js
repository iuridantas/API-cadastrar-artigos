const { default: mongoose } = require('mongoose');
const CharacterService = require('./character.service');
const mongooose = require('mongoose');

const FindALLCharacterController = async (req, res) => {
  const character = await CharacterService.FindALLCharacterService();

  if (character.length === 0) {
    return res.status(404).send({ message: 'Não possui artigo cadastrado!' });
  }

  res.send(character);
};

const FindByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const chosencharacter = await CharacterService.FindByIdCharacterService(
    idParam,
  );

  if (!chosencharacter) {
    return res.status(404).send({ message: 'Artigo não encontrado!' });
  }

  res.send(chosencharacter);
};

const CreateCharacterController = async (req, res) => {
  const character = req.body;

  const newcharacter = await CharacterService.CreateCharacterService(character);
  res.status(201).send(newcharacter);
};

const UpdateCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const characterEdit = req.body;

  const updatedcharacter = await CharacterService.UpdateCharacterService(
    idParam,
    characterEdit,
  );
  res.send(updatedcharacter);
};

const DeleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  await CharacterService.DeleteCharacterService(idParam);

  res.send({ message: 'Artigo deletado com sucesso!' });
};

module.exports = {
  FindALLCharacterController,
  FindByIdCharacterController,
  CreateCharacterController,
  UpdateCharacterController,
  DeleteCharacterController,
};
