import React, { Component } from 'react'


export default class Search extends Component {


    render() {
        return (
            <div>
                <form action="" autocomplete="off" class="form-horizontal" method="post" accept-charset="utf-8">
                    <div class="input-group">
                        <input name="searchtext" value="" class="form-control" type="text">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit" id="addressSearch">
                                    <span class="icon-search"></span>
                                </button>
                            </span>
                        </input>
                    </div>
                </form>



            </div>
        )
    }
}
