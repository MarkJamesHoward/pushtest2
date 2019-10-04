const webpush = require("web-push");

let vapidKeys = {
  publicKey:
    "BGBreNVgk5gIg_22rcHhSXwvYM2x6-IYMcxsyKjZNK0i6CGrFr09v07W_W_qj9Rp9W7K03b7SpWJsOEzAbyLLB0",
  privateKey: "q7_hHu5evrY2zzD6ljsgObsT0cICOfnc9Q6yGI7B78M"
};

webpush.setVapidDetails("mailto:example@yourdomain.org", vapidKeys.publicKey, vapidKeys.privateKey);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: ".....",
  keys: {
    auth: ".....",
    p256dh: "....."
  }
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
