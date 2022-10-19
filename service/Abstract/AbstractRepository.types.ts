export interface ICRUDRepository {
    create();
    getOne();
    getMany();
    editOne();
    removeOne();
    removeMany();
}
