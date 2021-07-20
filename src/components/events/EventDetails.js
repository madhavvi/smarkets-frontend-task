/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {  Container, Grid, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { getEventByID } from '../../redux/event/eventActions';
import './EventDetails.css';
import { withRouter } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class EventDetails extends React.Component{

    constructor(props) {
        super(props);
        this.props.getEventByID(this.props.match.params.id);
        this.state = {
            id: this.props.match.params.id,
            item: this.props.events.item && this.props.events.item.events && this.props.events.item.events[0],
            loading: true
        }
    }

    componentWillReceiveProps(prevProps, prevState){
        this.setState({
            item: prevProps.events.item && prevProps.events.item.events && prevProps.events.item.events[0],
            loading:  false,
            error: this.props.events.error || 'An error occurred when trying to fetch event details.'
        });
    }

    render() {
        const startDate = this.state.item && new Date(this.state.item.start_date).toDateString();

        return (
        <> 
            {this.state.item ? (
            <Container className="container">
                <Grid container style={{ flexGrow: 1, display: 'grid' }}>
                    <Grid item className="details-grid" style={{ marginTop: 50 }}> 
                        {(this.state.item && !this.state.loading) ? (
                        <Card className="card-grid">
                            <CardHeader className="card-panel" title={`Event details - ${this.state.item.id}`}/>
                            <CardContent style={{ textAlign: 'left'}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {(this.state.item.name).toUpperCase()}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {this.state.item.description ? 
                                        this.state.item.description : 
                                        'Trade and bet on a variety of golf betting markets, including those on the PGA Tour and European Tour.'
                                    }
                                </Typography>
                                <Typography gutterBottom variant="body2" component="p" style={{ color: '#2b932b' }}>
                                    {(this.state.item.state).toUpperCase()}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {this.state.item.start_date && (
                                       <p>Starting <i><b>{startDate}</b></i></p> 
                                    )}
                                </Typography>
                            </CardContent>
                            
                            <CardActions>
                                <Button size="small" color="primary" onClick={this.props.history.goBack}>
                                    Back
                                </Button>
                            </CardActions>
                        </Card>
                        ): (
                            <Grid>
                                <CircularProgress />
                            </Grid>
                        )}
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
    getEventByID
})(EventDetails));
