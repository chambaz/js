/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import { Data, dataBeet } from './Data';
import * as beet from '@metaplex-foundation/beet';
export type CreateMetadataAccountArgs = {
  data: Data;
  isMutable: boolean;
};

/**
 * @category userTypes
 * @category generated
 */
export const createMetadataAccountArgsBeet = new beet.FixableBeetArgsStruct<CreateMetadataAccountArgs>(
  [
    ['data', dataBeet],
    ['isMutable', beet.bool],
  ],
  'CreateMetadataAccountArgs',
);
