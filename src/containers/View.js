import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/common/Header';
import { connect } from 'react-redux';
import { getData } from '../actions/fetchActions';

class View extends Component
{
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getData();
    }

    generateNotesListUI = () => {
        if (notes.lenth>0) {
            return notes.map((item, index) => <li className='note-display-title' key={index}>
                <Link to={'/update/'+item._id}>{item.title}</Link> 
            </li>);
        }
    }

    render()
    {
        const {notes} = this.props;

        return(<div>
                <Header header='+' to={'/update/'+0}/>
                <div className='notes-list-container header-margin'>
                    <div className='notes-list-header'>My Notes</div>
                    <ul className='notes-list'>
                        {
                            notes.length > 0 ? notes.map((item, index) => <li className='note-display-title' key={index}>
                            <Link to={'/update/'+item._id}>{item.title}</Link> 
                        </li>) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getData: getData
};
const mapStateToProps = (state) => ({
    notes: state.fetchReducer.notes,
});

export default connect(mapStateToProps, mapDispatchToProps)(View);