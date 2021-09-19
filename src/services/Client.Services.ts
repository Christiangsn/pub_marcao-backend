import { Services } from './Services'
import IClient from '../dtos/IClient'

class ClientServices extends Services {
  constructor () {
    super('Client')
  }

  public async store ({ name, document }: IClient): Promise<string> {
    await super.store({ name, document })
    return 'Cliente Cadastrado com Sucesso!'
  }

  public async updated (objectUpdated: IClient): Promise<string> {
    return 'teste'
  }
}

export { ClientServices }
