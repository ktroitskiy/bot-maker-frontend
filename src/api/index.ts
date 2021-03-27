export class Api {
  constructor() {
    this._apiURL = `${import.meta.env.REACT_APP_BACKEND_HOST}:${import.meta.env.REACT_APP_BACKEND_PORT}`;
  }

  private readonly _apiURL: string

  async getById<T>(entity: string, id: string): Promise<T> {
    const response: Response = await fetch(`${this._apiURL}/${entity}/${id}`);

    return await response.json();
  }

  async getAll<T>(entity: string): Promise<T> {
    const response: Response = await fetch(`${this._apiURL}/${entity}`);

    return await response.json();
  }
}