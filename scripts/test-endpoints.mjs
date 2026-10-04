const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("=== RS.BSC Endpoint & Architecture Verification Suite ===\n");
  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`✓ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`✗ FAIL: ${name} ->`, err.message);
      failed++;
    }
  }

  // 1. Root Redirect
  await test("Root URL (/) redirects to /en", async () => {
    const res = await fetch(`${BASE_URL}/`, { redirect: "manual" });
    if (res.status !== 307 && res.status !== 308) {
      throw new Error(`Expected redirect status (307/308), got: ${res.status}`);
    }
    const location = res.headers.get("location");
    if (!location || !location.includes("/en")) {
      throw new Error(`Expected redirect location to contain /en, got: ${location}`);
    }
  });

  // 2. English Home Page
  await test("English Home (/en) renders with metadata and schema", async () => {
    const res = await fetch(`${BASE_URL}/en`);
    if (res.status !== 200) throw new Error(`Status ${res.status}`);
    const html = await res.text();
    if (!html.includes("RS.BSC")) throw new Error("Missing RS.BSC brand");
    if (!html.includes("Building Real-Time Products")) throw new Error("Missing Hero headline");
    if (!html.includes("application/ld+json")) throw new Error("Missing JSON-LD structured data");
    if (!html.includes("RS.BSC Live")) throw new Error("Missing flagship product");
    if (!html.includes("Mr. Aarav")) throw new Error("Missing CEO name");
    if (!html.includes("+91 81399 48217")) throw new Error("Missing phone number");
  });

  // 3. Hindi Home Page
  await test("Hindi Home (/hi) renders with Devanagari text and schema", async () => {
    const res = await fetch(`${BASE_URL}/hi`);
    if (res.status !== 200) throw new Error(`Status ${res.status}`);
    const html = await res.text();
    if (!html.includes("रियल-टाइम")) throw new Error("Missing Hindi real-time text");
    if (!html.includes("भारत")) throw new Error("Missing Hindi India text");
    if (!html.includes("RS.BSC Live")) throw new Error("Missing product name in Hindi");
  });

  // 4. Product Pages
  await test("Product Pages (/en/product & /hi/product)", async () => {
    const resEn = await fetch(`${BASE_URL}/en/product`);
    if (resEn.status !== 200) throw new Error(`EN Product status ${resEn.status}`);
    const htmlEn = await resEn.text();
    if (!htmlEn.includes("RS.BSC Live")) throw new Error("Missing product name");

    const resHi = await fetch(`${BASE_URL}/hi/product`);
    if (resHi.status !== 200) throw new Error(`HI Product status ${resHi.status}`);
    const htmlHi = await resHi.text();
    if (!htmlHi.includes("RS.BSC Live")) throw new Error("Missing HI product");
  });

  // 5. Services Pages
  await test("Services Pages (/en/services & /hi/services)", async () => {
    const resEn = await fetch(`${BASE_URL}/en/services`);
    if (resEn.status !== 200) throw new Error(`EN Services status ${resEn.status}`);
    const htmlEn = await resEn.text();
    if (!htmlEn.includes("Discovery &amp; Technical Scoping") && !htmlEn.includes("Discovery & Technical Scoping")) {
      throw new Error("Missing 5-step process in EN");
    }

    const resHi = await fetch(`${BASE_URL}/hi/services`);
    if (resHi.status !== 200) throw new Error(`HI Services status ${resHi.status}`);
    const htmlHi = await resHi.text();
    if (!htmlHi.includes("विश्लेषण")) throw new Error("Missing 5-step process in HI");
  });

  // 6. About Pages
  await test("About Pages (/en/about & /hi/about)", async () => {
    const resEn = await fetch(`${BASE_URL}/en/about`);
    if (resEn.status !== 200) throw new Error(`EN About status ${resEn.status}`);
    const htmlEn = await resEn.text();
    if (!htmlEn.includes("Mr. Aarav")) throw new Error("Missing CEO in EN about");

    const resHi = await fetch(`${BASE_URL}/hi/about`);
    if (resHi.status !== 200) throw new Error(`HI About status ${resHi.status}`);
    const htmlHi = await resHi.text();
    if (!htmlHi.includes("श्री आरव")) throw new Error("Missing CEO in HI about");
  });

  // 7. Contact Pages
  await test("Contact Pages (/en/contact & /hi/contact)", async () => {
    const resEn = await fetch(`${BASE_URL}/en/contact`);
    if (resEn.status !== 200) throw new Error(`EN Contact status ${resEn.status}`);
    const htmlEn = await resEn.text();
    if (!htmlEn.includes("name") || !htmlEn.includes("email")) {
      throw new Error("Missing form inputs in EN contact");
    }

    const resHi = await fetch(`${BASE_URL}/hi/contact`);
    if (resHi.status !== 200) throw new Error(`HI Contact status ${resHi.status}`);
    const htmlHi = await resHi.text();
    if (!htmlHi.includes("पूरा नाम")) throw new Error("Missing HI labels in contact");
  });

  // 8. Legal Pages (Privacy & Terms)
  await test("Legal Pages (/en/privacy, /hi/privacy, /en/terms, /hi/terms)", async () => {
    const pEn = await fetch(`${BASE_URL}/en/privacy`);
    const pHi = await fetch(`${BASE_URL}/hi/privacy`);
    const tEn = await fetch(`${BASE_URL}/en/terms`);
    const tHi = await fetch(`${BASE_URL}/hi/terms`);
    if (pEn.status !== 200 || pHi.status !== 200 || tEn.status !== 200 || tHi.status !== 200) {
      throw new Error(`Legal status error: pEn=${pEn.status}, pHi=${pHi.status}, tEn=${tEn.status}, tHi=${tHi.status}`);
    }
  });

  // 9. Robots and Sitemap
  await test("SEO Assets (/robots.txt & /sitemap.xml)", async () => {
    const robotsRes = await fetch(`${BASE_URL}/robots.txt`);
    if (robotsRes.status !== 200) throw new Error(`Robots status ${robotsRes.status}`);
    const robotsTxt = await robotsRes.text();
    if (!robotsTxt.includes("sitemap.xml")) throw new Error("Missing sitemap declaration in robots.txt");

    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
    if (sitemapRes.status !== 200) throw new Error(`Sitemap status ${sitemapRes.status}`);
    const sitemapXml = await sitemapRes.text();
    if (!sitemapXml.includes("/en") || !sitemapXml.includes("/hi")) {
      throw new Error("Sitemap missing language routes");
    }
  });

  // 10. Contact Form API Validation
  await test("Contact API validates empty inputs (400)", async () => {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
    const json = await res.json();
    if (json.success !== false) throw new Error("Expected success: false");
  });

  await test("Contact API catches honeypot spam bot (200 silent rejection)", async () => {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "SpamBot",
        email: "bot@spam.com",
        subject: "Spam Link",
        message: "Buy our crypto tokens now http://spam.com",
        website: "http://bot-honeypot-filled.com",
      }),
    });
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    const json = await res.json();
    if (json.success !== true) throw new Error("Expected honeypot silent success");
  });

  await test("Contact API handles missing Resend credentials gracefully (503)", async () => {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Aarav Mehta",
        email: "aarav.mehta@example.com",
        subject: "Live Audio Scaling Consultation",
        message: "We would like to discuss real-time audio rooms for 10,000 concurrent listeners.",
        locale: "en",
      }),
    });
    // Since RESEND_API_KEY is not set in production test env, it should return 503 with a safe message
    if (res.status !== 503) {
      throw new Error(`Expected 503 (service unconfigured), got ${res.status}`);
    }
    const json = await res.json();
    if (json.success !== false) throw new Error("Expected success: false");
    if (!json.error || json.error.includes("RESEND_API_KEY")) {
      throw new Error("Error message must be safe and not leak internal server details");
    }
  });

  // 11. Assets verification
  await test("Static Brand Assets (/logo.webp, /icon.png, /apple-icon.png)", async () => {
    const logoRes = await fetch(`${BASE_URL}/logo.webp`);
    if (logoRes.status !== 200) throw new Error(`Logo status ${logoRes.status}`);

    const iconRes = await fetch(`${BASE_URL}/icon.png`);
    if (iconRes.status !== 200) throw new Error(`Icon status ${iconRes.status}`);

    const appleRes = await fetch(`${BASE_URL}/apple-icon.png`);
    if (appleRes.status !== 200) throw new Error(`Apple icon status ${appleRes.status}`);
  });

  console.log(`\n========================================`);
  console.log(`Tests Completed: ${passed + failed}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
