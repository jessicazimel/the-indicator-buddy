import React from "react";
import { Grid, Image, Message, Popup, Rating, Form, Segment, Button } from "semantic-ui-react";
import "./gameCard.css";

const GameCards = props => (
  
  
  <Grid.Row centered>
  
    <Grid.Column width={12}>
      <Grid centered padded>
      <Message>
    THE INDICATORS ARE RATED FROM 1-5 FOR DANGER LEVEL. 
    <p>5 MEANS IMMEDIATE ACTION IS RECOMMENDED.</p>
    </Message>
        <Grid.Row>
        
          {props.friendData.map(friend => (
            <Grid.Column key={friend.id} width={4}>
              <Popup
                size="huge"
                trigger={<Image src={friend.image} bordered spaced rounded />}
              >
                <Popup.Header>{friend.content},</Popup.Header>
                <Popup.Content>
                  {friend.info}
                  <Rating
                    icon="star"
                    defaultRating={friend.rating || 3}
                    maxRating={5}
                  />
                </Popup.Content>
                </Popup>
            </Grid.Column>
          ))}
          <Message color="purple">
            Don't start your car without first opening The Indicator Buddy App! Sign up BELOW!
          </Message>


          
        </Grid.Row>
        <Grid.Column width={8}>
        <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Full name.' placeholder='Full name.' />
        <Form.Input fluid label='Email' placeholder='Email' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
</Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid.Row>
);


export default GameCards;
