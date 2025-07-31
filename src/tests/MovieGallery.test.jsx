import MovieGallery from "../components/MovieGallery";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("MovieGallery component", () => {
  it("renders the title correctly", () => {
    render(<MovieGallery title="My Gallery" searchTerms={[]} />);

    const title = screen.getByText("My Gallery");
    expect(title).toBeInTheDocument(); // usa jest-dom (setup.js è ok)
  });
});
