var hint = {
    init: function () {
        this._hintList = document.querySelector('.hint_list');
    },

    showHint: function (text) {
        this.clearHint();
        this._searchHint(text);
    },

    _searchHint: function (text) {
        var _this = this;

        app.getDictionary().forEach(function (v) {
            if (v.indexOf(text) === 0) {
                _this._createOneHint(v);
            }
        })
    },

    

    _createOneHint: function (value) {
        var newHint = document.createElement('li');
        var _this = this;

        newHint.textContent = value;

        newHint.addEventListener('mousedown', function () {
            _this.noClear = true;
        });

        newHint.addEventListener('click', function () {
            list.addNewItem(value);
            app.save();

            input.clear();

            _this.noClear = false;
            _this.clearHint();
        });

        this._hintList.appendChild(newHint);
        
        

       // console.log(value, 'value - значение подсказки');
        
    },

    clearHint: function () {
        if (this.noClear) {
            return;
        }

        this._hintList.innerHTML = '';
    }
};
