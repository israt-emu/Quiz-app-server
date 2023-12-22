import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {createOrderZodSchema, getOrdersZodSchema} from "./order.validation";
import {createOrder, getAllORders, getSingleOrder} from "./order.controller";

const router = Router();

router.get("/", validateRequest(getOrdersZodSchema), auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), getAllORders);

router.post("/create-order", validateRequest(createOrderZodSchema), auth(ENUM_USER_ROLE.CUSTOMER), createOrder);

router.get("/:id", validateRequest(getOrdersZodSchema), auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), getSingleOrder);

export const OrderRoutes = router;
