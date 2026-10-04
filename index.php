<?php
/**
 * RS.BSC Laragon / Apache Gateway Bridge
 * 
 * When opening the project directory via Laragon (http://localhost/tsj-projects/RsBsc
 * or http://tsj-projects.test/RsBsc), automatically redirect to the running Next.js server.
 */
$target = "http://localhost:3000/en";
header("Location: " . $target, true, 302);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=http://localhost:3000/en">
  <title>Redirecting to RS.BSC...</title>
</head>
<body style="background:#05070d;color:#f1f5f9;font-family:system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;">
  <div style="text-align:center;padding:2rem;background:#0f1629;border:1px solid #78581e;border-radius:1rem;box-shadow:0 10px 30px rgba(0,0,0,0.8);">
    <h2 style="color:#d49e35;margin-bottom:0.5rem;">RS.BSC Technologies</h2>
    <p style="color:#cbd5e1;font-size:0.9rem;">Opening application on port 3000...</p>
    <a href="http://localhost:3000/en" style="display:inline-block;margin-top:1rem;padding:0.6rem 1.4rem;background:#d49e35;color:#05070d;font-weight:bold;text-decoration:none;border-radius:0.5rem;">
      Click here if not redirected automatically
    </a>
  </div>
</body>
</html>
