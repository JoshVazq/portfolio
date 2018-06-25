export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = (entity: string, meta: any) => ({
  type: `${entity} ${API_REQUEST}`,
  meta: { entity, ...meta }
});

export const apiSuccess = (response: any, entity: string) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: response,
  meta: { entity }
});

export const apiError = (error: any, entity: string) => ({
  type: `${entity} ${API_ERROR}`,
  payload: error,
  meta: { entity }
});
