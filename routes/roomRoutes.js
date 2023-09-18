const express = require("express");
const {
  getAllRoom,
  addRoomController
} = require("../controllers/roomCtrl");

//router onject
const router = express.Router();

//REGISTER || POST
router.post("/addRoom", addRoomController);


//GET ALL DOC
router.get("/getAllRoom", getAllRoom);

module.exports = router;
