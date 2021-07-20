import React from 'react';
import {  Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/event/eventActions';
import './EventList.css';
import { Link } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


class EventList extends React.Component{

    constructor(props) {
        super(props);
        this.props.getEvents();
        this.state = {
            events: this.props.events,
            error: this.props.events.error || 'An error occurred when trying to fetch event details.'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            events: nextProps.events.list && nextProps.events.list.items && nextProps.events.list.items.data && nextProps.events.list.items.data.events
        });
    }

    render() {
        return (
        <>
            {this.state.events ? (
            <Container className="container">
                <Grid container className="grid-container" style={{ flexGrow: 1, display: 'grid' }}>
                    <Grid item className="grid-item"> 
                        <ul>
                            {this.state.events.length && this.state.events.map((item) => (
                                <li>
                                    <Grid className="event-block" container item xs={12} md={12} lg={12} direction="row">
                                        <Grid item xs={6} md={6}>
                                            <Grid item xs={12} md={12}>
                                                <Link onClick={() => this.props.history.push('events/'+item.id)}>    
                                                    <p className="event-name">{item.name}</p>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} md={12} className="event-desc">
                                                <p>{item.description}</p>
                                            </Grid>
                                            
                                        </Grid>
                                        <Grid item xs={3} md={3} className="event-date">
                                           <p> {item.start_date ? (`Starting ${new Date(item.start_date).toDateString()}`) : 'Coming soon'} </p>  
                                        </Grid>
                                        <Grid item xs={3} md={3} className="event-status status">
                                            <p item xs={12} md={12}>
                                                {(item.state).toUpperCase()}
                                            </p>
                                        </Grid>
                                    </Grid>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Container>
            ) : (
                <Grid style={{ padding: '30px 0'}}>
                    <i><b>{this.state.error}</b></i>
                </Grid>
            )}
        </>
        )
    }
};


export default withRouter(connect(({ events }) => ({ events }), {
    getEvents
})(EventList));