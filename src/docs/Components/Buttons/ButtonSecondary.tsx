/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonSecondary = () => {
  const code = `<Button type="secondary" text="Button" marginRight />
<Button type="secondary" text="Button" iconLeft={faUser} marginRight />
<Button type="secondary" text="Button" iconRight={faUser} marginRight />
<Button type="secondary" lg text="Button" disabled />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="secondary" text="Button" marginRight />
        <Button type="secondary" text="Button" iconLeft={faUser} marginRight />
        <Button type="secondary" text="Button" iconRight={faUser} marginRight />
        <Button type="secondary" lg text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
