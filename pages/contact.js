import Head from "next/head";
import SlideSection from "../components/SlideSection";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Zachary Greenlief</title>
      </Head>
      <SlideSection direction="left">
        <h1>Get in touch</h1>
        <p>
          Reach me directly at{" "}
          <a href="mailto:zachary.greenlief@littleliefai.com">zachary.greenlief@littleliefai.com</a>
          , or send a message below.
        </p>
        <ContactForm />
      </SlideSection>
    </>
  );
}
