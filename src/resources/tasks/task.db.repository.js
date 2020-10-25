const Task = require('./task.model');

const getAll = async boardId => {
  return Task.find({ boardId });
};

const get = async (boardId, id) => {
  return Task.findOne({ boardId, _id: id });
};

const create = async task => {
  return Task.create(task);
};

const update = async (boardId, id, task) => {
  return Task.findOneAndUpdate(
    { _id: id, boardId },
    {
      title: task.title,
      order: task.order,
      description: task.description,
      userId: task.userId,
      columnId: task.columnId
    }
  );
};

const remove = async (boardId, id) => {
  return await Task.deleteOne({ boardId, _id: id });
};

const removeAll = async boardId => {
  return Task.deleteMany({ boardId });
};

const resetBoardsId = async userId => {
  return Task.updateMany({ userId }, { userId: null });
};

module.exports = {
  getAll,
  get,
  create,
  remove,
  removeAll,
  update,
  resetBoardsId
};
