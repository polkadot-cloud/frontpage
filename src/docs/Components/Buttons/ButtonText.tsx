/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "../../lib/Demo";

export const ButtonText = () => {
  const code = `<Button type="text" text="Button" marginRight />
<Button type="text" text="Button" iconLeft={faUserReg} marginRight />
<Button type="text" text="Button" iconRight={faUserReg} marginRight />
<Button type="text" text="Button" disabled />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="text" text="Button" marginRight />
        <Button type="text" text="Button" iconLeft={faUser} marginRight />
        <Button type="text" text="Button" iconRight={faUser} marginRight />
        <Button type="text" text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
