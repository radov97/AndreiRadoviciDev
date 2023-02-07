export const tabletBreakpoint = getComputedStyle(
  document.documentElement
).getPropertyValue("--tablet-breakpoint");

export const desktopBreakpoint = getComputedStyle(
  document.documentElement
).getPropertyValue("--desktop-breakpoint");
