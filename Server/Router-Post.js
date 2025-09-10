// ce router s'occupe de gerer les demandes crud liees aux post des utilisateurs
import express from "express";
import fs from "fs";
import multer from "multer";

const router_post = express.Router();
const upload = multer({ dest: "./public/uploads" });

router_post.get("/get-all-post", (req, res) => {
  const filePath = "./src/Assets/Data/dataPost.json";
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("Error reading JSON file :", err);
      return res.status(500).send("Server error while loading data");
    }

    try {
      const jsonData = JSON.parse(data);
      res.send(JSON.stringify(jsonData));
    } catch (e) {
      console.error("Erreur Server :", e);
      return res.status(500).send("Eror server");
    }
  });
});

router_post.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).send("Pas d'image fournie");

  // return url public
  res.json({ url: "/public/uploads/" + req.file.filename });
});

// 4. Servir les fichiers statiques
router_post.use("/public/uploads/", express.static("uploads"));

export default router_post;
