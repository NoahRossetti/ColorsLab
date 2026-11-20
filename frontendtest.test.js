/**
 * @jest-environment jsdom
 */

describe('COP 4331 LAMP Stack Demo - Color Page UI', () => {
  beforeEach(() => {
    // 1. Load your HTML structure into Jest's simulated DOM
    document.body.innerHTML = `
      <h1 id="title">COP 4331 LAMP Stack Demo</h1>
      <div id="loggedInDiv">
        <span id="userName"></span><br />
        <button type="button" id="logoutButton" class="buttons" onclick="doLogout();"> Log Out </button>
      </div>
      <div id="accessUIDiv">
        <br />
        <input type="text" id="searchText" placeholder="Color To Search For"/>
        <button type="button" id="search Color Button" class="button's" onclick="searchColor();"> Search Color </button><br />
        <span id="colorSearchResult"></span>
        <p id="colorList"> </p><br /><br />
        <input type="text" id="colorText" placeholder="Color To Add">
        <button type="button" id="addColorButton" class="button's" onclick="addColor();"> Add Color </button><br />
        <span id="colorAddResult"></span>
      </div>
    `;

    // 2. Mock the global functions normally provided by js/code.js
    window.readCookie = jest.fn();
    window.doLogout = jest.fn();
    window.searchColor = jest.fn();
    window.addColor = jest.fn();
  });

  test('renders all required input fields and buttons', () => {
    expect(document.getElementById('title').textContent).toBe('COP 4331 LAMP Stack Demo');
    expect(document.getElementById('searchText')).not.toBeNull();
    expect(document.getElementById('colorText')).not.toBeNull();
    expect(document.getElementById('logoutButton')).not.toBeNull();
    expect(document.getElementById('search Color Button')).not.toBeNull();
    expect(document.getElementById('addColorButton')).not.toBeNull();
  });

  test('triggers searchColor() when Search Color button is clicked', () => {
    const searchInput = document.getElementById('searchText');
    const searchBtn = document.getElementById('search Color Button');

    searchInput.value = 'Blue';
    searchBtn.click();

    expect(window.searchColor).toHaveBeenCalledTimes(1);
  });

  test('triggers addColor() when Add Color button is clicked', () => {
    const colorInput = document.getElementById('colorText');
    const addBtn = document.getElementById('addColorButton');

    colorInput.value = 'Purple';
    addBtn.click();

    expect(window.addColor).toHaveBeenCalledTimes(1);
  });

  test('triggers doLogout() when Log Out button is clicked', () => {
    const logoutBtn = document.getElementById('logoutButton');
    logoutBtn.click();

    expect(window.doLogout).toHaveBeenCalledTimes(1);
  });
});
