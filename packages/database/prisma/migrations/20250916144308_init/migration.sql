-- CreateTable
CREATE TABLE "errors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "additionalInfo" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "errors_id_key" ON "errors"("id");
