import User from "../../../../models/User";
import ConnectDB from "../../../../util/dbConnect";

const Handler = async (req, res) => {
    await ConnectDB();
    const {method, query : {email}} = req;

    if (method === "GET") {
        try {
            const  user = await User.findOne({email : email})
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
        }
    }
};



export default Handler;