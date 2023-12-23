import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {getAllUsersZodSchema, getOrDeleteUserZodSchema, updateUserZodSchema} from "./user.validation";
import {deleteUser, getAllUsers, getUserById, getUserProfile, makeAdmin, updateUser} from "./user.controller";

const router = Router();

router.get("/", validateRequest(getAllUsersZodSchema), auth(ENUM_USER_ROLE.ADMIN), getAllUsers);

router
  .route("/:id")
  .get(
    validateRequest(getOrDeleteUserZodSchema),
    // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.PERFORMER),
    getUserById
  )
  .patch(
    validateRequest(updateUserZodSchema),
    // auth(ENUM_USER_ROLE.ADMIN),
    updateUser
  )
  .delete(
    validateRequest(getOrDeleteUserZodSchema),
    //  auth(ENUM_USER_ROLE.ADMIN),
    deleteUser
  );

router.patch("/make-admin/:id", validateRequest(updateUserZodSchema), auth(ENUM_USER_ROLE.ADMIN), makeAdmin);
router.get(
  "/profile",
  validateRequest(getAllUsersZodSchema),
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.PERFORMER),
  getUserProfile
);
export const UserRoutes = router;
