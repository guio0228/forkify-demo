import icons from 'url:../../img/icons.svg'; //圖檔+URL
import View from './View.js';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'success uploaded!';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', () => {
      this._overlay.classList.toggle('hidden');
      this._window.classList.toggle('hidden');
    });
  }
  _addHandlerHideWindow() {
    [this._btnClose, this._overlay].forEach(el => {
      el.addEventListener('click', () => {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
      });
    });
  }
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
