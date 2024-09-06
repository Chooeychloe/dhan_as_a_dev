import React,{useState} from "react";
import styles from "./ContactStyles.module.css";
import Notification from "./Notification";

function Contact() {
  const [result, setResult] = useState("");
  const [notificationType, setNotificationType] = useState(""); // New state for notification type

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setNotificationType(""); // Clear previous notifications

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setNotificationType("success"); // Set notification type
      event.target.reset();
    } else {
      setResult(data.message);
      setNotificationType("error"); //
    }

    setTimeout(() => {
      setResult("");
      setNotificationType("");
    }, 1500);
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact Me</h1>
      <form action="" onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="emial" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit"/>
      </form>
      {result && <Notification type={notificationType} message={result} />}
    </section>
  );
}

export default Contact;
