// console.log("hello")
const displayContainer = document.querySelector("#display-container"); {
  /* <select id="lego__color">
      <option value="1">Red</option>
      <option value="2">Green</option>
      <option value="3">Yellow</option>
      <option value="4">Blue</option>
      <option value="5">Orange</option>
      <option value="6">Black</option>
  </select> */
}

let formHtml = (colorOptions) => {
  return `<fieldset>
<label for="lego__creator">Creator:</label>
<input id="lego__creator" name="lego__creator" type="text" autofocus />
</fieldset>
<fieldset>
<label for="lego__color">Color:</label>
${colorOptions}
</fieldset>
<fieldset>
<label for="lego__shape">Shape:</label>
<input id="lego__shape" name="lego__shape" type="text" autofocus />
</fieldset>
<fieldset>
<label for="lego__creation">Creation:</label>
<input id="lego__creation" name="lego__creation" type="text" autofocus />
</fieldset>

<button class="btn lego__save">Save Lego Creation</button>`;
}

const buildingAndAppending = () => {

  getColor().then(colorArray => {
    console.log(colorArray)
    let buildColorHtml = `<select id="lego__colors">`
    colorArray.forEach(colors => {
      buildColorHtml += `<option value=${colors.id}>${colors.color}</option>`
    })
    buildColorHtml += "</select>"
    return buildColorHtml
  }).then(colorHtml => {
    displayContainer.innerHTML = formHtml(colorHtml)
    document.querySelector(".lego__save").addEventListener("click", saveLego)
  })
}

buildingAndAppending();

const saveLego = () => {
  const creatorToSave = document.querySelector("#lego__creator").value;
  const colorToSave = document.querySelector("#lego__colors").value;
  const shapeToSave = document.querySelector("#lego__shape").value;
  const creationToSave = document.querySelector("#lego__creation").value;


  const legoToSave = {
    creator: creatorToSave,
    color: parseInt(colorToSave),
    shape: shapeToSave,
    creation: creationToSave
  };
  postLego(legoToSave);
}
// Factory function to create a lego brick
const createLegoBrick = (creator, color, shape, creation) => {
  return {
    creator: creator,
    color: color,
    shape: shape,
    creation: creation
  }
}


// Some starter code


// Once you have collected all the values, build your data structure