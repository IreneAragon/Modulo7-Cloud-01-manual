import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.origin.name, 
    url: character.origin.url,
  }, 
  url: character.url
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin.name, 
      url: character.origin.url,
    }, 
    url: character.url
  } as unknown) as apiModel.Character);
