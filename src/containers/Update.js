import React, {Component} from 'react';
import Header from '../components/common/Header';
import PButton from '../components/common/PButton';
import { connect } from 'react-redux';
import { updateSelectedNoteDetail, updateData, updateSelectedNoteTitle } from '../actions/updateActions';
import {createNote} from '../actions/createActions';

class Modify extends Component
{
    constructor (props) {
        super(props);
        this.titleRef = React.createRef();
        this.state = {
            noteStatus: ''
        }
    }

    noteValueChangeHandler = (e) => {
        this.props.updateSelectedNoteDetail(event.target.value);
        this.setState({noteStatus: ''}); // reset info msg
    }

    noteTitleChangeHandler = (e) => {
        this.props.updateSelectedNoteTitle(event.target.value);
        this.setState({noteStatus: ''});
    }
    componentDidMount = () => {
        const selectedNote = this.props.notes.length > 0 ? this.props.notes.filter((item) => item._id === this.props.match.params.noteId) : [{details: ''}];
        let noteDetails = '';
        let notetitle = 'New Note';
        if(selectedNote.length > 0) {
            noteDetails = selectedNote[0].details;
            notetitle = selectedNote[0].title;
        }

        this.props.updateSelectedNoteDetail(noteDetails);
        this.props.updateSelectedNoteTitle(notetitle);
        this.titleRef.current.focus();
    }

    saveHandler = () => {
        if(this.props.match.params.noteId == 0) { //create note
            console.log('create');
            this.props.createNote({'title': this.props.selectedNoteTitle,
            'details': this.props.selectedNoteDetail});
            this.setState({noteStatus: 'Created'});
        } else { //update note
            const updatedNote = {
                '_id': this.props.match.params.noteId,
                'title': this.props.selectedNoteTitle,
                'details': this.props.selectedNoteDetail
            }
            this.props.updateData(updatedNote);
            this.setState({noteStatus: 'Updated'});
        }
        
    }

    render()
    {
        const selectedNote = this.props.notes.filter    ((item) => item._id === this.props.match.params.noteId);
        
        return(
            <div className='modify-container'>
                <Header header='<-' to='/view'/>
                <div className='note-container header-margin'>
                    <input ref={this.titleRef} className='note-title' type='text' value={this.props.selectedNoteTitle} onChange={this.noteTitleChangeHandler}/>
                    <textarea className='note-editor' placeholder='start scribling...' value={this.props.selectedNoteDetail} onChange={this.noteValueChangeHandler}/>
                </div>
                {
                    this.state.noteStatus && <div className='info-msg'>{this.props.selectedNoteTitle} {this.state.noteStatus}</div>
                }
                <PButton style='save-btn' title='Save' clickHandler={this.saveHandler}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateData: updateData,
    updateSelectedNoteDetail: updateSelectedNoteDetail,
    updateSelectedNoteTitle: updateSelectedNoteTitle,
    createNote: createNote
};
const mapStateToProps = (state) => ({
    username: state.name,
    notes: state.fetchReducer.notes,
    selectedNoteDetail: state.updateReducer.selectedNoteDetail,
    selectedNoteTitle: state.updateReducer.selectedNoteTitle
})

export default connect(mapStateToProps,mapDispatchToProps)(Modify);