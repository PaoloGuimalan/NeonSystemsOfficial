/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";

// @ts-ignore
const WEBHOOK_URL = import.meta.env.DISCORD_WEBHOOK_URL;

async function sendDeploymentMessage() {
  console.log("Starting deployment message...");
  try {
    await axios.post(WEBHOOK_URL, {
      content: "Deployment completed! 🚀",
    });
    console.log("Deployment message sent successfully. test");
  } catch (error) {
    console.error("Error sending deployment message:", error.message);
  }
}

sendDeploymentMessage();
