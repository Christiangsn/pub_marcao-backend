import { Document } from 'mongoose'

export default interface ILogsClients extends Document {
    userCreatedID: number,
    UserUpatedID: number,
    idClient: number
}
