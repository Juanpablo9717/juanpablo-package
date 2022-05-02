import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'juanpablo-package' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const JuanpabloPackage = NativeModules.JuanpabloPackage
  ? NativeModules.JuanpabloPackage
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return JuanpabloPackage.multiply(a, b);
}

export const saludar = (name: string) => {
  return `Hola mi estimado ${name}`;
};
