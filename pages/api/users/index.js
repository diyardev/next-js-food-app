import User from "../../../models/User";
import ConnectDB from "../../../util/dbConnect";

const Handler = async (req, res) => {
    await ConnectDB();
    const {method} = req;

    if (method === "GET") {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
        }
    }

    if (method === "POST") {
        try {
            const newUser = await User.create(req.body)
            res.status(200).json(newUser)
        } catch (error) {
            console.log(error);
        }
    }
}



export default Handler;