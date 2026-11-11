const ministerModel = require("../models/minister");

exports.getAllMinisters = async (req, res) => {
    const ministre = await ministerModel.find();
    res.json(ministre);
}

exports.getMinisterById = async (req, res) => {
    const minister = await ministerModel.findById(req.params.id);
    if (!minister) {
    return res.status(404).json({ error: "minister ikke fundet"})
    }
    res.json(minister);
};

exports.addMinister = async (req, res) => {
    const minister = new ministerModel(req.body);
    minister.opdateret = Date.now();
    await minister.save();
    res.status(201).json(minister);
}
exports.updateMinisterById = async (req, res) => {
    const minister = await ministerModel.findByIdAndUpdate(req.params.id,{ ...req.body, opdateret: Date.now()}, {returnDocument: 'after'});
    if (!minister) {
        return res.status(404).json({ error: "minister ikke fundet"})
    }
    res.json(minister);
};

exports.deleteMinister = async (req, res) => {
    const minister = await ministerModel.findByIdAndDelete(req.params.id);
    if (!minister) {
        return res.status(404).json({ error: "minister ikke fundet"})
    }
    res.json({message: `minister blev fjernet`});
};


