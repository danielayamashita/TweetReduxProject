export const RECEIVE_TWEETS = "RECEIVE_TWETS";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}
