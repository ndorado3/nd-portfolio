import React from "react";

import Card from "../portfolio/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import pawme from "../../Assets/img/pawme.png";
import wilbo from "../../Assets/img/wilbo.jpg";
import workout from "../../Assets/img/workout.png";

class CardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "PawMe",
          subTitle: "Discover Your New Best Friend!",
          imgSrc: pawme,
          link: "https://savannahf.github.io/The-Omega-Project/",
          repo: "https://github.com/SavannahF/The-Omega-Project",
          selected: false,
        },
        {
          id: 1,
          title: "Wilbo",
          subTitle: "Turn your favorite liquor bottle into a hookah!!",
          imgSrc: wilbo,
          link: "https://the-hookahp.herokuapp.com/",
          repo: "https://github.com/SavannahF/the_hookahp",
          prototype: "https://xd.adobe.com/view/fcb0fc33-0d04-47f6-8730-b5b7070adccd-a9e3/",
          selected: false,
        },
        {
          id: 2,
          title: "OH-MY!! Own Workout Tracker",
          subTitle: "Workout Tracker",
          imgSrc: workout,
          link: "https://oh-my-own-workout-tracker.herokuapp.com",
          repo: "https://github.com/ndorado3/oh-my-own-workout-tracker",
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default CardGroup;
