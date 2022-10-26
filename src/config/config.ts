import IConfig from '../types/IConfig';
import Environment from './environment';

const Config: IConfig = Environment;
export const isDevelopmentMode = (): boolean => {
  return Config.enviornment === 'acceptance' || Config.enviornment === 'testing;';
};

export default Config;
