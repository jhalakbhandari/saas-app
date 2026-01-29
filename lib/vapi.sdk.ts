import Vapi from "@vapi-ai/web";
import React from "react";

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
