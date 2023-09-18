const roomModel = require("../models/roomsModel");

//register callback
const addRoomController = async (req, res) => {
  try {
    const exisitingUser = await roomModel.findOne({ roomNumber: req.body.roomNumber });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "Room Already Exist", success: false });
    }
    const newUser = new roomModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};



//GET ALL DOC
const getAllRoom = async (req, res) => {
  try {
    const doctors = await roomModel.find();
    res.status(200).send({
      success: true,
      message: "Room Lists Fetched Successfully",
      innerData: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Fetching Room",
    });
  }
};

module.exports = {
  getAllRoom,
  addRoomController
};
