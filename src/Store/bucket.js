import { randomId } from "./utils";

export default [];

export const Bucket = {
  create: data => {
    const bucket = {
      id: randomId(),
      created: Date.now(),
      items: [],
      selected: false
    };
    return { ...data, ...bucket };
  },
  createUrl: data => {
    const url = {
      id: randomId(8),
      created: Date.now(),
      selected: false
    };
    return { ...data, ...url };
  }
};
