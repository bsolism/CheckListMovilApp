import ApiClient from "./client";

const endpoint = "/checklist";

const getChecklist = () => ApiClient.get(endpoint);
const getChecklistById = (id) => {
  console.log("Este Id");
  console.log(id);
  return ApiClient.get(`${endpoint}/GetById/${id}`);
};
const getListings = (id) => ApiClient.get(endpoint + "/" + "GetById/" + id);

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

export const postChecklist = (listing, onUploadProgress) => {
  const data = {
    name: listing.name,
    description: listing.description,
    ChecklistCategoryId: listing.ChecklistCategoryId.value,
    budget: parseFloat(listing.budget),
  };
  return ApiClient.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
export const postItem = (listing, onUploadProgress) => {
  return ApiClient.post(`${endpoint}/AddItem`, listing, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getChecklist,
  getChecklistById,
  getChecklistByUserId,
  createChecklist,
  updateChecklist,
  postChecklist,
  postItem,
  getListings,
};
