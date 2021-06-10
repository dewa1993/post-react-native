import { Config } from '../types/config';
import { store } from './store';
import constants from './const';

const config: Partial<Config> = {
    store,
    constants

}

export default config as Config;