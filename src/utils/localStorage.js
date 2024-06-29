// GetData from LocalStorage.
export const getDataFromLocalStorage = () => {
  const lsData = localStorage.getItem("id");
  if (lsData) {
    return JSON.parse(lsData);
  } else {
    return [];
  }
};

// SetDataToLocalStorage.
export const setDataToLocalStorage = (id) => {
  const data = getDataFromLocalStorage();
  if (!data.includes(id)) {
    data.push(id);
  }
  localStorage.setItem("id", JSON.stringify(data));
};

// RemoveItem From LocalStorage.
export const removeItemFromLocalStorage = (id) => {
  const lsData = getDataFromLocalStorage();
  const newArr = lsData.filter((item) => item !== id);
  localStorage.removeItem("id");
  localStorage.setItem("id", JSON.stringify(newArr));
};
