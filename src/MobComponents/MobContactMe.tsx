import React, { useState } from "react";
import {
  ContactContainer,
  ContactCon,
  ContactConRow,
  ContactForm,
  ContactPara,
  NameInput,
  TextArea,
  SubmitButton,
} from "./skins";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { App } from "../Components/FirebaseConfig/Firebase";

export default function MobContactMe() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const db = getFirestore(App);

  const HandleName = (e: any) => {
    setName(e.target.value);
  };
  const HandleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const HandleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const HandleSubmit = async () => {
    if (name && email && message) {
      const docRef = await addDoc(collection(db, "Comments"), {
        name: name,
        email: email,
        message: message,
      });
      if (docRef.id !== "") {
        alert("Successful");
        setName("");
        setEmail("");
        setMessage("");
      }
    } else {
        alert("Please fill all the fields");
    }
  };

  return (
    <ContactContainer>
      <ContactCon id="contact">CONTACT ME</ContactCon>
      <ContactPara>
          I'm always eager to collaborate with passionate individuals and teams.
          Whether you have a project in mind, are seeking a skilled contributor,
          or simply want to discuss design and innovation, I'd be thrilled to
          hear your thoughts.
          <br />
          <br />
          Feel free to reach out via 'yogendrakise2023@gmail.com' or connect me
          +919353437216. I'm excited to explore potential collaborations and see
          what amazing things we can create together!
        </ContactPara>
        <ContactForm>
          <NameInput
            placeholder="YOUR NAME"
            type="text"
            value={name}
            required
            onChange={(e: any) => HandleName(e)}
          />
          <NameInput
            placeholder="YOUR EMAIL"
            type="email"
            value={email}
            required
            onChange={(e: any) => HandleEmail(e)}
          />
          <TextArea
            placeholder="YOUR MESSAGE"
            value={message}
            onChange={(e: any) => HandleMessage(e)}
          />
          <SubmitButton onClick={HandleSubmit}>GET IN TOUCH </SubmitButton>
        </ContactForm>
    </ContactContainer>
  );
}
