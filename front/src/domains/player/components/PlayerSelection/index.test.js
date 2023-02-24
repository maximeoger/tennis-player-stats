import { render, screen, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import PlayerSelection from "./index";
import { playersListMock, mockUrl } from "../../testUtils";
import { PlayerProvider } from "../../PlayerContext";

describe("PlayerSelection", () => {
  let axiosMock;

  beforeAll(() => {
    axiosMock = new MockAdapter(axios);
  });

  beforeEach(() => {
    axiosMock.onGet(mockUrl).reply(200, playersListMock);
  });

  test("should render two player cards", async () => {
    render(
      <PlayerProvider>
        <PlayerSelection />
      </PlayerProvider>
    );
    await waitFor(async () =>
      expect(await screen.findByTestId("player-card-0")).toBeInTheDocument()
    );
    await waitFor(async () =>
      expect(await screen.findByTestId("player-card-1")).toBeInTheDocument()
    );
  });
});
