import User from "../../../models/User";
import ConnectDB from "../../../util/dbConnect";
import bcrypt from "bcrypt";

const Handler = async (req, res) => {
  await ConnectDB();
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  try {
    const newUser = await new User(body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    newUser.username = newUser.email.match(/[^@]+/)[0];
    await newUser.save();
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error);
  }
};

export default Handler;
