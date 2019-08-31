import { BaseResourceModel } from '../shared/resource/base-resource.model';

export class Car extends BaseResourceModel {

    constructor(
        public id?: number,
        public name?: string,
        public description?: string) {
        super();
    }

    static fromJson(jsonData: any): Car {
        return Object.assign(new Car(), jsonData);
    }
}
