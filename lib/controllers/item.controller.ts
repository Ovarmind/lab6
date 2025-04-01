import Controller from '../interfaces/controller.interface';
import {Request, Response, NextFunction, Router} from 'express';
import path from 'path';

class ItemController implements Controller{
    public path = '/api/items';
    public router = Router();
    public array: Number[] = [1,2,3,4,5,6,7,8];

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, this.postItem);
        this.router.get(this.path, this.getItems);
        this.router.get(this.path + '/:i', this.getItem);
        this.router.put(this.path + '/:i',this.putItem);
        this.router.delete(this.path + '/:i',this.deleteItem);
    }

    private postItem = async (request: Request, response: Response) => {
        const numer = Number(request.query.number);
        this.array.push(numer)
        response.send(this.array);
    }
    private getItems = async (request: Request, response: Response) => {
        response.send(this.array);
    }
    private getItem = async (request: Request, response: Response) => {
        const id = Number(request.params.id);
        response.send(this.array[id]);
    }
    private putItem = async (request: Request, response: Response) => {
        const numer = Number(request.query.number);
        const id = Number(request.params.id);
        console.log(numer)
        this.array[id] = numer;
        response.send(this.array);
    }
    private deleteItem = async (request: Request, response: Response) => {
        const id = Number(request.params.id);
        this.array.splice(id, 1);
        response.send(this.array);
    }
}

export default ItemController;