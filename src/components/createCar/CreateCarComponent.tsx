
import Form from "next/form";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {createNewCar} from "@/server-actions/serverActions";

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
        <div>
            <h1>Create New Car</h1>
            <Form action={handleSubmit(createNewCar)}>
                <input type="text" {...register("brand")} placeholder="brand"/>
                {errors.brand && <p>{errors.brand.message}</p>}

                <input type="number" {...register("price")} placeholder="price"/>
                {errors.price && <p>{errors.price.message}</p>}

                <input type="number" {...register("year")} placeholder="year"/>
                {errors.year && <p>{errors.year.message}</p>}

                <button type="submit" disabled={!isValid}>Submit</button>
            </Form>
        </div>
    )
}