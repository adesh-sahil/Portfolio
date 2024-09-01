import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const Textarea = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const serviceID = "service_xps3ndo"; 
    const templateID = "template_hzmhu4g"; 
    const publicKey = "17GvCs4X8FYkDvz2T"; 

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log("Failed to send email:", error.text);
        alert("Failed to send message. Please try again later.");
      }
    );

    e.target.reset();
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <Form ref={form} onSubmit={handleSubmit}>
        <ContactTitle>Email Me 🚀</ContactTitle>
          <Input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <Input type="text" name="subject" placeholder="Subject" required />
          <Textarea name="message" placeholder="Your Message" required />
          <button
            type="submit"
            style={{
              width: '100%',
              textAlign: 'center',
              background: 'hsla(271, 100%, 50%, 1)',
              padding: '13px 16px',
              marginTop: '2px',
              borderRadius: '12px',
              border: 'none',
              color: '#ffffff', // replace with theme.text_primary if needed
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
