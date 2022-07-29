import { a as api } from "../../../_app/immutable/chunks/_api-59a032bd.js";
const get = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`);
  if (response.status === 404) {
    return { body: [] };
  }
  return response;
};
const post = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`, {
    text: request.body.get("text")
  });
  return response;
};
export {
  get,
  post
};
