import MobileSelect from "../src/index";

describe("MobileSelect", () => {
  document.body.innerHTML = '<div id="trigger"></div>';

  const msInstance = new MobileSelect({
    trigger: "#trigger",
    wheels: [
      { data: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] },
    ],
    initValue: "周一",
  });

  it("initialize with the `initValue` is workable", () => {
    expect(msInstance.getPositionByValue()).toEqual([1]);
  });

  it('should get the current value by the `getValue`', () => {
    expect(msInstance.getValue()).toEqual(['周一']);
  });

  it('should change the value by the `setValue`', () => {
    msInstance.setValue(['周二'])
    expect(msInstance.getValue()).toEqual(['周二']);
  });
});
