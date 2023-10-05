// Function to generate a name tag
function generateNameTag(name) {
  const tagContainer = document.getElementById("tagContainer");
  const tag = document.createElement("div");
  tag.className = "name-tag";
  tag.innerHTML = `${name} <span class="delete-icon">&#10006;</span>`;
  
  // Add a random background color
  const randomColor = getRandomColor();
  tag.style.backgroundColor = randomColor;

  // Add click event to delete the tag
  const deleteIcon = tag.querySelector(".delete-icon");
  deleteIcon.addEventListener("click", function() {
      tagContainer.removeChild(tag);
  });

  tagContainer.appendChild(tag);
}

// Function to generate a random background color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for the Generate Name Tag button
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name !== "") {
      generateNameTag(name);
      nameInput.value = "";
  }
});

// Event listener for the Clear All button
const clearAllButton = document.getElementById("clearAllButton");
clearAllButton.addEventListener("click", function() {
  const tagContainer = document.getElementById("tagContainer");
  tagContainer.innerHTML = "";
});
