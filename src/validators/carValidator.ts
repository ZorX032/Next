import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/)
        .min(1)
        .max(20)
        .required(),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .required(),
    year: Joi.number()
        .min(1990)
        .max(2024)
        .required(),
});