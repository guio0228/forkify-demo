import icons from 'url:../../img/icons.svg'; //圖檔+URL
export default class View {
  _data;
  /**
   *
   * @param {Obj|Obj[]} data the data be render recipe
   * @param {boolean} [render=true] IF faluse create markup string to DOM
   * @returns
   */
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();

    //開始後 recipeContainer作为父元素的子元素添加到 DOM，在此前先清空
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = ` <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // 作为父元素的子元素添加到 DOM
  }
  renderError(message = this._errorMessage) {
    const markup = ` <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // 作为父元素的子元素添加到 DOM
  }
  renderMessage(message = this._message) {
    const markup = ` <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // 作为父元素的子元素添加到 DOM
  }
}
