const Character = require('./character.model')

const FindALLCharacterService = async () => {
  const character = await Character.find();
  return character;
};

const FindByIdCharacterService = async (idParam) => {
  const character = await Character.find({_id: idParam});
  return character;
};

const CreateCharacterService = async (newcharacter) => {
  const charactercreated = await Character.create(newcharacter)
  return charactercreated;
};

const UpdateCharacterService = async (idParam, characterEdit) => {
  const characterupdate = await Character.findByIdAndUpdate(idParam, characterEdit)
  return characterupdate;
};

const DeleteCharacterService = async (idParam) => {
  return await Character.findByIdAndDelete(idParam)
};

module.exports = {
    FindALLCharacterService,
    FindByIdCharacterService,
    CreateCharacterService,
    UpdateCharacterService,
    DeleteCharacterService,
};
