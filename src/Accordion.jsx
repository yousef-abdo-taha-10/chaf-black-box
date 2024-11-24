import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";

function Accordion() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "700" }}>
          Frequently Asked Questions
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginTop: "10px",
            fontSize: "25px",
            fontWeight: "400",
            color: "#B3B3B3",
          }}
        >
          Everything you need to know about the product and billing.
        </h2>
      </div>

      <div
        style={{
          margin: "0 auto",
          maxWidth: "800px",
          padding: "0 20px",
        }}
      >
        <Accordion activeKey={activeKey}>
          {[
            {
              question: "Is there a minimum order amount?",
              description:
                "Currently, we do not have a minimum order requirement. You can order as much or as little as you like.",
            },
            {
              question: "How can I track my order?",
              description:
                "To track your order, navigate to Orders History to find your most recent orders' tracking number and expected delivery date.",
            },
            {
              question: "Do you offer catering services?",
              description:
                "Yes, we provide catering services for all types of events. Contact us for customized catering options.",
            },
            {
              question: "Can I customize my order?",
              description:
                "Absolutely! You can personalize your order to suit your preferences. Just let us know your requirements.",
            },
            {
              question: "What payment methods do you accept?",
              description:
                "We accept various payment methods including credit/debit cards, online payments, and cash on delivery.",
            },
            {
              question: "Do you have a loyalty program?",
              description:
                "Yes, we have a loyalty program that rewards our regular customers with exclusive discounts and offers.",
            },
          ].map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Card
                style={{
                  border: "none",
                  background: "none",
                  boxShadow: "none",
                }}
              >
                <Card.Header
                  onClick={() => handleToggle(index.toString())}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 0",
                    fontSize: "18px",
                    // fontWeight: "500",
                    marginLeft: "10px",
                    backgroundColor: "white",
                    fontWeight:"bold",
                    borderBottom:
                      activeKey === index.toString()
                        ? "none"
                        : "1px solid #eaeaea",
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      marginRight: "20px",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "3.4px solid orange",
                      borderRadius: "50%",
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {activeKey === index.toString() ? "-" : "+"}
                  </span>
                </Card.Header>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body
                    style={{
                      padding: "15px 0",
                      color: "rgb(100, 100, 100)",
                      fontSize: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.description}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default Accordion;
