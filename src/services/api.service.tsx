// import {IUser} from "@/models/IUser";
//
// export const getAllUsers = async (): Promise<IUser[]> =>{
//     const users = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
//
//
//     return users;
// }

import {ICar} from "@/models/ICar";

type createCarType = {
    brand: string;
    price: number;
    year: number;
}

export const getAllCars = async (): Promise<ICar[]> =>{
    const cars = await fetch('http://185.69.152.209/carsAPI/v1/cars')
        .then(value => value.json());
    return cars;
}
export const createCar = async ({ brand, price, year }: createCarType): Promise<ICar> => {
    const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ brand, price, year }),
    });

    console.log(response);
    return response.json();
};