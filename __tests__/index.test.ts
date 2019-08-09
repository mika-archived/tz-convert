import { ianaToWindows, windowsToIana } from "../src";

describe("#ianaToWindows", () => {
  describe("when timezone is valid", () => {
    it("returns Microsoft TimeZone Index Values ID", () => {
      expect(ianaToWindows("Asia/Tokyo")).toBe("Tokyo Standard Time"); // 001
      expect(ianaToWindows("Pacific/Palau")).toBe("Tokyo Standard Time"); // PW
      expect(ianaToWindows("America/Detroit")).toBe("Eastern Standard Time"); // US[1]
    });
  });

  describe("when timezone is invalid", () => {
    it("returns undefined", () => {
      expect(ianaToWindows("America/Tokyo")).toBeUndefined();
    });
  });
});

describe("#windowsToIana", () => {
  describe("when MS TZ Index Value ID is valid", () => {
    describe("if territory is default (omitted)", () => {
      it("returns primary (001) value", () => {
        expect(windowsToIana("Tokyo Standard Time")).toBe("Asia/Tokyo"); // 001
      });
    });

    describe("if territory is specified (ID)", () => {
      it("returns specified territory value", () => {
        expect(windowsToIana("Tokyo Standard Time", "ID")).toBe("Asia/Jayapura");
        expect(windowsToIana("Eastern Standard Time", "US")).toBe("America/New_York"); // 1st value
      });
    });
  });

  describe("when MS TZ Index Value ID is invalid", () => {
    it("returns undefined", () => {
      expect(windowsToIana("United Stated Standard Time")).toBeUndefined();
    });
  });
});
