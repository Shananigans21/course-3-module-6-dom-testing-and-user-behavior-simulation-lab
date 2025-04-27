// index.js

function addElementToDOM(elementId, content) {
    const element = document.getElementById(elementId);
    const newElement = document.createElement('p');
    newElement.textContent = content;
    element.appendChild(newElement);
  }
  
  function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }
  }
  
  function simulateClick(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
      const newElement = document.createElement('p');
      newElement.textContent = content;
      element.appendChild(newElement);
    }
  }
  
  function handleFormSubmit(formId, contentId) {
    const form = document.getElementById(formId);
    const input = document.getElementById('user-input');
    const dynamicContent = document.getElementById(contentId);
  
    if (input.value.trim() !== "") {
      const newElement = document.createElement('p');
      newElement.textContent = `User Input: ${input.value}`;
      dynamicContent.appendChild(newElement);
      input.value = '';  // Clear the input after submit
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Input cannot be empty';
      errorMessage.classList.remove('hidden');
    }
  }
  
  function initializeEventListeners() {
    document.getElementById('simulate-click').addEventListener('click', () => {
      const userInput = document.getElementById('user-input').value;
      const dynamicContent = document.getElementById('dynamic-content');
      
      // Check if user input is not empty
      if (userInput.trim() !== "") {
        const newContent = document.createElement('p');
        newContent.textContent = `User Input: ${userInput}`;
        dynamicContent.appendChild(newContent);
        
        // Clear input field after adding
        document.getElementById('user-input').value = '';
      } else {
        // Show error message if input is empty
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "Please enter some text.";
        errorMessage.classList.remove('hidden');
      }
    });
  }
  
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    initializeEventListeners,
  };
  