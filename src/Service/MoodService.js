// @flow

export type Mood = {|
  color: string,
  label: string,
  icon: ?string
|};

const getMoods = (): { [string]: Mood } => ({
  Great: {
    color: "#28AF5F",
    label: "Great",
    icon: null
  },
  Good: {
    color: "#F0C30F",
    label: "Good",
    icon: null
  },
  Bad: {
    color: "#D25500",
    label: "Bad",
    icon: null
  },
  Awful: {
    color: "#C3372D",
    label: "Awful",
    icon: null
  }
});

//$FlowFixMe
export const getMoodsArray = (): Mood[] => Object.values(getMoods());

export default getMoods;
