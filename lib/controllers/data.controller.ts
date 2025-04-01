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
        this.router.get(this.path + '/get', this.getall);
    }

    private getall = async (request: Request, response: Response) => {
        let output = await this.dataService.getAll();
        console.log(output)
        response.send(output);
    }

}




export default DataController;