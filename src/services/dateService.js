const BASE_URL = "https://back-travel.onrender.com/api/dates";

export const getDates = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const getDateById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};

export const createDate = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });

  return await res.json();
};

export const updateDate = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: formData,
  });

  return await res.json();
};

export const deleteDate = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return await res.json();
};
