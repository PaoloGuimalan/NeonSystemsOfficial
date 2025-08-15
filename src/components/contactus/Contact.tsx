import ContactUs from "@/assets/icons/ContactUs";
import Button from "../button/Button";
import { Input } from "../formfields/Input";
import { Textarea } from "../formfields/TextArea";
import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@/lib/configs";
import Alert from "../alert/Alert";

type AlertType =
  | {
      type: "error" | "success";
      title: string;
      description: string;
      open: boolean;
    }
  | undefined;

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notif, setNotif] = useState<AlertType>();
  const formRef = useRef<HTMLFormElement>(null);

  const submitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsLoading(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setNotif({
        type: "success",
        title: "Message Sent!",
        description: "Your message has been sent. We'll get back to you soon.",
        open: true,
      });
    } catch (err) {
      console.error(err);
      setNotif({
        type: "error",
        title: "Failed.",
        description: "Something went wrong. Please try again!",
        open: true,
      });
    } finally {
      setIsLoading(false);
      formRef.current.reset();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setNotif(undefined), 5000);
    return () => clearTimeout(timer);
  }, [setNotif, notif]);

  return (
    <div className="min-h-screen flex relative justify-center  bg-white p-8 xl:px-24 py-24">
      <div className="lg:w-fit w-full">
        <h1 className="text-3xl mb-5 font-semibold text-dark-100">
          Connect with us.
        </h1>
        <p className="text-lg mb-5">
          Reach out to our team via email for any questions, feedback, or
          collaborations.
        </p>

        <div className="w-full lg:w-[95%] border rounded-md p-8 shadow">
          <form ref={formRef} onSubmit={submitEmail}>
            <div className="mb-4">
              <label className="font-bold ">YOUR NAME:</label>
              <br />
              <Input
                required
                name="user_name"
                type="text"
                placeholder="Insert your name"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold ">YOUR EMAIL:</label>
              <br />
              <Input
                required
                name="user_email"
                type="email"
                placeholder="Insert your email"
              />
            </div>
            <div>
              <label className="font-bold ">YOUR MESSAGE:</label>
              <br />
              <Textarea
                required
                name="message"
                placeholder="Insert your message"
                rows={10}
                className="mb-4 resize-none"
              />
            </div>
            <Button
              loading={isLoading}
              disabled={isLoading}
              type="submit"
              className="w-full"
              variant="dark"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      {notif?.open && (
        <Alert
          title={notif?.title || ""}
          type={notif?.type}
          description={notif?.description || ""}
        />
      )}
      <ContactUs className="w-full hidden lg:block md:z-0 md:relative max-w-[32rem] lg:max-w-[40rem]" />
    </div>
  );
};

export default Contact;
