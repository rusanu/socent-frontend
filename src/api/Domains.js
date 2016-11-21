// @flow

import Entity, {APIEndpoints} from './Entity';

import type {
  APIPayload,
} from './Entity';

export default class Domains extends Entity {
  list(
    params: APIPayload,
  ): Promise<Object> {
    return this._get(APIEndpoints.social_intervention_domains, params);
  }

  getByID(
    id: number,
  ): Promise<Object> {
    return this._getID(APIEndpoints.social_intervention_domains, id);
  }
}
