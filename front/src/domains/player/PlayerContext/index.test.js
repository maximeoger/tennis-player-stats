import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import usePlayerContext, { PlayerProvider } from "./index";
import { playersListMock, mockUrl } from "../testUtils";
import MockAdapter from "axios-mock-adapter";

const TestComponent = () => {
  const { selectedPlayers } = usePlayerContext();
  return (
    <>
      {selectedPlayers && (
        <>
          {selectedPlayers.map((player, i) => (
            <div data-testid="player" key={i}>
              {player.firstname}
            </div>
          ))}
        </>
      )}
    </>
  );
};

describe("PlayerContext", () => {
  let axiosMock;

  beforeAll(() => {
    axiosMock = new MockAdapter(axios);
  });

  beforeEach(() => {
    axiosMock.onGet(mockUrl).reply(200, playersListMock);
  });
  it("Should pass two players in selectedPlayer props", async () => {
    render(
      <PlayerProvider>
        <TestComponent />
      </PlayerProvider>
    );

    await waitFor(() => {
      const playerElements = screen.queryAllByTestId("player");
      expect(playerElements).toHaveLength(2);
    });
  });
});
