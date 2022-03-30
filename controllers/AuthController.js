import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError} from "../errors/index.js"

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }
  
  const EmailAlreadyExist = await User.findOne({email})
  if (EmailAlreadyExist) {
    throw new BadRequestError('email already in use!')
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
