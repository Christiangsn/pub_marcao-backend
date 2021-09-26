import { Schema, model } from 'mongoose'
import ILogsClients from '../interface/ILogsClients'

const LogsClientsSchema = new Schema(
  {
    userCreatedID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    UserUpatedID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    idClient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default model<ILogsClients>('LogsClients', LogsClientsSchema)
