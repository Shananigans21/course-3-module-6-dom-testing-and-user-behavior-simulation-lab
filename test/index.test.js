/**
 * @jest-environment jsdom
 */

const {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
  initializeEventListeners, // Make sure the function is exported from index.js
} = require('../index');

describe('DOM Testing and User Behavior Simulation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="dynamic-content"></div>
      <div id="error-message" class="hidden"></div>
      <form id="user-form">
        <input type="text" id="user-input" />
        <button type="submit">Submit</button>
      </form>
      <button id="simulate-click">Simulate Click</button>
    `;

    // Initialize event listeners for the test
    initializeEventListeners();
  });

  it('should add an element to the DOM', () => {
    addElementToDOM('dynamic-content', 'Hello, World!');
    const dynamicContent = document.getElementById('dynamic-content');
    expect(dynamicContent.textContent).toContain('Hello, World!');
  });

  it('should remove an element from the DOM', () => {
    const element = document.createElement('div');
    element.id = 'test-element';
    document.body.appendChild(element);

    removeElementFromDOM('test-element');
    expect(document.getElementById('test-element')).toBeNull();
  });

  it('should simulate a button click and update the DOM', () => {
    const button = document.getElementById('simulate-click');
    const input = document.getElementById('user-input');
    const dynamicContent = document.getElementById('dynamic-content');

    // Simulate a user input and button click
    input.value = 'Test Input';
    button.click();

    expect(dynamicContent.textContent).toContain('User Input: Test Input');
  });

  it('should handle form submission and update the DOM', () => {
    const input = document.getElementById('user-input');
    input.value = 'Test Input';

    handleFormSubmit('user-form', 'dynamic-content');
    const dynamicContent = document.getElementById('dynamic-content');
    expect(dynamicContent.textContent).toContain('Test Input');
  });

  it('should display an error message for empty input', () => {
    handleFormSubmit('user-form', 'dynamic-content');
    const errorMessage = document.getElementById('error-message');
    expect(errorMessage.textContent).toBe('Input cannot be empty');
    expect(errorMessage.classList.contains('hidden')).toBe(false);
  });
});
