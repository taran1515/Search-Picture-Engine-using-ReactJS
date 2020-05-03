import React from 'react'

class Searchbar extends React.Component{

    state = {
        search_query: ''

    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.search_query)
        this.props.onSubmit(this.state.search_query)
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.search_query} 
                            onChange={e => {
                                this.setState ({search_query: e.target.value })}
                                }/> 
                    </div>
                   
                </form>

            </div>
        );
    }

}

export default Searchbar