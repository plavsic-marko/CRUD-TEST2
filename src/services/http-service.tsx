import apiClient from "./apiClient";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    return apiClient.get<T[]>(this.endpoint);
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entitiy: T) {
    return apiClient.patch(this.endpoint + "/" + entitiy.id, entitiy);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
