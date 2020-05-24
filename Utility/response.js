exports.createResponse = (
  status,
  msg,
  data,
  validation
) => {
  return {
    status: status,
    msg: msg,
    data: data,
    validation: validation
  };
};
