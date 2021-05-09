const multer = require("multer");
const path = require("path");

let tools = {
  multer() {
    //文件上传相关配置
    var storage = multer.diskStorage({
      //配置上传的目录，必须存在
      destination: function (req, file, cb) {
        cb(null, "./src/assets/images");
      },
      //修改上传后文件名
      filename: function (req, file, cb) {
        //获取后缀名
        const mimetype = file.mimetype.split("/");
        const fileType = mimetype[1];

        // let extname = path.extname(file.originalname);
        const filename = file.originalname + "-" + Date.now() + "." + fileType;
        req.filepath = "../../assets/images/" + filename;
        //生成文件名
        cb(null, filename);
      },
    });

    var upload = multer({ storage: storage });
    return upload;
  },

  md5() {},
};

module.exports = tools;
