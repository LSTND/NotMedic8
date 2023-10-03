import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

describe("Modal", () => {
  test("We have modal?", () => {
    const text = "modal text";
    const actions = <button>OK</button>;
    render(<Modal text={text} actions={actions} />);
    expect(screen.getByText("modal text")).toBeInTheDocument();
  });
  test("ClassName in modal", () => {
    const actions = <button>OK</button>;
    const className = "modal-container";
    render(<Modal className={className} actions={actions} />);
    expect(screen.getByRole("heading")).toHaveClass("modal-header-text");
  });
  test("Close modal click", () => {
    const clickOnSpan = jest.fn();
    const actions = <button>OK</button>;
    const { container } = render(
      <Modal span={true} clickOnSpan={clickOnSpan} actions={actions} />
    );
    const closeBtn = screen.getByText("X");
    fireEvent.click(closeBtn);
    expect(clickOnSpan).toHaveBeenCalled();
  });
  test("Actions in modal", () => {
    const action1 = <button data-testid="modal-action1">OK</button>;
    const action2 = <button data-testid="modal-action2">Cancel</button>;
    const className = "modal-container";
    render(<Modal className={className} actions={[action1, action2]} />);
    const actions = screen.getAllByTestId(/modal-action/);
    expect(actions).toHaveLength(2);
    expect(actions[0]).toHaveTextContent("OK");
    expect(actions[1]).toHaveTextContent("Cancel");
  });
});
