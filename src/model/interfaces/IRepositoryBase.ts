export interface IRepositoryBase {
    findAll(): Promise<any>
    findById( id: string ): Promise<any>
    save(): Promise<any>
    delete(): Promise<any>
}