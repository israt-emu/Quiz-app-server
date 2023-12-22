import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {createBook, deleteBook, getAllBooks, getBookByCategory, getSingleBook, updateBook} from "./book.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createBookZodSchema, deleteBookZodSchema, updateCategoryZodSchema} from "./book.validation";

const router = Router();

router.get("/", getAllBooks);

router.post("/create-book", validateRequest(createBookZodSchema), auth(ENUM_USER_ROLE.ADMIN), createBook);

router.route("/:id").get(getSingleBook).patch(validateRequest(updateCategoryZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateBook).delete(validateRequest(deleteBookZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteBook);

router.get("/:categoryId/category", getBookByCategory);

export const BookRoutes = router;
