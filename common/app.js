var app = {
    _dictionary: ['киви', 'банан', 'абрикос'],

    init: function () {
        document.addEventListener('DOMContentLoaded', this._onContentLoaded.bind(this));
    },

    _onContentLoaded: function () {
        input.init();
        list.init();
        hint.init();
        this._restore();
    },

    _restore: function () {
        var lists = JSON.parse(localStorage.getItem('lists'));

        if (lists) {
            lists.relevant.forEach(function (v) {
                list.addNewItem(v);
            });

            lists.deleted.forEach(function (v) {
                list.addNewItem(v, true);
            });
        }

        this._dictionary = JSON.parse(localStorage.getItem('dictionary')) || this._dictionary;
    },

    save: function () {
        localStorage.setItem('dictionary', JSON.stringify(this._dictionary));
        localStorage.setItem('lists', JSON.stringify(list.getLists()));
    },

    getDictionary: function () {
        return this._dictionary;
    },

    addToDictionary: function (name) {
        if (this._dictionary.indexOf(name) === -1) {
            this._dictionary.push(name);
        }
    }
};

app.init();
