import { ICRUDRepository } from "./AbstractRepository.types";

class AbstractRepository implements ICRUDRepository {
    httpService: HTTPService
    constructor(){
        this.httpService = new HttpService(baseUrl)
    }

    create() {
        return this.httpService
    }
    getOne() {
        throw new Error("Method not implemented.");
    }
    getMany() {
        throw new Error("Method not implemented.");
    }
    editOne() {
        throw new Error("Method not implemented.");
    }
    removeOne() {
        throw new Error("Method not implemented.");
    }
    removeMany() {
        throw new Error("Method not implemented.");
    }
}
