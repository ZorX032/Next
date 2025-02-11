'use server';


import {createCar} from "@/services/api.service";
import {ICar} from "@/models/ICar";

// type FormPropsType = {
//     brand: string;
//     price: number;
//     year: number;
// };

export const createNewCar = async (formData:ICar) =>{



    await createCar(formData);
}