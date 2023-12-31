/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonPrimary = () => {
  const code = `<Button text="Button" marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight colorSecondary />
<Button type="primary" text="Button" lg disabled />`;

  return (
    <>
      <Demo>
        <Button text="Button" marginRight />
        <Button type="primary" text="Button" iconLeft={faUser} marginRight />
        <Button
          type="primary"
          text="Button"
          iconLeft={faUser}
          marginRight
          colorSecondary
        />
        <Button type="primary" text="Button" lg disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
