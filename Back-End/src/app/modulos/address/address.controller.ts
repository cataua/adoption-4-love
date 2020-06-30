import express from 'express';
import addressService from './address.service';


const list = async (req: express.Request, res: express.Response) => {
  try {
    const resp = await addressService.list(req);
    return res.json(resp)
  } catch (error) {
    return res.json(error);
  }
}

const get = async (req: express.Request, res: express.Response) => {
  try {
    const resp = await addressService.get(req)
    if (!resp) res.status(404).json({message: 'Resource not found'})
    return res.json(resp);
  } catch (error) {
    return res.json(error);
  }
}

const save = async (req: express.Request, res: express.Response) => {
  try {
    const resp = await addressService.save(req);
    return res.json(resp);
  } catch (error) {
    return res.json(error);
  }
}

const patch = async (req: express.Request, res: express.Response) => {
  try {
    const resp = await addressService.patch(req);
    if (!resp.success) return res.status(400).json({ message: 'Request failed'})
    return res.json({...resp, message: 'Updated'});
  } catch (error) {
    return res.json(error);
  }
}
const del = async (req: express.Request, res: express.Response) => {
  try {
    return res.json(addressService.del(req));
  } catch (error) {
    return res.json(error);
  }
}

export default {
  list,
  get,
  save,
  patch,
  del
}