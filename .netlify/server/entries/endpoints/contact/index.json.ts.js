const post = async (request) => {
  console.log(request.body);
  return { ok: true };
};
export {
  post
};
