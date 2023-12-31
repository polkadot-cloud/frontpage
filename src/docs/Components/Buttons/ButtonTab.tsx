/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonTab = () => {
  const code = `<Button type="tab" title={"Inactive"} />
<Button type="tab" title={"Inactive"} badge={"123"} />
<Button type="tab" active title={"Active"} />
<Button type="tab" active title={"Active"} badge={"123"} />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="tab" title={"Inactive"} />
        <Button type="tab" title={"Inactive"} badge={"123"} />
        <Button type="tab" active title={"Active"} />
        <Button type="tab" active title={"Active"} badge={"123"} />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
