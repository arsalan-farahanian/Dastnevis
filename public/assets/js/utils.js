exports.submitForm = (url, formData) => {
  console.log(formData);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then(console.log)
    .catch(console.log);
};
