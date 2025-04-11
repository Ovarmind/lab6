import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import DataService from '../modules/services/data.service';
import { IData } from '../modules/models/data.model';


class DataController implements Controller {
    public path = '/api/data';
    public router = Router();
    private dataService = new DataService();


    constructor() {
        this.initializeRoutes();
    }


    private initializeRoutes() {
        this.router.get(this.path + '/get', this.getAll);
        this.router.post(this.path + '/post', this.postItems);
        this.router.delete(this.path + '/delete/:id', this.deleteItem);
    }

    private getAll = async (request: Request, response: Response) => {
        let output = await this.dataService.getAll();
        console.log(output)
        response.send(output);
    }

    private postItems = async (request: Request, response: Response) => {
            const output = await this.dataService.post(request.body);
            response.send(output);
    };

    private deleteItem = async (request: Request, response: Response) => {
            const output = await this.dataService.delete(request.params.id);
            response.send(output);
    }

}




export default DataController;