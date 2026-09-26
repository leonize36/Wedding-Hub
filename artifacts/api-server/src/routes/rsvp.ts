import { Router } from "express";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

const router = Router();

const DATA_FILE = path.resolve(process.cwd(), "rsvp-submissions.json");
const EXCEL_FILE = path.resolve(process.cwd(), "rsvp-submissions.xlsx");

type RsvpSubmission = {
  id: number;
  submittedAt: string;
  name: unknown;
  phone: unknown;
  email: unknown;
  attending: unknown;
  dietary: unknown;
  dietaryNote: unknown;
  song: unknown;
  cryFirst: unknown;
  activity: unknown;
  message: unknown;
};

function loadSubmissions(): RsvpSubmission[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const parsed = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {
  }
  return [];
}

async function saveSubmissions(submissions: RsvpSubmission[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  await saveExcelSubmissions(submissions);
}

async function saveExcelSubmissions(submissions: RsvpSubmission[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("RSVPs");

  worksheet.columns = [
    { header: "ID", key: "id", width: 18 },
    { header: "Submitted At", key: "submittedAt", width: 24 },
    { header: "Name", key: "name", width: 28 },
    { header: "Phone", key: "phone", width: 20 },
    { header: "Email", key: "email", width: 34 },
    { header: "Attending", key: "attending", width: 14 },
    { header: "Dietary Requirements", key: "dietary", width: 24 },
    { header: "Dietary Notes", key: "dietaryNote", width: 28 },
    { header: "Song Requests", key: "song", width: 32 },
    { header: "Who Will Cry First", key: "cryFirst", width: 22 },
    { header: "Wedding Activity", key: "activity", width: 28 },
    { header: "Message", key: "message", width: 42 },
  ];

  worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  worksheet.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "425F45" },
  };
  worksheet.getRow(1).alignment = { vertical: "middle" };
  worksheet.views = [{ state: "frozen", ySplit: 1 }];
  worksheet.autoFilter = {
    from: "A1",
    to: "L1",
  };

  for (const submission of submissions) {
    worksheet.addRow({
      id: submission.id,
      submittedAt: submission.submittedAt,
      name: String(submission.name ?? ""),
      phone: String(submission.phone ?? ""),
      email: String(submission.email ?? ""),
      attending: String(submission.attending ?? ""),
      dietary: String(submission.dietary ?? ""),
      dietaryNote: String(submission.dietaryNote ?? ""),
      song: String(submission.song ?? ""),
      cryFirst: String(submission.cryFirst ?? ""),
      activity: String(submission.activity ?? ""),
      message: String(submission.message ?? ""),
    });
  }

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      row.alignment = { vertical: "top", wrapText: true };
    }
  });

  await workbook.xlsx.writeFile(EXCEL_FILE);
}

router.post("/rsvp", async (req, res) => {
  const body = req.body as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const attending = body.attending;

  if (!name) {
    res.status(400).json({ error: "Missing required field: name" });
    return;
  }

  if (attending !== "yes" && attending !== "no") {
    res.status(400).json({ error: "Please select whether you will be attending." });
    return;
  }

  const submission: RsvpSubmission = {
    id: Date.now(),
    submittedAt: new Date().toISOString(),
    name,
    phone: body.phone ?? "",
    email: body.email ?? "",
    attending,
    dietary: body.dietary ?? "",
    dietaryNote: body.dietaryNote ?? "",
    song: body.song ?? "",
    cryFirst: body.cryFirst ?? "",
    activity: body.activity ?? "",
    message: body.message ?? "",
  };

  const submissions = loadSubmissions();
  submissions.push(submission);

  try {
    await saveSubmissions(submissions);
  } catch (error) {
    req.log.error({ err: error }, "Could not save RSVP workbook");
    res.status(500).json({ error: "Could not save your RSVP. Please try again." });
    return;
  }

  req.log.info({ name: submission.name, attending: submission.attending }, "RSVP received");

  res.status(201).json({ ok: true });
});

router.get("/rsvp", (_req, res) => {
  res.json(loadSubmissions());
});

router.get("/rsvp/export", async (_req, res) => {
  try {
    if (!fs.existsSync(EXCEL_FILE)) {
      await saveExcelSubmissions(loadSubmissions());
    }

    res.download(EXCEL_FILE, "wedding-rsvps.xlsx");
  } catch (error) {
    res.status(500).json({ error: "Could not prepare the RSVP Excel file." });
  }
});

export default router;
