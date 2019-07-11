import * as React from "react";

import * as ReactDOM from "react-dom";

import { FoodModel, IAppState } from "./Models";

export class MenuBox extends React.Component<any, IAppState> {
    constructor(state) {
        super(state);
        this.state = { items: null, myOrder: null, showPopup: false, userId: 0, orderPlaced: false };
        this.loadMenusFromServer();
    }

    loadMenusFromServer() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/data/GetMenuList/', true);
        xhr.onload = function () {
            var dataitems = JSON.parse(xhr.responseText);
            var tmp: IAppState = this.state;
            tmp.items = dataitems;
            this.setState(tmp);
        }.bind(this);
        xhr.send();

    }

    render() {
        let menus = this.state.items || [];
        var menuList = menus.map(function (menu)) {
            return (
                <div>testabc</div>);
        }
        
    }
   
}