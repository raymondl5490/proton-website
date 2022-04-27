import humanizeDuration from "humanize-duration";

export const HumanDate = (unixTimestamp: number): string => {
  return humanizeDuration(Math.floor(Date.now() - unixTimestamp * 1000), {
    largest: 2,
    maxDecimalPoints: 0,
  });
};

export const unixToUTCDate = (unixTimestamp: number): string =>
  new Date(unixTimestamp * 1000).toUTCString();

export default {};
