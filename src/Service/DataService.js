// @flow
import data from "weeklyData.json";

export const getWeeklyView = (): Promise<{}> =>
  new Promise((res, rej) => setTimeout(() => res(data), 3000));
