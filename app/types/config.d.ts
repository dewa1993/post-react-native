import { store } from "../config/store";
import constants from "../config/const";


export interface Config {
    store: typeof store;
    constants: typeof constants
}