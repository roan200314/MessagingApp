import { StreamChat } from "stream-chat";

if (!process.env.NEXT_PUBLIC_STREAM_API_KEY) {
    throw new Error("CLERK_JWT_ISSUER_DOMAIN is not set");
}

const streamClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_API_KEY
);

export default streamClient;