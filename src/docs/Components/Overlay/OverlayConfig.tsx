/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayConfig = () => {
  const code = `const { options } = useOverlay().modal.config;
const { myVal } = options;

console.log(myVal);
>> 'value'`;

  return <SimpleEditor code={code} standalone />;
};
