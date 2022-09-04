function getChefs(resolve, reject) {
  fetch("http://localhost:2001/chefs")
    .then((res) => res.json())
    .then(resolve, reject);
}

function addChef(chef, resolve, reject) {
  const recipeUrl = "http://localhost:2001/chefs";
  const postBody = chef;

  const requestMetadata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  };

  fetch(recipeUrl, requestMetadata)
    .then((res) => {
      const json = res.json();
      return json;
    })
    .then(resolve, reject);
}

// ........MODIFY........
function modifyChef(chef) {
  const recipeUrl = `http://localhost:2001/update`;
  const postBody = chef;

  const requestMetadata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  };

  fetch(recipeUrl, requestMetadata).then((res) => {
    const json = res.json();
    return json;
  });
}

// ........DELETE........
function deleteChef(chef, resolve, reject) {
  let recipeUrl = `http://localhost:2001/delete`;
  const postBody = chef;
  const requestMetadata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  };

  fetch(recipeUrl, requestMetadata).then((res) => {
    this.fetchData().then(resolve, reject);
  });

  window.location.reload(false);
}

export { getChefs, addChef, modifyChef, deleteChef };
