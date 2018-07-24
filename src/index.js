import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from "./containers/App";
import { Provider } from 'react-redux';
import { store } from './helpers';
console.log(store.getState());

ReactDOM.render((
        <Provider store={store}>
                <App/>
        </Provider>),
    document.getElementById('root'),
    function () {
        $('#menuToggle').click(function () {
            $('body').toggleClass('open');
        });

        $('.search-trigger').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').addClass('open');
        });

        $('.search-close').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').removeClass('open');
        });
    }
);
