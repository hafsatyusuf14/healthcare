export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    try {
      await import("./sentry.server.config");
    } catch (error) {
      console.error("Failed to load sentry.server.config:", error);
    }
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    try {
      await import("./sentry.edge.config");
    } catch (error) {
      console.error("Failed to load sentry.edge.config:", error);
    }
  }
}
