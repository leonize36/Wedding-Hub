import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const DATA_FILE = path.resolve(process.cwd(), "rsvp-submissions.json");

function loadSubmissions(): object[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    }
  } catch {
  }
  return [];
}

function saveSubmissions(submissions: object[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

router.post("/rsvp", (req, res) => {
  const body = req.body as Record<string, unknown>;

  const required = ["name", "attending"];
  for (const field of required) {
    if (!body[field]) {
      res.status(400).json({ error: `Missing required field: ${field}` });
      return;
    }
  }

  const submission = {
    id: Date.now(),
    submittedAt: new Date().toISOString(),
    name: body.name,
    phone: body.phone ?? "",
    email: body.email ?? "",
    attending: body.attending,
    dietary: body.dietary ?? "",
    dietaryNote: body.dietaryNote ?? "",
    song: body.song ?? "",
    cryFirst: body.cryFirst ?? "",
    activity: body.activity ?? "",
    message: body.message ?? "",
  };

  const submissions = loadSubmissions();
  submissions.push(submission);
  saveSubmissions(submissions);

  req.log.info({ name: submission.name, attending: submission.attending }, "RSVP received");

  res.status(201).json({ ok: true });
});

router.get("/rsvp", (_req, res) => {
  res.json(loadSubmissions());
});

export default router;
