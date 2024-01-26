import User from "../../../models/User";
import ConnectDB from "../../../util/dbConnect";
import bcrypt from "bcrypt";

const Handler = async (req, res) => {
  await ConnectDB();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "PUT") {
    try {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(8);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Handler;
