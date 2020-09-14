import ApiClient from './client'

const endpoint = 'checklist'

const getChecklist = () => ApiClient.get(endpoint);
const getChecklistById = (id) => ApiClient.get(`${endpoint}/GetById/${id}`);
const getChecklistByUserId = (userId) => ApiClient.get(`${endpoint}/GetByUserId/${userId}`);
const createChecklist = (checklist) => ApiClient.post(endpoint, JSON.stringify(checklist));
const updateChecklist = (checklist) => ApiClient.put(endpoint, JSON.stringify(checklist));


export default {
    getChecklist,
    getChecklistById,
    getChecklistByUserId,
    createChecklist,
    updateChecklist
};