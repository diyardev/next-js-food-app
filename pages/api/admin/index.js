import cookie from "cookie";
import bcrypt from "bcrypt";
import User from "../../../models/User";

const Handler = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    const isMatch = user ? await bcrypt.compare(password, user?.password) : false;
    if (isMatch && user.role == "admin") {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "Success",user:user });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  }
  if (method === "PUT") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", process.env.ADMIN_TOKEN, {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({ message: "Success" });
  }
};

export default Handler;
