import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: "sk89uEgO7B7F49VuFpikJWFMnfhaJAtnVMcLBAm2HzKhJME74F3fUNzexkh094zKL33YSKirl8N5W2i8eDFhQHmWhfaO3tykjYx3jtG2kfy9OdHSlL4esBtDMxFnlMponPV5PMj6obFrwZsGYXvcm6rMTnLseMkTWjjipmXpwnNdPLDcmvG3"
});

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient;
