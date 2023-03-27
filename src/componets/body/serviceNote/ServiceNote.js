import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

import { ref, update } from "firebase/database";
import {db} from "../../../firebase/firebase"

function ServiceNote() {


  //const [serviceData, setServiceData] = useState();
    // Push Function
;


// A post entry.
const postData = { //
  author: "username",
  uid: "uid",
  body: "body",
  title: "title",
  starCount: 0,
  authorPic: "pictured"
};

const updates = {}; //
updates['/posts/' + postData.newPostKey] = postData; //
updates['/user-posts/'  + postData.author] = postData; //

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    update(ref(db), updates)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 className="mx-auto">Pridaj záznam</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Kto volá</Form.Label>
                <Form.Control
                  onChange={(event) => console.log(event.target.value)}
                  required
                  type="text"
                  placeholder="Meno"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Odkial</Form.Label>
                <Form.Control required type="text" placeholder="Ulica" />
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Problém</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="aky je problem..."
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Poznámky</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="poznamka k oprave..."
              />
            </Form.Group>
            <Button type="submit">Pridaj ulohu</Button>
          </Form>
        </Stack>
      </Container>
    </>
  );
}

export default ServiceNote;

// chcelo by to global state pr ktory bude vedieť pridavať alebo zobrzovať
// na druhu stranu pokial budem dataa pridavať do fire base
// tak si ich zbrazim samostatne v omponenete bez potreby global state
