"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const category_routes_1 = require("../modules/category/category.routes");
const book_routes_1 = require("../modules/book/book.routes");
const order_routes_1 = require("../modules/order/order.routes");
const router = express_1.default.Router();
//
const moduleRoutes = [
    { path: "/auth", route: auth_route_1.AuthRoutes },
    { path: "/users", route: user_route_1.UserRoutes },
    { path: "/categories", route: category_routes_1.CategoryRoutes },
    { path: "/books", route: book_routes_1.BookRoutes },
    { path: "/orders", route: order_routes_1.OrderRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
