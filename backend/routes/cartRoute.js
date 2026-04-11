import mongoose from "mongoose";
import authUser from "../middleware/authUser.js"
import { updateCart } from "../controllers/cartController.js";

const cartRouter = mongoose.cartRouter();

cartRouter.post('/update', authUser, updateCart);
export default cartRouter;