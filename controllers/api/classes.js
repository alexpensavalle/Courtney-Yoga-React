const Class = require('../../models/yogaClass');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
  };

  async function index(req, res) {
    const yogaClasses = await Class.find({});
    res.status(200).json(yogaClasses);
  }

  async function show(req, res) {
    const yogaClass = await Class.findById(req.params.id);
    res.status(200).json(yogaClass);
  }

  async function create(req, res) {
    const yogaClass = await Class.create(req.body);
    res.status(201).json(yogaClass);
  }

  async function deleteOne(req, res) {
    const deletedClass = await Class.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedClass);
  }
  
  async function update(req, res) {
    const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedClass);
  }