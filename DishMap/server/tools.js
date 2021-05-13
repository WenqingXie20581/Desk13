const multer = require("multer");
const path = require("path");

let tools = {
  multer() {
    //文件上传相关配置
    var storage = multer.diskStorage({
      //配置上传的目录，必须存在
      destination: function (req, file, cb) {
        // cb(null, "./src/assets/images");

        // 最终改成这个，不然需要重新ng build才能加载出来图片。但因为gitignore了dist目录，因此先用上面这个目录
        cb(null, "./dist/DishMap/assets/images"); 
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
