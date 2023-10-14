-- CreateTable
CREATE TABLE "OrdemServico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "Descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Equipamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numeroOS" INTEGER NOT NULL,
    "indice" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "Problema" TEXT NOT NULL,
    CONSTRAINT "Equipamento_numeroOS_fkey" FOREIGN KEY ("numeroOS") REFERENCES "OrdemServico" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "OrdemServico_numero_key" ON "OrdemServico"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "Equipamento_numeroOS_key" ON "Equipamento"("numeroOS");
