/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Polkicon } from "@polkadot-cloud/react/icons/Polkicon";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PolkiconTheme = () => {
  const code = `<Polkicon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" />
<Polkicon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" outerColor="transparent" />
<Polkicon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" outerColor="#E6007A" />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            outerColor="transparent"
          />
        </div>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            outerColor="#E6007A"
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
