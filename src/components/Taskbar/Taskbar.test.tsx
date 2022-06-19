import React from "react";
import { render } from "@testing-library/react";

import Taskbar from "./Taskbar";

describe("Button", () => {
    test("renders the taskbar component", () => {
        render(<Taskbar content="test" />);
    });
});