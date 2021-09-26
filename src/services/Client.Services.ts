import { Services } from './Services'
import IClient from '../dtos/IClient'

interface ICreateUser {
  data: IClient;
  idUser: string;
}

class ClientServices extends Services {
  public userLogsService;

  constructor () {
    super('Client')
    this.userLogsService = new Services('LogsClients')
  }

  public async store ({ data, idUser }: ICreateUser): Promise<string> {
    const client = await super.store({ ...data })
    const logs = { userCreatedID: idUser, UserUpatedID: idUser, idClient: client.id }
    await this.userLogsService.store(logs)
    return 'Cliente Cadastrado com Sucesso!'
  }

  public async index () {
    const clients = super.index()
    return clients
  }
}

export { ClientServices }
