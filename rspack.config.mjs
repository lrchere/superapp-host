import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import rspack from '@rspack/core';
import dotenv from 'dotenv';

/** @type {(env: import('@callstack/repack').EnvOptions) => import('@rspack/core').Configuration} */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default env => {
  const { mode, context, platform } = env;

  // Load environment variables based on the mode
  const envFile = path.resolve(__dirname, `env/.env.${mode}`);
  dotenv.config({ path: envFile });
  console.log(`Loading environment variables (mode: ${mode}) from: ${envFile}`);

  return {
    mode,
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules(),
      ],
    },
    plugins: [
      new Repack.RepackPlugin(),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'SuperAppHost',
        filename: 'SuperAppHost.container.js.bundle',
        remotes: {
          CreditCardMiniApp: `CreditCardMiniApp@${process.env.CREDIT_CARD_MINI_APP_URL}/${platform}/mf-manifest.json`,
          CreditMiniApp: `CreditMiniApp@${process.env.CREDIT_MINI_APP_URL}/${platform}/mf-manifest.json`,
        },
        dts: false,
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: '19.1.0',
          },
          'react-native': {
            singleton: true,
            eager: true,
            requiredVersion: '0.80.1',
          },
          '@react-navigation/native': {
            singleton: true,
            eager: true,
            requiredVersion: '^7.1.14',
            version: '7.1.14',
          },
          '@react-navigation/native-stack': {
            singleton: true,
            eager: true,
            requiredVersion: '^7.3.21',
            version: '7.3.21',
          },
          'react-native-safe-area-context': {
            singleton: true,
            eager: true,
            requiredVersion: '^5.5.2',
          },
          'react-native-screens': {
            singleton: true,
            eager: true,
            requiredVersion: '^4.11.1',
          },
          '@react-navigation/elements': {
            singleton: true,
            eager: true,
            requiredVersion: '^2.5.2',
            version: '2.5.2',
          },
          '@react-native-async-storage/async-storage': {
            singleton: true,
            eager: true,
            requiredVersion: '^2.2.0',
          },
        },
      }),
      new rspack.IgnorePlugin({
        resourceRegExp: /^@react-native-masked-view/,
      }),
    ],
  };
};
