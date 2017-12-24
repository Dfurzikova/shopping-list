var list = {
    init: function () {
        this._relevantDomElem = document.querySelector('.relevant_list');
        this._deletedDomElem = document.querySelector('.deleted_list');
        this._bindEvents();
    },

    _bindEvents: function () {
        var all_list = this._relevantDomElem;
        var deleted_list = this._deletedDomElem;

        all_list.addEventListener('click', this._onClick.bind(this));
        deleted_list.addEventListener('click', this._onClick.bind(this));
    },

    /**
     * Обработчик кликов на элементах списка
     *
     * @param {Object} event - событие
     * @private
     */
    _onClick: function (event) {
        var remove;

        if (event.target.tagName === 'IMG') {
            remove = event.target.parentNode;

            remove.parentNode.removeChild(remove);
        }

        if (event.target.tagName === 'LI') {
            this._moveListItem(event.target);
        }

        app.save();
    },

    /**
     * Перемещает выбранный элемент в другой список
     *
     * @param {DOMElement} elem - элемент списка
     * @private
     */
    _moveListItem: function (elem) {
        var toList = elem.parentNode === this._relevantDomElem ? this._deletedDomElem : this._relevantDomElem;

        toList.appendChild(elem);
    },

    /**
     * Добавляет новый элемент в список
     *
     * @param {String} name - содержимое элемента
     * @param {Boolean} deleted - этот элемент нужно добавить в список удалённых
     * @private
     */
    addNewItem: function (name, deleted) {
        var all_list = deleted ? this._deletedDomElem : this._relevantDomElem;
        var newLi;
        var removeButton;
       // var imageButton;

        newLi = document.createElement('li');

        newLi.textContent = name;
        all_list.insertBefore(newLi, all_list.children[0]);


        removeButton = document.createElement('img');
        removeButton.className = "remove-button";
        removeButton.src = '/remove-button.png';
        newLi.appendChild(removeButton);
    },

    getLists: function () {
        var result = {
            relevant: [],
            deleted: []
        };

        this._relevantDomElem.querySelectorAll('li').forEach(function (v) {
            result.relevant.unshift(v.innerText);
        });

        this._deletedDomElem.querySelectorAll('li').forEach(function (v) {
            result.deleted.unshift(v.innerText);
        });

        return result;
    }
};
