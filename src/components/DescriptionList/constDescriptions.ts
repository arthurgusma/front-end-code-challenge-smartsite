import requiredMask from '../../../public/_material/images/required-mask.png';
import recommendedMask from '../../../public/_material/images/recommended-mask.png';

import requiredTowel from '../../../public/_material/images/required-towel.png';
import recommendedTowel from '../../../public/_material/images/recommended-towel.png';

import partialFountain from '../../../public/_material/images/partial-fountain.png';
import forbiddenFountain from '../../../public/_material/images/forbidden-fountain.png';

import requiredLockerrom from '../../../public/_material/images/required-lockerroom.png';
import partialLockerrom from '../../../public/_material/images/partial-lockerroom.png';
import forbiddenLockerrom from '../../../public/_material/images/forbidden-lockerroom.png';

const descriptionRequired = 'Obrigatório';
const descriptionRecommended = 'Recomendado';
const partial = 'Parcial';
const forbidden = 'Proibido';
const allowed = 'Liberado';
const closed = 'Fechado';

export const mask = [{ description: descriptionRequired, image: requiredMask }, { description: descriptionRecommended, image: recommendedMask }];
export const towel = [{ description: descriptionRequired, image: requiredTowel }, { description: descriptionRecommended, image: recommendedTowel }];
export const fountain = [{ description: partial, image: partialFountain }, { description: forbidden, image: forbiddenFountain }];
export const lockerroom = [{ description: allowed, image: requiredLockerrom }, { description: partial, image: partialLockerrom }, { description: closed, image: forbiddenLockerrom}];