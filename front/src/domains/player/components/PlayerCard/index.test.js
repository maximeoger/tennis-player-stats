import { render, screen } from "@testing-library/react";
import PlayerCard from "./index";
import { playerMock } from "../../testUtils";

describe("PlayerCard", function () {
  test("Should render with correct data", () => {
    render(<PlayerCard player={playerMock} />);
    const playerPicture = screen.getByRole("img");

    expect(playerPicture).toHaveAttribute("src", playerMock.picture);
    expect(playerPicture).toHaveAttribute("alt", "player picture");
    expect(screen.getByText("Novak Djokovic")).toBeInTheDocument();
    expect(screen.getByText("Rank: 2")).toBeInTheDocument();
    expect(screen.getByText("stats")).toBeInTheDocument();
    expect(screen.getByText("Points:")).toBeInTheDocument();
    expect(screen.getByText("2542")).toBeInTheDocument();
    expect(screen.getByText("Height:")).toBeInTheDocument();
    expect(screen.getByText("1m88")).toBeInTheDocument();
    expect(screen.getByText("Wheight:")).toBeInTheDocument();
    expect(screen.getByText("80Kg")).toBeInTheDocument();
    expect(screen.getByText("Age:")).toBeInTheDocument();
    expect(screen.getByText("31 ans")).toBeInTheDocument();
    expect(screen.getByText("Total played time :")).toBeInTheDocument();
    expect(screen.getByText("193 hours")).toBeInTheDocument();
    expect(screen.getByText("See details")).toBeInTheDocument();
  });
});
