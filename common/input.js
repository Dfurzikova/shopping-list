var input = {
    init: function () {
        this._domElem = document.querySelector('.input_field');
        this._bindEvents();
    },

    _bindEvents: function () {
        this._domElem.addEventListener('input', this._onInput.bind(this));
        this._domElem.addEventListener('keydown', this._onKeyDown.bind(this));
    },

    _onInput: function () {
        var value = this._domElem.value;

        if (value) {
            hint.showHint(value);
        }
    },

    _onKeyDown: function (e) {
        var value = this._domElem.value;
        if (e.keyCode === 13 && value != '') {

            app.addToDictionary(value);
            list.addNewItem(value);
            app.save();

            this._domElem.value = '';
        }
    },

    clear: function(){
        this._domElem.value = '';
    }
};
