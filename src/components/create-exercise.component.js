import React, {Component} from 'react';
import DatePicker from 'react-datepicker'; //datapicker for form
import 'react-datepicker/dist/react-datepicker.css'; //pp css

export default class CreateExercise extends Component{
    //allows us to add exercises to the DB
    //adding a constructor
    constructor(props) {
        //always need to call super in subclass constructor
        super(props);

        //make sure that "this" inside of methods refers to the class instance
        //(inside the method, "this" would be undefined)
        this.onChangeUsername = this.onChangeUsername.bind(this); //binds "this" to the method
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //setting the inital state of the component:
        //creating properties of the state that will correspond w/ fields of DB

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),

            users: [] //necessary b/c there will be a drop-down menu where you can associate a user with the exercise
        } 
        //states are like variables in react (let [] = [] will never be used)
        //whenever the states are updated, the page will automatically be updated with the new values as well
    }

    //react lifecycle method - react will automatically call at different points
    //componentDidMount will automatically be called before anything displays on the page
    componentDidMount() {
        this.setState({
            users: ['test', 'aku', 'boop'],
            username: 'test' //bc we want the dropdown to select the very first user in the dropdown at the beginning
        });
    }

    //oki there are states, now need methods to update the state variables/properties
    onChangeUsername(e) {
        //will never do something like [this.state.username = ""] -- always want to use the setState method
        this.setState({
            username: e.target.value 
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value 
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value 
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        window.location = "/"; //takes person back to homepage
    }

    render(){
        return(
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select ref='userInput'
                                required
                                className='form-control'
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user) {
                                        return <option
                                            key = {user}
                                            value = {user} > {user}
                                            </option>;
                                    })
                                }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label> Description: </label>
                        <input type='text'
                                required
                                className='form-control'
                                value={this.description}
                                onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Duration (in minutes): </label>
                        <input type='text'
                               required
                               className='form-control'
                               value={this.duration}
                               onChange={this.onChangeDuration}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <input type='submit' value='Create Exercises Log' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}