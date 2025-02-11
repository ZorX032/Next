'use client'
import Form from "next/form";

import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {createNewCar} from "@/server-actions/serverActions";
import {useForm} from "react-hook-form";

type FormPropsType = {
    brand: string;
    price: number;
    year: number;
};

export const CreateCarComponent = ()=>{

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<FormPropsType>({
        mode: "onChange",
        resolver: joiResolver(carValidator),
    });

    return (
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Create New Car</h1>

            <form className="w-full" onSubmit={handleSubmit(createNewCar)}>
                <div className="mb-4">
                    <input
                        type="text"
                        {...register("brand")}
                        placeholder="Brand"
                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>}
                </div>

                <div className="mb-4">
                    <input
                        type="number"
                        {...register("price")}
                        placeholder="Price"
                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>

                <div className="mb-4">
                    <input
                        type="number"
                        {...register("year")}
                        placeholder="Year"
                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full p-3 text-white font-bold rounded-lg transition-all ${
                        isValid ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}