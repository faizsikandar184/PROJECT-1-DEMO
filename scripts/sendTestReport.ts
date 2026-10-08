import { sendTestEmail } from "../utils/emailReporter";

async function main() {
  await sendTestEmail({
    passed: 8,
    failed: 1,
    skipped: 1,
    total: 10,
    duration: "2m 35s"
  });
}

main().catch((error) => {
  console.error("❌ Failed to send email:");
  console.error(error);
  process.exit(1);
});
