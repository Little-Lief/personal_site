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
        <p>Send a message below and I&apos;ll get back to you soon.</p>
        <ContactForm />
      </SlideSection>
    </>
  );
}
