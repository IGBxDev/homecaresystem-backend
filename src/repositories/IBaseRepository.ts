
type Entity = {
    entity: Entity;
}

export interface IBaseRepository{
    findAll(): Promise<Entity>
    save(entity: Entity): Promise<void>
}