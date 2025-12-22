// import { Resend } from "resend";
import resend from "./resend.js";

const resend = new resend(process.env.RESEND_API_KEY);

export default resend;
