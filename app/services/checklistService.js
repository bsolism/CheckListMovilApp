import ApiClient from "./client";

const endpoint = "/checklist";

const getChecklist = () => ApiClient.get(endpoint);
const getChecklistById = (id) => ApiClient.get(`${endpoint}/GetById/${id}`);
const getChecklistByUserId = (userId) =>
  ApiClient.get(`${endpoint}/GetByUserId/${userId}`);
const createChecklist = (checklist) =>
  ApiClient.post(endpoint, JSON.stringify(checklist));
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

export default {
  getChecklist,
  getChecklistById,
  getChecklistByUserId,
  createChecklist,
  updateChecklist,
  postChecklist,
};
