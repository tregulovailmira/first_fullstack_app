module.exports.errorHandler = (error, req, res, next) => {
  if (res.headersSent) { // проверка, был ли уже ответ от сервера
    return;
  }
  res.status(500).send({
    data: null,
    errors: [{ title: error.message ?? 'Internal server error' }],
  });
};
