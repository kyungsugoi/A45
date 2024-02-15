import Monster from "../models/monster.model.js";

export const getMonsters = async (req, res) => {
    try {
      const monsters = await MongoClient
      res.status(200).send(monsters);
    } catch (e) {
      res.status(500).send(e.message, 'failed to fetch monsters');
    }
  }
  
  export const getMonster = async (req, res) => {
    const { id } = req.params;
    try {
      const monster = await 
      res.status(200).send(monster);
    } catch (e) {
      res.status(500).send(e.message, `failed to fetch monster ${id}`);
    }
  }
  
  export const updateMonster = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const monster = await
      res.status(200).send(monster);
    } catch (e) {
      res.status(500).send(e.message, `failed to fetch monster ${id}`);
    }
  }
  
  export const deleteMonster = async (req, res) => {
    const { id } = req.params;
    try {
      const monster = await 
      if (monster) {
        res.status(204).send();
      } else {
        res.status(404).send(e.message, `failed to delete monster ${id}`);
      };
    } catch (e) {
      res.status(500).send(e.message, `failed to delete monster ${id}`);
    }
  };
  
  export const createMonster = async (req, res) => {
    const { body } = req;
    try {
      const monster = await 
      console.log(monster);
      res.status(200).send(monster);
    } catch (e) {
      res.status(500).send(e.message, `failed to fetch monster ${id}`);
    }
  }