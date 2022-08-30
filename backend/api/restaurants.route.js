import express from "express";
import RestaurantsCtrl from "../api/restaurants.controller.js";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

export default router; 