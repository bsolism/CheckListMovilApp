import ApiClient from "./client";

const endpoint = "/checklist";

const getChecklist = () => ApiClient.get(endpoint);
const getChecklistById = (id) => ApiClient.get(`${endpoint}/GetById/${id}`);
const getChecklistByUserId = (userId) =>
  ApiClient.get(`${endpoint}/GetByUserId/${userId}`);
const createChecklist = (checklist) =>
  ApiClient.post(endpoint, JSON.stringify(checklist));
const addItem = (checklist) =>
  ApiClient.post(`${endpoint}/AddItem`, JSON.stringify(item));
const addItemRange = (checklist) =>
  ApiClient.post(`${endpoint}/AddItemRange`, JSON.stringify(items));
const updateChecklist = (checklist) =>
  ApiClient.put(endpoint, JSON.stringify(checklist));

export default {
  getChecklist,
  getChecklistById,
  getChecklistByUserId,
  createChecklist,
  updateChecklist,
};
