export interface IGetTransactionRequestDTO{
    Status: number
    DataInicio: Date
    DataFinalizado: Date
    IdUsuarioExecutador: number
    Sistema: number
    TotalDeCnpj: number
    MicroTransacoes: IMicroTransacoesDTO[]
}

export interface IMicroTransacoesDTO{
    Status: number
    DataInicio: Date
    DataFinalizacao: Date
    Cnpj: string
}