import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should do stuff [slow]", async () => {
    render(<Button />);
    const btn = screen.getByRole("button");
    await new Promise((r) => setTimeout(r, 2000));
    expect(btn).toBeInTheDocument();
  });
});
