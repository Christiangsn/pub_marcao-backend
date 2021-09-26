import db from '../models'

class Services {
  public model

  constructor (model: string) {
    this.model = model
  }

  public async index () {
    return await db[this.model].find({}).exec()
  }

  public async store (profile: object) {
    return await db[this.model].create(profile)
  }

  public async show (params: object) {
    return await db[this.model].findOne({ ...params }).exec()
  }

  public async update (id: number, profile: object) {
    return await db[this.model].findByIdAndUpdate(id, {
      $set: profile
    })
  }
}

export { Services }
