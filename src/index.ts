import { AppleScriptFramework } from "./framework.js";
// import { systemCategory } from "./categories/system.js";
// import { calendarCategory } from "./categories/calendar.js";
// import { finderCategory } from "./categories/finder.js";
// import { clipboardCategory } from "./categories/clipboard.js";
import { notificationsCategory } from "./categories/notifications.js";
// import { itermCategory } from "./categories/iterm.js";
import { deepResearchCategory } from "./categories/deep_research.js";

const server = new AppleScriptFramework({
  name: "applescript-server",
  version: "1.0.0",
  debug: true,
});

// Add all categories
// server.addCategory(systemCategory);
// server.addCategory(calendarCategory);
// server.addCategory(finderCategory);
// server.addCategory(clipboardCategory);
server.addCategory(notificationsCategory);
server.addCategory(deepResearchCategory);
// server.addCategory(itermCategory);

// Start the server
server.run().catch(console.error);