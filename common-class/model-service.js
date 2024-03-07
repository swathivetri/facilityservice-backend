class modelService {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try{
      return await this.model.create(data)
    }
    catch(error){
        throw error;
    }
  }

  async update(data, id) {
    try {
      const data = this.model.update(data, {where: {id}});
      return data;
    }
    catch(error){
      throw error;
    }
  }

  async findOne(id) {
    try{
        const data = await this.model.findOne({
            where: {id: id}, raw: true
        })
    }
    catch(Error) { throw Error; }
  }
  async findOneByCond(cond) {
    try{
      const data = this.model.findOneByCond({where: cond, raw: true});
      return data;
    }
    catch(error) { throw error;}
  }
  async findAll(query) {
    try{
        const data = await this.model.findAll({ where: query, raw: true});
        return data;
    }
    catch(Error) { throw Error; }
  }

  async destroy(id){
    try {
      const data = await this.model.destroy({
        where: { id }
      });
    }
    catch(Error) { throw Error; }
  }
}
module.exports = modelService;