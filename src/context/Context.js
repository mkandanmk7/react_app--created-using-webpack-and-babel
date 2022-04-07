import { createContext } from 'react';
const details = {
    name: "muthu",
    age: 27,
    gender: "male",
    place: "pollachi",
    intrest: ["game", "learning", "gadgets"]
}
export const Context = createContext(details);

