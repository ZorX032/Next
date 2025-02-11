'use server';


import {createCar} from "@/services/api.service";

type FormPropsType = {
    brand: string;
    price: number;
    year: number;
};

export const createNewCar = async (formData:FormPropsType) =>{



    await createCar(formData);
}