import familyService from './family.service';


const list = async (req, res) => {
  try {
    const { page, pageSize, search } = req.body;
    return familyService.list({ page, pageSize, search })
  } catch (error) {
    return res.json(error);
  }
}

const get = async (req, res) => {
  try {
    const { id } = req.body;
    return familyService.get(id);
  } catch (error) {
    return res.json(error);
  }
}

const save = async (req, res) => {
  try {

  } catch (error) {
    return res.json(error);
  }
}